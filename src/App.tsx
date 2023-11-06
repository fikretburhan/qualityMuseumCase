import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, selectLoggedIn } from "./features/auth/Services/authSlice";
import Layout from "./features/layout";
import AppRoute from "./router/appRouter";
import AuthRouter from "./router/authRouter";
import Cookies from "js-cookie";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [dispatch]);
  const loggedIn = useSelector(selectLoggedIn);
  return <Layout>{loggedIn ? <AppRoute /> : <AuthRouter />}</Layout>;
}

export default App;
