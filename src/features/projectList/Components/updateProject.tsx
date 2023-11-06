import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IProjectList } from "../Service/projectListTypes";
import { useDispatch } from "react-redux";
import { updateItem } from "../Service/projectListSlice";

export interface ICreateProject {
  setIsModalOpen: (e: boolean) => void;
  modalProps: any | null;
}

const UpdateProject = ({ setIsModalOpen, modalProps }: ICreateProject) => {
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IProjectList>();
  const dispatch = useDispatch();
  const updateProject = () => {
    let formData = getValues();
    formData = {
      ...formData,
      createdDate: modalProps[0].createdDate,
      id: modalProps[0].id,
    };
    dispatch(updateItem(formData));
    setIsModalOpen(false);
  };
  useEffect(() => {
    reset({
      name: modalProps[0].name,
      description: modalProps[0].description,
      language: modalProps[0].language,
      activeStatus: modalProps[0].activeStatus,
    });
  }, [modalProps, reset]);
  return (
    <div>
      <h3>Güncelle</h3>
      <form
        onSubmit={handleSubmit(updateProject)}
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
          style={{ width: "300px", backgroundColor: "orange" }}
        >
          Güncelle
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
