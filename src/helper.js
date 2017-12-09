const millisecondsIn = {
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000
};

const getTimePart = function getTimePartFunction(milliseconds, part) {
    if (
        milliseconds === null
        || milliseconds === undefined
        || Number.isNaN(parseInt(milliseconds, 10))
    ) {
        return null;
    }
    return Math.floor(milliseconds / millisecondsIn[part]);
};

const padString = function padStringFunction(str, padCharacter, length) {
    if (str === null || str === undefined) {
        return null;
    }
    const safeStr = String(str);
    if (safeStr.length >= length) {
        return safeStr;
    }
    const padArray = new Array(length).fill(padCharacter).join('');
    const returnString = padArray.substr(0, length - safeStr.length).concat(safeStr);
    return returnString;
};

const getTimeString = function getTimeStringFunction(milliseconds) {
    if (
        milliseconds === null
        || milliseconds === undefined
        || Number.isNaN(parseInt(milliseconds, 10))
    ) {
        return null;
    }
    let remainingMilliseconds = milliseconds;
    const hours = getTimePart(remainingMilliseconds, 'hours');
    remainingMilliseconds -= hours * millisecondsIn.hours;
    const minutes = getTimePart(remainingMilliseconds, 'minutes');
    remainingMilliseconds -= minutes * millisecondsIn.minutes;
    const seconds = getTimePart(remainingMilliseconds, 'seconds');
    remainingMilliseconds -= seconds * millisecondsIn.seconds;
    return `${padString(hours, '0', 2)}:${padString(minutes, '0', 2)}:${padString(seconds, '0', 2)}:${padString(remainingMilliseconds, '0', 3)}`;
};

export default getTimeString;