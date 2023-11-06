import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthCredentials, ILogin } from "./authTypes";

const initialState: IAuthCredentials = {
  user: { username: "", password: "" },
  loggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: IAuthCredentials, action: PayloadAction<ILogin>) => {
      const { username, password } = action.payload;
      state.user.username = username;
      state.user.password = password;
      state.loggedIn = true;
    },
    logout: (state: IAuthCredentials) => {
      state.user.username = "";
      state.user.password = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectLoggedIn = (state: any) => state.auth.loggedIn;
