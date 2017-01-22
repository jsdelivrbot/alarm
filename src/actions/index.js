export const ADD_ALARM = 'ADD_ALARM';
export const REMOVE_ALARM = 'REMOVE_ALARM';

let nextAlarmId = 0;

export const addAlarm = (delay) => {
    return {
        type: ADD_ALARM,
        id: nextAlarmId++,
        delay
    }
}

export const removeAlarm = (id) => {
    return {
        type: REMOVE_ALARM,
        id
    }
}