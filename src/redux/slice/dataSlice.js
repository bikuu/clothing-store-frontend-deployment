import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    allData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { allData } = dataSlice.actions;

export default dataSlice.reducer;
