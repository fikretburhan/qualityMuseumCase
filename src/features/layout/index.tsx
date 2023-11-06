import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../auth/Services/authSlice";
import Cookies from "js-cookie";

const Layout = ({ children }: { children: ReactNode }) => {
  const user = Cookies.get("user");
  const dispatch = useDispatch();
  const logoutHandler = () => {
    Cookies.remove("user");
    dispatch(logout());
  };
  return (
    <>
      <div style={{ height: "100%" }}>
        {user && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px",
              height: "auto",
            }}
          >
            <button
              className="linkbutton"
              style={{ alignSelf: "flex-end", cursor: "pointer" }}
              onClick={logoutHandler}
            >
              Çıkış
            </button>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Layout;
