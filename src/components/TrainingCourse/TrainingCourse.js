import React, { useState } from "react";
import course1 from "../../Image/course/Software Development Course.jpg";
import course2 from "../../Image/course/Blockchain training Course.jpg";
import course3 from "../../Image/course/Digital marketing course.jpg";
import topbg from "../../Image/course/bg_sub-header.png";
import topbg1 from "../../Image/course/hero-bg.svg";
import topImg from "../../Image/header/1.6.jpg";
import ModalForm from "./ModalForm";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import "./TrainingCourse.css";
import { Link } from "react-router-dom";

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
    description: "Take your developer skills to the next level with courses on the most popular programming languages, best practices and application development and gain essential skill for a successful career.",
    price: '13,000',
    discountPrice: '6,500',
    duration: '6-8 month',
    totalClass: '90+ (each class 1.5 hours long)',
    discount: '50% Discount',
    link: "/softwareCourse",
  },
  {
    id: 2,
    image: course2,
    title: "Blockchain Training Course",
    description: "Demand for blockchain developers is skyrocketing. In this program, you'll work with the Bitcoin and Ethereum protocols, build projects for real-world application, and gain the essential skills for a career in this dynamic space.",
    price: '13,000',
    discountPrice: '6,500',
    duration: '6+ month',
    totalClass: '72+ (each class 1.5 hours long)',
    discount: '50% Discount',
    link: "/softwareCourse",
  },
  {
    id: 3,
    image: course3,
    title: "Digital Marketing Course",
    description: "Digital marketing specialists are in high demand.  Join our Digital Marketing Course and learn to build an effective marketing strategy that will take your company to the next level.",
    price: '9,000',
    discountPrice: '4,500',
    duration: '4 month',
    totalClass: '48+ (each class 1.5 hours long)',
    discount: '50% Discount',
    link: "/softwareCourse",
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
      <div className="traning-header">
        <div className="text-section" data-aos="fade-up" data-aos-duration="2000">
          <h1> Build your career </h1>
          <h3> Improve your skill with AnswarIT Training </h3>
          <p> Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses. </p>
        </div>
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "rgb(92,16,227)",
            marginTop: "20px",
          }}
        >
          <b
            style={{
              borderBottom: "3px solid rgb(92,16,227)",
            }}
          >
            OUR ALL COURSES
          </b>
        </h1>
      </div>
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
        <div class="card-deck row">
          {cardData.map((data, index) => (
            <div className="col ">
            <div key={index} class="card">
              <div className="card-discount">
                {data.discount}
              </div>
              <img
                style={{ height: "250px" }}
                class="card-img-top"
                src={data.image}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text text-justify">
                  {data.description}
                </p>
                <p>
                  <b> Duration </b>: {data.duration} <br/>
                  <b> Total classes </b>: {data.totalClass}
                </p>
                <Link to={data.link} style={{color:'#5c10e3', textDecoration: "underline"}}> Course Details </Link>
              </div>
              <div class="card-footer">
                <div className="price">
                  <p> ৳{data.price} </p>
                  <p> ৳{data.discountPrice} </p>
                </div>
                <button
                  class="btn btn-primary"
                  onClick={(e) => handleCourseData(e, data)}
                >
                  {/* REGISTRATION */}
                  Enroll Now
                </button>
              </div>
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
          <h2> TEST YOUR IQ</h2>
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
