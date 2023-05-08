import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawer: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
