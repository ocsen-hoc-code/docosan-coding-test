import { combineReducers } from 'redux'
import doctorReducer from '../reducers/Doctor/doctorReducer';
export default combineReducers({
    doctors: doctorReducer
})