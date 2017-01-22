import { combineReducers } from 'redux';
import alarms from './reducerAlarm';

const rootReducer = combineReducers({
    alarms
});

export default rootReducer