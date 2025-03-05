const easterCalendar = require('./easter.cjs');
const { feastDates } = require('./feast_dates.cjs');


function isAbstinence(date) {
    const year = date.getFullYear();
    const goodFridayDay = easterCalendar.goodFriday(year);
    const ashesDay = easterCalendar.ashesDay(year);

    if (isDateEqual(date, ashesDay)) {
        console.log('ashes day');
        return true;
    }

    if (isDateEqual(date, goodFridayDay)) {
        return true;
    }

    if (isFeast(date) && isFriday(date)) {
        return false;
    }

    return isFriday(date);
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