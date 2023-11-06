import React, { useState } from "react";
import { ILogin } from "../Services/authTypes";
import { useDispatch } from "react-redux";
import { login } from "../Services/authSlice";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Signup = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ILogin>();

  //   const dispatch = useDispatch();
  //   const loginHandler = () => {
  //     const values = getValues();
  //     dispatch(login(values));
  //   };

  return (
    <main
      style={{
        height: "100%",
        backgroundColor: "lavender",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        <h2>Kullanıcı Kayıt</h2>
        <form
          //onSubmit={handleSubmit(loginHandler)}
          style={{
            width: "300px",
            padding: "50px",
            borderRadius: "10px",
            backgroundColor: "lightblue",
          }}
        >
          <div style={{ marginBottom: "2em" }}>
            <label htmlFor="username">Kullanıcı adı</label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  name={field.name}
                  id={field.name}
                  onChange={field.onChange}
                  value={field.value}
                  style={{ marginBottom: "5px" }}
                />
              )}
              rules={{ required: "Kullanıcı adı zorunludur!" }}
            />
            {errors.username && (
              <span style={{ color: "red" }}>{errors.username.message}</span>
            )}
          </div>
          <div style={{ marginBottom: "2em" }}>
            <label htmlFor="password">Şifre</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  name={field.name}
                  id={field.name}
                  onChange={field.onChange}
                  value={field.value}
                  style={{ marginBottom: "5px" }}
                />
              )}
              rules={{ required: "Şifre zorunludur!" }}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button className="btn">Kayıt ol</button>
            <Link to={"/"}>Giriş</Link>
          </div>
        </form>
      </>
    </main>
  );
};

export default Signup;
