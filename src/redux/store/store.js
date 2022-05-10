import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../feature/listSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
export default store;
