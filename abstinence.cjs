const { goodFriday } = require('./easter.cjs');
const { feastDates } = require('./feast_dates.cjs');


function isAbstinence(date) {
    const year = date.getFullYear();
    const goodFridayDay = goodFriday(year);

    if (isFriday(date)) {
        return false;
    }

    if (isDateEqual(date, goodFridayDay)) {
        return true;
    }

    return isFeast(date);
}

function isDateEqual(x, y) {
    return x.getMonth() === y.getMonth() &&
        x.getDate() == y.getDate();
}

function isFriday(date) {
    return date.getDay() === 5;
}

function isFeast(date) {
    return feastDates().some(fixedDate => {
        return isDateEqual(fixedDate, date);
    });
}

module.exports = {
    isAbstinence
}