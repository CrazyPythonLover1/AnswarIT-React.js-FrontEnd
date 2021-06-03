import React, { useState } from "react";
import course1 from "../../Image/course/Software Development Course.jpg";
import course2 from "../../Image/course/Blockchain training Course.jpg";
import course3 from "../../Image/course/Digital marketing course.jpg";
import topImg from "../../Image/header/1.6.jpg";
import ModalForm from "./ModalForm";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import "./TrainingCourse.css";

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

const AllCardData = [
  {
    id: 1,
    image: course1,
    title: "Software Development Course",
  },
  {
    id: 2,
    image: course2,
    title: "Blockchain Training Course",
  },
  {
    id: 3,
    image: course3,
    title: "Digital Marketing Course",
  },
];
const TrainingCourse = () => {
  const [cardData, setCardData] = useState(AllCardData);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // this is AllCardData passing
  const [saveCourse, setSaveCourse] = useState([]);
  const handleCourseData = (e, info) => {
    setSaveCourse(info);
    openModal();
    e.preventDefault();
  };

  return (
    <section>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "rgb(92,16,227)",
            marginTop: "20px",
          }}
        >
          {" "}
          <b
            style={{
              borderBottom: "3px solid rgb(92,16,227)",
            }}
          >
            ALL OUR COURSES{" "}
          </b>
        </h1>
      </div>
      <div className="container">
        <div class="card-deck">
          {cardData.map((data, index) => (
            <div key={index} class="card">
              <img
                style={{ height: "250px" }}
                class="card-img-top"
                src={data.image}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <button
                  class="btn btn-primary"
                  onClick={(e) => handleCourseData(e, data)}
                >
                  BUY COURSE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- Modal --> */}
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
          <h2>FROM FILL UP</h2>
          <button onClick={closeModal} className="btn btn-danger">
            {" "}
            <CloseIcon />{" "}
          </button>
        </div>
        <ModalForm saveCourse={saveCourse} />
      </Modal>
    </section>
  );
};

export default TrainingCourse;
