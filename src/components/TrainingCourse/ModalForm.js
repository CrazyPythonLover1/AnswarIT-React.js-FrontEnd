import React, { useState } from "react";
import { useHistory } from "react-router";
import "./ModalForm.css";
const ModalForm = ({id}) => {
  const history = useHistory();
  const [orderInfo, setOrderInfo] = useState([""]);

  const handleChange = (e) => {
    const userInfo = { ...orderInfo };
    // this is the solving data when we send it mongodb as a default value without clicking
    if (userInfo.courseName === undefined) {
      if (id === 1) {
        userInfo["courseName"] = "Software Development Course";
      } else if (id === 2) {
        userInfo["courseName"] = "Blockchain Course";
      } else {
        userInfo["courseName"] = "Digital Marketing Course";
      }
    }

    userInfo[e.target.name] = e.target.value;
    setOrderInfo(userInfo);
  };

  const handleSubmit = () => {
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      });
    alert("Registration Successful");
    history.push(
      id === 1
        ? "/softwareCourse"
        : id === 2
        ? "/blockchainCourse"
        : "/digitalMarketing"
    );
  };

  return (
    <div>
      <form id="contact" onSubmit={handleSubmit}>
        <fieldset>
          <input
            name="courseName"
            onChange={handleChange}
            value={
              id === 1
                ? "Software Development Course"
                : id === 2
                ? "Blockchain Training Course"
                : "Digital Marketing Course"
            }
            // placeholder="Your course name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            type="text"
            tabindex="2"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            name="email"
            onChange={handleChange}
            placeholder="Your Email Address"
            type="email"
            tabindex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Your Phone Number"
            type="tel"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <input
            name="education"
            onChange={handleChange}
            placeholder="Your Education"
            type="text"
            tabindex="5"
            required
          />
        </fieldset>

        {/* this is question section */}
        <fieldset>
          <p>Q:1: What is smallest unit of the information? </p>
          <input
            onChange={handleChange}
            name="q1"
            placeholder=" What is smallest unit of the information? "
            type="text"
            tabindex="6"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:2: How is the data stored on the diskette? </p>
          <input
            onChange={handleChange}
            name="q2"
            placeholder="How is the data stored on the diskette? "
            type="text"
            tabindex="7"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:3: What is the smallest visual element on a video monitor?</p>
          <input
            onChange={handleChange}
            name="q3"
            placeholder="Which of the following is the smallest visual element on a video monitor?"
            type="text"
            tabindex="8"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:4: Which one of the following groups contains graphical file extensions?
            <br />
            a.JPG, CPX, GCM <br />
            b.GIF, TCE, WMF <br />
            c.TCP, JPG, BMP <br />
            d.JPG, GIF, BMP <br />
          </p>
          <input
            onChange={handleChange}
            name="q4"
            placeholder=" Select your Answer"
            type="text"
            tabindex="9"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:5: What is the speed of computer measured in? </p>
          <input
            onChange={handleChange}
            name="q5"
            placeholder="What is the speed of computer measured in?"
            type="text"
            tabindex="10"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:6: What is the full form of RAM? </p>
          <input
            onChange={handleChange}
            name="q6"
            placeholder="What is the full form of RAM?"
            type="text"
            tabindex="11"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:7: What is five main components of a computer system? </p>
          <input
            onChange={handleChange}
            name="q7"
            placeholder="What is five main components of a computer system?"
            type="text"
            tabindex="12"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:8: What is a single dot on a computer screen called? </p>
          <input
            onChange={handleChange}
            name="q8"
            placeholder="What is a single dot on a computer screen called? "
            type="text"
            tabindex="13"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:9: The cache memory works between _______. </p>
          <input
            onChange={handleChange}
            name="q9"
            placeholder="The cache memory works between _______."
            type="text"
            tabindex="14"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:10: Which memory is very fast memory in a computer? </p>
          <input
            onChange={handleChange}
            name="q10"
            placeholder="Which memory is very fast memory in a computer? "
            type="text"
            tabindex="15"
            required
          />
        </fieldset>

        <fieldset>
          <input
            className="btn btn-primary"
            type="submit"
            value="Registration"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ModalForm;
