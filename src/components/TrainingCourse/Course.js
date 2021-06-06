import React, { useState } from "react";
import './Course.scss'
import data from "../TrainingCourse/CourseData";
import CourseDetails from "./CourseDetails";
import courseImg from "../../Image/header/course2.jpg";
import headerImg from "../../Image/header/undraw_develop_app_re_bi4i.svg"
import ModalDialog from "./Modal";

const Course = () => {
  const [courseData, setCourseData] = useState(data);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const handleCourseData = (e, id) => {
    openModal();
    e.preventDefault();
  };

  return (
    <section>
      <div className="software-development-header">
        {/* <img
          style={{ width: "100%", height: "200px" }}
          src={courseImg}
          alt=""
        /> */}
        <div class="row" style={{width: "1410px", display: "flex",alignItems:"center", justifyContent:"space-between", margin:"auto"}}>
          <div class="col-6 header-text-section" data-aos="fade-right" data-aos-duration="1000">
            <h1> Grow your Software <br /> Development skills </h1>
            <p> Take your developer skills to the next level with courses on the most popular programming language, framework, best practices and application development. Gain a deep understanding of how to build, deploy, secure and scale everything from web apps to mobile apps using HTML, CSS, Modern JavaScript, Material Design, React (Redux), React Native, NodeJS, Express and MongoDB and more. The whole course is designed to help a beginner to be an Advance in JavaScript, ReactJs, NodeJs. </p>
            <button
                  class="btn btn-primary"
                  onClick={(e) => handleCourseData(e, 1)}
                >
                  {/* REGISTRATION */}
                  Enroll Now
                </button>
          </div>
          <div class="col-6" data-aos="fade-left" data-aos-duration="1000">
            <img 
              src={headerImg} 
              style={{ width: "80%", height: "400px", position:"relative", right: "-100px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "8px",
          marginTop: "20px",
          backgroundColor: "#edefff",
        }}
      >
        <h1 style={{ fontWeight: "500", textAlign: "center" }}>
          Software Development
        </h1>
      </div>
      <div>
        {courseData.map((dt) => (
          <CourseDetails key={dt.id} singleCourse={dt}></CourseDetails>
        ))}
      </div>
      <ModalDialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} courseId={1} />
    </section>
  );
};

export default Course;
