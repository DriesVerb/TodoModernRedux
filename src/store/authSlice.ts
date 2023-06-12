import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", authenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.username = action.payload.username;
      state.authenticated = true;
    },
    logoutUser(state) {
      state.username = "";
      state.authenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
