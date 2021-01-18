import { createSlice } from '@reduxjs/toolkit';
import dataList from '../../data/dataList'
export const doctorReducer = createSlice({
  name: 'doctors',
  initialState: {
    list: dataList,
  },
  reducers: {
    updateList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { updateList } = doctorReducer.actions;

export const doctors = state => state.doctors.list;

export default doctorReducer.reducer;
