import { ADD_ALARM, REMOVE_ALARM } from '../actions/index';

const alarms = (state = [], action) => {
    switch (action.type) {
        case ADD_ALARM:
            return [
                ...state,
                {
                    delay: action.delay,
                    id: action.id
                }];
        case REMOVE_ALARM:
            return state.filter(alarm =>
                alarm.id !== action.id
            );
        default:
            return state
    }
}

export default alarms