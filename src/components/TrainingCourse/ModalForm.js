import React, { useState } from "react";
import { useHistory } from "react-router";
import "./ModalForm.css";
const ModalForm = (props) => {
  const { id, title, img } = props.saveCourse;
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
          <p>Q:1: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q1"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="6"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:2: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q2"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="7"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:3: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q3"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="8"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:4: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q4"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="9"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:5: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q5"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="10"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:6: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q6"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="11"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:7: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q7"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="12"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:8: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q8"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="13"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:9: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q9"
            placeholder="whit is your purpose?"
            type="text"
            tabindex="14"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:10: what is your purpose?</p>
          <input
            onChange={handleChange}
            name="q10"
            placeholder="whit is your purpose?"
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
