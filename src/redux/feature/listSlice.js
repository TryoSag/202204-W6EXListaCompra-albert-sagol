import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    loadList: (list, action) => [...action.payload],
  },
});
export const { loadList: loadListActionCreate } = listSlice.actions;
export default listSlice.reducer;
