import { configureStore } from "@reduxjs/toolkit";

import drawerReducer from "./slice/drawerSlice";
import userReducer from "./slice/userSlice";
import dataReducer from "./slice/dataSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    user: userReducer,
    data: dataReducer,
  },
});
