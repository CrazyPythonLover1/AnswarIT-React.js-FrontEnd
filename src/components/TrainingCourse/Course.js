import React, { useState } from "react";
import data from "../TrainingCourse/CourseData";
import CourseDetails from "./CourseDetails";
import courseImg from "../../Image/header/course2.jpg";
const Course = () => {
  const [courseData, setCourseData] = useState(data);
  return (
    <section>
      <div>
        <img
          style={{ width: "100%", height: "200px" }}
          src={courseImg}
          alt=""
        />
      </div>

      <div
        style={{
          padding: "8px",
          marginTop: "20px",
          backgroundColor: "#edefff",
        }}
      >
        <h1 style={{ fontWeight: "500", textAlign: "center" }}>
          Software Testing with QTP/UFT
        </h1>
      </div>
      <div>
        {courseData.map((dt) => (
          <CourseDetails key={dt.id} singleCourse={dt}></CourseDetails>
        ))}
      </div>
    </section>
  );
};

export default Course;
