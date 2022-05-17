import {  createSlice } from "@reduxjs/toolkit";

const initialuiState = {
  isShown: false,
  notification:null
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialuiState,
  reducers: {
    isShown(state) {
      state.isShown = !state.isShown;
    },
    setNotification(state,action){
      state.notification={
        status:action.payload.status,
        message:action.payload.message,
        title:action.payload.title
      }
    }
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer
