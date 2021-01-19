import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import doctorReducer from '../reducers/Doctor/doctorReducer';
export default configureStore({
  reducer: reducers
});
