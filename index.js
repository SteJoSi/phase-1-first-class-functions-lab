const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() {
    return function(fare) {
        return fare * 5;
    }
}

function fareDoubler(fare) {
    return fare * 2;
} 

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, functionName) {
    return functionName(drivers)
}