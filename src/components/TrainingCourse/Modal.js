import React from 'react';
import ModalForm from "./ModalForm";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
    },
  };
Modal.setAppElement("#root");

const ModalDialog = ({modalIsOpen, setIsOpen, courseId}) => {

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h2> TEST YOUR IQ</h2>
          <button onClick={closeModal} className="btn btn-danger">
            {" "}
            <CloseIcon />{" "}
          </button>
        </div>
        <ModalForm id={courseId} />
      </Modal>
    );
};

export default ModalDialog;