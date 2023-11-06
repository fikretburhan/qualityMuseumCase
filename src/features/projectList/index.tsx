import React, { useCallback, useState } from "react";
import { IProjectList } from "./Service/projectListTypes";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { selectProjectList } from "./Service/projectListSlice";
import Modal from "react-modal";
import CreateProject from "./Components/createProject";
import UpdateProject from "./Components/updateProject";
import DeleteProject from "./Components/deleteProject";

const ProjectList = () => {
  const projectData = useSelector(selectProjectList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState<string | null>(null);
  const [modalProps, setModalProps] = useState<any | null>(null);

  const openModal = (modalState: string, ...rest: any | null) => {
    setModalState(modalState);
    setModalProps(rest);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getModalContent = useCallback(() => {
    switch (modalState) {
      case "create":
        return <CreateProject setIsModalOpen={setIsModalOpen} />;
      case "update":
        return (
          <UpdateProject
            setIsModalOpen={setIsModalOpen}
            modalProps={modalProps}
          />
        );
      case "delete":
        return (
          <DeleteProject setIsModalOpen={setIsModalOpen} modalProps={modalProps} />
        );
      default:
        break;
    }
  }, [modalState, modalProps]);

  return (
    <>
      <div className="crud-table" style={{ width: "60%", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <button
            id={"createButton"}
            className="btn"
            style={{ backgroundColor: "green" }}
            onClick={() => openModal("create")}
          >
            Ekle
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Proje Adı</th>
              <th>Açıklama</th>
              <th>Dil</th>
              <th>Durum</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((item: IProjectList) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.language}</td>
                <td>{item.activeStatus ? "Aktif" : "Aktif değil"}</td>
                <td>{format(item.createdDate, "dd/MM/yyyy")}</td>
                <td>
                  <button
                    id={"updateButton"}
                    className="btn"
                    style={{ backgroundColor: "orange" }}
                    onClick={() => openModal("update", item)}
                  >
                    Güncelle
                  </button>
                  <button
                    id={"deleteButton"}
                    className="btn"
                    style={{ backgroundColor: "red" }}
                    onClick={() => openModal("delete", item.id, item.name)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Proje Ekle"
        className={"Modal"}
      >
        {getModalContent()}
      </Modal>
    </>
  );
};

export default ProjectList;
