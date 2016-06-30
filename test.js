/**
 * Created by s727223 on 25/11/2015.
 */
(function () {
    angular.module('ssui').filter('shoppingResponseFilter', shoppingResponseFilter);

    shoppingResponseFilter.$inject = ['commonService'];

    function shoppingResponseFilter(commonService) {
        return function (dataList, filterData) {
            /*

             filterData = {
             legDetailsName : 'flightLegDetails',
             filterType : 'Aircraft type',
             filterOptions : []
             };

             */
            if (dataList === undefined || dataList.length === 0) return dataList;

            var filterResult = [];
            var outboundLegDetail;
            var inboundLegDetail;


            angular.forEach(dataList, function (flightOption) {
                var isValid = false;

                var legDetailData = [];
                if (filterData.legDetailsName.indexOf('&') > -1) {
                    var legDetailNameArray = filterData.legDetailsName.trim().split('&');
                    angular.forEach(legDetailNameArray, function (legDetailName, legDetailIndex) {
                        if (legDetailName.indexOf('.') > -1) {
                            var obj = getObjectByProperty(flightOption, legDetailName.trim());
                            if (legDetailIndex == 0){
                                outboundLegDetail = obj;
                            } else {
                                inboundLegDetail = obj;
                            }

                            legDetailData = legDetailData.concat(obj);
                        }

                    })
                } else {
                    var obj = getObjectByProperty(flightOption, filterData.legDetailsName);
                    legDetailData = legDetailData.concat(obj);
                }


                if(filterData.filterType === 'Other criteria'){
                    var addFlag = true;
                    for (var k = 0; k < filterData.filterOptions.length; k++) {
                        if (filterData.filterOptions[k].value.toUpperCase() == 'DIRECTFLIGHT') {
                            if (filterData.legDetailsName.indexOf('&') > -1) {
                                if (outboundLegDetail.length !== 1 && inboundLegDetail.length !== 1) {
                                    addFlag = false;
                                    isValid = true;
                                    break;
                                }
                            } else {
                                if (legDetailData.length !== 1) {
                                    addFlag = false;
                                    isValid = true;
                                    break;
                                }
                            }
                        } else if (filterData.filterOptions[k].value.toUpperCase() == 'EXCLUDEHAJUMRAHFLIGHTS') {
                            if (legDetailData[k].isHajUmrahFlight) {
                                addFlag = false;
                                isValid = true;
                                break;
                            }
                        } else if (filterData.filterOptions[k].value.toUpperCase() == 'EXCLUDEDOUBLECONNECTIONS') {
                            if (filterData.legDetailsName.indexOf('&') > -1) {
                                if (outboundLegDetail.length === 3 && inboundLegDetail.length === 3) {
                                    addFlag = false;
                                    isValid = true;
                                    break;
                                }
                            } else {
                                if (legDetailData.length === 3) {
                                    addFlag = false;
                                    isValid = true;
                                    break;
                                }
                            }
                        }
                    }

                    if(addFlag){
                        filterResult.push(flightOption);
                    }
                } else if (filterData.filterType === 'Exclude via points') {
                    // Filter by Exclude via points
                    // It requires viaPointString object in flightOption
                    if (filterData.filterType === 'Exclude via points' && flightOption.viaPointString !== undefined) {
                        var isValidExcludeViaPoints = true;
                        for (var i = 0; i < filterData.filterOptions.length; i++) {
                            if (flightOption.viaPointString.toUpperCase().indexOf(filterData.filterOptions[i].value.toUpperCase()) > -1) {
                                isValidExcludeViaPoints = false;
                                break;
                            }
                        }
                        if (isValidExcludeViaPoints) {
                            filterResult.push(flightOption);
                        }
                    }
                } else {
                    for (var i = 0; i < filterData.filterOptions.length; i++) {
                        // Filter by Departure Time
                        if (filterData.filterType == 'Departure Time') {
                            if ((filterData.filterOptions[i].value === 'AM' && parseInt(legDetailData[0].departureTime) < 1200) ||
                                (filterData.filterOptions[i].value === 'PM' && parseInt(legDetailData[0].departureTime) >= 1200)) {
                                filterResult.push(flightOption);
                                isValid = true;
                            }
                        }

                        // Filter by Arrival Time
                        if (filterData.filterType == 'Arrival Time') {
                            if ((filterData.filterOptions[i].value === 'AM' && parseInt(legDetailData[legDetailData.length-1].arrivalTime) < 1200) ||
                                (filterData.filterOptions[i].value === 'PM' && parseInt(legDetailData[legDetailData.length-1].arrivalTime) >= 1200)) {
                                filterResult.push(flightOption);
                                isValid = true;
                            }
                        }
                        for (var j = 0; j < legDetailData.length; j++) {
                            // Filter by Aircraft type
                            if (filterData.filterType === 'Aircraft type') {
                                if (legDetailData[j].equipmentTypeName !== undefined &&
                                    legDetailData[j].equipmentTypeName.toUpperCase() === filterData.filterOptions[i].value.toUpperCase()) {
                                    filterResult.push(flightOption);
                                    isValid = true;
                                    break;
                                }
                            }

                            // Filter by Airlines
                            if (filterData.filterType === 'Airlines') {
                                if (legDetailData[j].carrierCode !== undefined &&
                                    legDetailData[j].carrierCode.toUpperCase() === filterData.filterOptions[i].value.toUpperCase()) {
                                    filterResult.push(flightOption);
                                    isValid = true;
                                    break;
                                }
                            }



                            // Filter by Other criteria
                            if (filterData.filterType === 'Other criteria') {
                                if (filterData.filterOptions[i].value.toUpperCase() === 'DIRECTFLIGHT') {
                                    if (filterData.legDetailsName.indexOf('&') > -1){
                                        if (outboundLegDetail.length === 1 || inboundLegDetail.length === 1) {
                                            filterResult.push(flightOption);
                                            isValid = true;
                                            break;
                                        }
                                    } else {
                                        if (legDetailData.length === 1) {
                                            filterResult.push(flightOption);
                                            isValid = true;
                                            break;
                                        }
                                    }
                                } else if (filterData.filterOptions[i].value.toUpperCase() === 'EXCLUDEHAJUMRAHFLIGHTS') {
                                    if (!legDetailData[i].isHajUmrahFlight) {
                                        filterResult.push(flightOption);
                                        isValid = true;
                                        break;
                                    }
                                } else if (filterData.filterOptions[i].value.toUpperCase() === 'EXCLUDESINGLECONNECTIONS') {
                                    if(filterData.legDetailsName.indexOf('&') > -1){
                                        if (outboundLegDetail.length !== 2 || inboundLegDetail.length !== 2) {
                                            filterResult.push(flightOption);
                                            isValid = true;
                                            break;
                                        }
                                    }else{
                                        if (legDetailData.length !== 2) {
                                            filterResult.push(flightOption);
                                            isValid = true;
                                            break;
                                        }
                                    }
                                } else if (filterData.filterOptions[i].value.toUpperCase() === 'EXCLUDEDOUBLECONNECTIONS') {
                                    if(filterData.legDetailsName.indexOf('&') > -1){
                                        if (outboundLegDetail.length !== 3 || inboundLegDetail.length !== 3) {
                                            filterResult.push(flightOption);
                                            isValid = true;
                                            break;
                                        }
                                    }else{
                                        if (legDetailData.length !== 3) {
                                            filterResult.push(flightOption);
                                            isValid = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (isValid) {
                            break;
                        }
                    }
                }


            });
            return filterResult;
        }
    }

    function getObjectByProperty(object, property) {
        var indexOfDot = property.indexOf(".");
        if (indexOfDot > -1) {
            var newProperty = property.substring(0, indexOfDot);
            var childProperty = property.substring(indexOfDot + 1, property.length);
            return getObjectByProperty(object[newProperty], childProperty);
        } else {
            return object[property];
        }
    }
})();
