import React from "react";
import {  Controller, useForm } from "react-hook-form";
import { IProjectList } from "../Service/projectListTypes";
import { useDispatch } from "react-redux";
import { addItem } from "../Service/projectListSlice";

export interface ICreateProject {
  setIsModalOpen: (e: boolean) => void;
}
const { v4: uuidv4 } = require("uuid");

const CreateProject = ({ setIsModalOpen }: ICreateProject) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IProjectList>();
  const dispatch = useDispatch();
  const addProject = () => {
    let formData = getValues();
    formData = { ...formData, createdDate: new Date(), id: uuidv4() };
    dispatch(addItem(formData));
    setIsModalOpen(false);
  };
  return (
    <div>
      <h3>Yeni Proje Ekle</h3>
      <form
        onSubmit={handleSubmit(addProject)}
        style={{
          width: "300px",
          padding: "50px",
          borderRadius: "10px",
          backgroundColor: "lightblue",
        }}
      >
        <div style={{ marginBottom: "2em" }}>
          <label htmlFor="name">Proje Adı</label>
          <Controller
            name="name"
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
            rules={{ required: "Proje Adı zorunludur!" }}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>
        <div style={{ marginBottom: "2em" }}>
          <label htmlFor="description">Açıklama</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <input
                type="description"
                name={field.name}
                id={field.name}
                onChange={field.onChange}
                value={field.value}
                style={{ marginBottom: "5px" }}
              />
            )}
            rules={{ required: "Açıklama zorunludur!" }}
          />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
          )}
        </div>

        <div style={{ marginBottom: "2em" }}>
          <label htmlFor="language">Dil</label>
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <input
                type="language"
                name={field.name}
                id={field.name}
                onChange={field.onChange}
                value={field.value}
                style={{ marginBottom: "5px" }}
              />
            )}
            rules={{ required: "Dil zorunludur!" }}
          />
          {errors.language && (
            <span style={{ color: "red" }}>{errors.language.message}</span>
          )}
        </div>

        <div
          style={{
            marginBottom: "2em",
            display: "flex",
            justifyContent: "flex-start",
            width: "150px",
            alignItems: "center",
          }}
        >
          <label htmlFor="activeStatus" style={{ width: "70px" }}>
            Aktif mi?
          </label>
          <Controller
            name="activeStatus"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                name={field.name}
                id={field.name}
                onChange={field.onChange}
                style={{ marginBottom: "5px", width: "30px" }}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ width: "300px", backgroundColor: "green" }}
        >
          Ekle
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
