import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";
import headerImg from "../../Image/header/undraw_develop_app_re_bi4i.svg";
import data from "../TrainingCourse/CourseData";
import "./Course.scss";
import CourseDetails from "./CourseDetails";
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
        <div
          class="row "
          style={{
            width: "1410px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "auto",
            padding: " 0px 45px"
          }}
        >
          <div
            class="col-6 header-text-section"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1>
              {" "}
              Grow your Software <br /> Development skills{" "}
            </h1>
            <p>
              {" "}
              Take your developer skills to the next level with courses on the
              most popular programming language, framework, best practices and
              application development. Gain a deep understanding of how to
              build, deploy, secure and scale everything from web apps to mobile
              apps using HTML, CSS, Modern JavaScript, Material Design, React
              (Redux), React Native, NodeJS, Express, MongoDB and more. The
              whole course is designed to help a beginner to be an Advance in
              JavaScript, ReactJs, NodeJs.{" "}
            </p>
            <button
              class="btn btn-primary enroll-btn"
              onClick={(e) => handleCourseData(e, 1)}
              style={{ padding: "7px 30px" }}
            >
              {/* REGISTRATION */}
              Enroll Now{" "}
              <ArrowForwardIcon
                style={{ position: "relative", right: "0px", left: "10px" }}
              />
            </button>
          </div>
          <div class="col-6" data-aos="fade-left" data-aos-duration="1000">
            <img
              src={headerImg}
              style={{
                width: "80%",
                height: "400px",
                position: "relative",
                right: "-150px",
              }}
              alt='header'
            />
          </div>
        </div>
      </div>

      <div
        className="what-you-will-learn"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{ width: "1410px", margin: "auto" }}
      >
        <h1> What you will learn </h1>
        <div className="row m-0">
          <div className="col-6 left-col">
            <div className="d-flex">
              {" "}
              <CheckIcon /> <p>you will learn HTML, CSS, Bootstrap </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon />{" "}
              <p>
                You will learn Complete JavaScript + ECMA Script 6 (ES6) from
                scratch{" "}
              </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon /> <p>Learn problem solving with javaScript </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon />{" "}
              <p>
                Learn about REST API, JSON, Chrome devtool, Debugging, Hosting
                with GitHub page
              </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon />{" "}
              <p>
                Learn most popular, market Demand JavaScript Framework (React)
                and Master frontend development with React{" "}
              </p>{" "}
            </div>
          </div>
          <div className="col-6 right-col">
            <div className="d-flex">
              {" "}
              <CheckIcon />{" "}
              <p>
                Build complete professional Web Application with Database,
                Server, Hosting, payment system, login, Routing
              </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon />{" "}
              <p>Master backend development with Node, ExpressJs</p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon /> <p>
                Learn Mobile Development with React Native
              </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon />{" "}
              <p>
                Build fully-fledged websites and web apps for your startup or
                business.
              </p>{" "}
            </div>
            <div className="d-flex">
              {" "}
              <CheckIcon /> <p>Be able to build ANY website you want. </p>{" "}
            </div>
          </div>
        </div>
        <button
          class="btn btn-primary enroll-btn"
          onClick={(e) => handleCourseData(e, 1)}
          style={{
            padding: "7px 30px",
            position: "relative",
            left: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "20px",
          }}
        >
          {/* REGISTRATION */}
          Enroll Now{" "}
          <ArrowForwardIcon
            style={{ position: "relative", right: "0px", left: "10px" }}
          />
        </button>
      </div>

      <div
        style={{
          width: "1410px",
          margin: " 40px auto 0px auto",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            padding: "8px",
            marginTop: "20px",
            color: "#5c10e3",

            // backgroundColor: "#edefff",
          }}
        >
          <h1 style={{ fontWeight: "700" }}>Course content</h1>
        </div>
        <div className="course-detail">
          {courseData.map((dt) => (
            <CourseDetails key={dt.id} singleCourse={dt}></CourseDetails>
          ))}
        </div>
      </div>

      <ModalDialog
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        courseId={1}
      />
    </section>
  );
};

export default Course;
