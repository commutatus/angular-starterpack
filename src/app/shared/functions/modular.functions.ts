import * as moment from 'moment';
// Date time operations

export function getRelativeTime(dateTime) {
    if (!dateTime) {
        return null;
    }

    const today = moment();

    const date = moment(dateTime);

    const difference = today.diff(date);

    const dayInMilli = 86400000;
    const hourInMilli = 3600000;
    const minuteInMilli = 60000;

    if (difference >= dayInMilli) {
        return moment(date).format(`MMM Do, h:mm a`);
    } else if (difference >= hourInMilli) {
        const diff = today.diff(date, 'hours');
        return `${diff} ${diff > 1 ? 'hours' : 'hour'} ago`;
    } else if (difference >= minuteInMilli) {
        const diff = today.diff(date, 'minutes');
        return `${diff} ${diff > 1 ? 'minutes' : 'minute'} ago`;
    } else if (difference < minuteInMilli) {
        return 'Just now';
    }
}
export function getMinimalisticRelativeTime(dateTime) {
    if (!dateTime) {
        return null;
    }

    const today = moment();

    const time = moment(dateTime);

    const diff = today.diff(time);

    const duration = moment.duration(diff);

    if (duration.years() > 0) {
        return duration.years() + 'y';
    } else if (duration.weeks() > 0) {
        return duration.weeks() + 'w';
    } else if (duration.days() > 0) {
        return duration.days() + 'd';
    } else if (duration.hours() > 0) {
        return duration.hours() + 'h';
    } else if (duration.minutes() > 0) {
        return duration.minutes() + 'm';
    } else if (duration.seconds() > 0) {
        return duration.seconds() + 's';
    }
}

// Object manipulation

export const deepCopy = (item) => {
    if (Array.isArray(item)) {
        return deepCopyArray(item);
    }
    if (typeof item === 'object') {
        return deepCopyObject(item);
    }
    return item;
};

export const deepCopyArray = (arr) => {
    if (!arr) {
        return arr;
    }
    const copy = [];
    arr.forEach(elem => {
        if (Array.isArray(elem)) {
            copy.push(deepCopyArray(elem))
        } else {
            if (typeof elem === 'object') {
                copy.push(deepCopyObject(elem))
            } else {
                copy.push(elem)
            }
        }
    });
    return copy;
};

export const deepCopyObject = (obj) => {
    if (!obj) {
        return obj;
    }
    if (obj instanceof Date || obj instanceof Function) {
        return obj;
    }
    const tempObj = {};
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (Array.isArray(obj[key])) {
            tempObj[key] = deepCopyArray(obj[key]);
        } else {
            if (typeof obj[key] === 'object') {
                tempObj[key] = deepCopyObject(obj[key]);
            } else {
                tempObj[key] = obj[key]
            }
        }
    }
    return tempObj;
};

export const isObjectEmpty = obj => {
    if (!obj) {
        return true;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
