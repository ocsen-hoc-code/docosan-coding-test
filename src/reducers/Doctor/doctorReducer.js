import { createSlice } from '@reduxjs/toolkit';
import dataList from '../../data/dataList'
export const doctorReducer = createSlice({
  name: 'doctors',
  initialState: {
    list: dataList,
  },
  reducers: {
    setDoctors: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setDoctors } = doctorReducer.actions;

export const doctors = state => state.doctors.list;

export default doctorReducer.reducer;
