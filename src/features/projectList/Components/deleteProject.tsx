import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../Service/projectListSlice";

interface IDeleteProject {
  modalProps:any
  setIsModalOpen: (e: boolean) => void;
}
const DeleteProject = ({ setIsModalOpen,modalProps  }: IDeleteProject) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteItem(modalProps[0]));
    setIsModalOpen(false)
  };
  return (
    <div>
      <p><b>{modalProps[1]}</b> projesini silmek istiyor musunuz?</p>
      <div style={{display:"flex", justifyContent:"flex-end",marginTop:"20px"}}>
        <button
          onClick={deleteHandler}
          className="btn"
          style={{ backgroundColor: "red" }}
        >
          Sil
        </button>
        <button
          onClick={() => setIsModalOpen(false)}
          className="btn"
          style={{ backgroundColor: "lightgray" }}
        >
          Vazgeç
        </button>
      </div>
    </div>
  );
};

export default DeleteProject;
