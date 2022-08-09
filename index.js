// Code your solution in this file!

const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function (a) {
        return fare * a
    }
}

const fareDoubler = function(fare) {
    return fare*2;
}

const fareTripler = function(fare) {
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, fun) {
    if (fun === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (fun === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}

