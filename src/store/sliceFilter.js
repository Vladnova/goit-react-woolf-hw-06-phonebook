import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      console.log('payload', payload)
      return payload;
    },
  },
});


export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;