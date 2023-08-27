import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  RegisterData: {},
  isScroll: false
};

const reducerSlicer = createSlice({
  name: 'reducerSlicer',
  initialState,
  reducers: {
    setIsScroll: (state, action) => {
      state.isScroll = action?.payload
    },
  },

});

export const {
  setIsScroll
} = reducerSlicer.actions;
export default reducerSlicer.reducer;
