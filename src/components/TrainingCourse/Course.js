import React, { useState } from "react";
import data from "../TrainingCourse/CourseData";
import CourseDetails from "./CourseDetails";

const Course = () => {
  const [courseData, setCourseData] = useState(data);
  return (
    <div>
      {courseData.map((dt) => (
        <CourseDetails key={dt.id} singleCourse={dt}></CourseDetails>
      ))}
    </div>
  );
};

export default Course;
