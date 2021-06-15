import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./ModalForm.css";
const ModalForm = ({ id }) => {
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
          <h5>1) What is the use of the computer port?</h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Download the file via the internet"
            name="Q1"
            required
            id="q1:1_s1"
          />
          <label for="q1:1_s1" style={{ marginLeft: "5px" }}>
            Download the file via the internet
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="To connect with other devices"
            name="Q1"
            required
            id="q1:2_s2"
          />
          <label for="q1:2_s2" style={{ marginLeft: "5px" }}>
            To connect with other devices
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="To connect with other devices"
            name="Q1"
            required
            id="q1:3_s3"
          />
          <label for="q1:3_s3" style={{ marginLeft: "5px" }}>
            To connect with other devices
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="None of the these"
            name="Q1"
            required
            id="q1:2_s24_s4"
          />
          <label for="q1:4_s4" style={{ marginLeft: "5px" }}>
            None of the these
          </label>
        </fieldset>

        <fieldset>
          <h5>2) Which of the following device is used for gaming?</h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Speaker"
            name="Q2"
            required
            id="q2:3_s31_s5"
          />
          <label for="q2:1_s5" style={{ marginLeft: "5px" }}>
            Speaker
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Mouse"
            name="Q2"
            required
            id="q2:2_s6"
          />
          <label for="q2:2_s6" style={{ marginLeft: "5px" }}>
            Mouse
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Joystick"
            name="Q2"
            required
            id="q2:3_s7"
          />
          <label for="q2:3_s7" style={{ marginLeft: "5px" }}>
            Joystick
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="None of the these"
            name="Q2"
            required
            id="q2:4_s8"
          />
          <label for="q2:4_s8" style={{ marginLeft: "5px" }}>
            None of the these
          </label>
        </fieldset>

        <fieldset>
          <h5>
            3) Which of the following command remove the paragraph formatting?
          </h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Ctrl + L"
            name="Q3"
            required
            id="q3:1_s9"
          />
          <label for="q3:1_s9" style={{ marginLeft: "5px" }}>
            Ctrl + L
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Copy"
            name="Q3"
            required
            id="q3:2_s10"
          />
          <label for="q3:2_s10" style={{ marginLeft: "5px" }}>
            Copy
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Open"
            name="Q3"
            required
            id="q3:3_s11"
          />
          <label for="q3:3_s11" style={{ marginLeft: "5px" }}>
            Open
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="Ctrl + Q"
            name="Q3"
            required
            id="q3:4_s12"
          />
          <label for="q3:4_s12" style={{ marginLeft: "5px" }}>
            Ctrl + Q
          </label>
        </fieldset>

        <fieldset>
          <h5>4) Which of the following memory cannot be directly accessed?</h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Primary memory"
            name="Q4"
            required
            id="q4:1_s13"
          />
          <label for="q4:1_s13" style={{ marginLeft: "5px" }}>
            Primary memory
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Secondary memory"
            name="Q4"
            required
            id="q4:2_s14"
          />
          <label for="q4:2_s14" style={{ marginLeft: "5px" }}>
            Secondary memory
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="RAM"
            name="Q4"
            required
            identify="Q4:3_s15"
          />
          <label for="q4:3_s15" style={{ marginLeft: "5px" }}>
            RAM
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="DRAM"
            name="Q4"
            required
            id="q4:4_s16"
          />
          <label for="q4:4_s16" style={{ marginLeft: "5px" }}>
            DRAM
          </label>
        </fieldset>

        <fieldset>
          <h5>5) A spreadsheet is the best application for ____________.</h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Writing an information"
            name="Q5"
            required
            id="q5:1_s17"
          />
          <label for="q5:1_s17" style={{ marginLeft: "5px" }}>
            Writing an information
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Handling simple accounts"
            name="Q5"
            required
            id="q5:2_s18"
          />
          <label for="q5:2_s18" style={{ marginLeft: "5px" }}>
            Handling simple accounts
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Producing a grid-referenced map"
            name="Q5"
            required
            id="q5:3_s19"
          />
          <label for="q5:3_s19" style={{ marginLeft: "5px" }}>
            Producing a grid-referenced map
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="Keeping an inventory of equipment used"
            name="Q5"
            required
            id="q5:4_s20"
          />
          <label for="q5:4_s20" style={{ marginLeft: "5px" }}>
            Keeping an inventory of equipment used
          </label>
        </fieldset>

        <fieldset>
          <h5>6) How many color dots make up one color pixel on a screen?</h5>
          <input
            onChange={handleChange}
            type="radio"
            value="265"
            name="Q6"
            required
            id="q6:1_s21"
          />
          <label for="q6:1_s21" style={{ marginLeft: "5px" }}>
            265
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="16"
            name="Q6"
            required
            id="q6:2_s22"
          />
          <label for="q6:2_s22" style={{ marginLeft: "5px" }}>
            16
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="8"
            name="Q6"
            required
            id="q6:3_s23"
          />
          <label for="q6:3_s23" style={{ marginLeft: "5px" }}>
            8
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="3"
            name="Q6"
            required
            id="q6:4_s24"
          />
          <label for="q6:4_s24" style={{ marginLeft: "5px" }}>
            3
          </label>
        </fieldset>

        <fieldset>
          <h5>
            7) Which of the following values is the correct value of this
            hexadecimal code 1F.01B?
          </h5>
          <input
            onChange={handleChange}
            type="radio"
            value="35.0065918"
            name="Q7"
            required
            id="q7:1_s25"
          />
          <label for="q7:1_s25" style={{ marginLeft: "5px" }}>
            35.0065918
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="32.0065918"
            name="Q7"
            required
            id="q7:2_s26"
          />
          <label for="q7:2_s26" style={{ marginLeft: "5px" }}>
            32.0065918
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="31.0065918"
            name="Q7"
            required
            id="q7:3_s27"
          />
          <label for="q7:3_s27" style={{ marginLeft: "5px" }}>
            31.0065918
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="30.0065918"
            name="Q7"
            required
            id="q7:4_s28"
          />
          <label for="q7:4_s28" style={{ marginLeft: "5px" }}>
            30.0065918
          </label>
        </fieldset>

        <fieldset>
          <h5>8) How is the data stored on the diskette?</h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Ink"
            name="Q8"
            required
            id="q8:1_s29"
          />
          <label for="q8:1_s29" style={{ marginLeft: "5px" }}>
            Ink
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Laser bubbles"
            name="Q8"
            required
            id="q8:2_s30"
          />
          <label for="q8:2_s30" style={{ marginLeft: "5px" }}>
            Laser bubbles
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Magnetism"
            name="Q8"
            required
            id="q8:3_s31"
          />
          <label for="q8:3_s31" style={{ marginLeft: "5px" }}>
            Magnetism
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="Circuits"
            name="Q8"
            required
            id="q8:4_s32"
          />
          <label for="q8:4_s32" style={{ marginLeft: "5px" }}>
            Circuits
          </label>
        </fieldset>

        <fieldset>
          <h5>
            9) Which of the following is the smallest visual element on a video
            monitor?
          </h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Character"
            name="Q9"
            required
            id="q9:1_s33"
          />
          <label for="q9:1_s33" style={{ marginLeft: "5px" }}>
            Character
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Pixel"
            name="Q9"
            required
            id="q9:2_s34"
          />
          <label for="q9:2_s34" style={{ marginLeft: "5px" }}>
            Pixel
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Byte"
            name="Q9"
            required
            id="q9:3_s35"
          />
          <label for="q9:3_s35" style={{ marginLeft: "5px" }}>
            Byte
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="Bit"
            name="Q9"
            required
            id="q9:4_s36"
          />
          <label for="q9:4_s36" style={{ marginLeft: "5px" }}>
            Bit
          </label>
        </fieldset>

        <fieldset>
          <h5>
            10) Which of the following natural element is the primary element in
            computer chips?
          </h5>
          <input
            onChange={handleChange}
            type="radio"
            value="Silicon"
            name="Q10"
            required
            id="q10:1_s37"
          />
          <label for="q10:1_s37" style={{ marginLeft: "5px" }}>
            Silicon
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Carbon"
            name="Q10"
            required
            id="q10:2_s38"
          />
          <label for="q10:2_s38" style={{ marginLeft: "5px" }}>
            Carbon
          </label>
          <br />
          <input
            onChange={handleChange}
            type="radio"
            value="Iron"
            name="Q10"
            required
            id="q10:3_s39"
          />
          <label for="q10:3_s39" style={{ marginLeft: "5px" }}>
            Iron
          </label>
          <br />

          <input
            onChange={handleChange}
            type="radio"
            value="Uranium"
            name="Q10"
            required
            id="q10:4_s40"
          />
          <label for="q10:4_s40" style={{ marginLeft: "5px" }}>
            Uranium
          </label>
        </fieldset>

        <fieldset>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Silicon"
            name="Q10"
            required
            id="q10:1_s37"
          />
          <label for="q10:1_s37" style={{ marginLeft: "5px" }}>
            I agree to the <Link to=""> <b style={{color: "rgb(92, 16, 227)"}}> terms and conditions </b> </Link> 
          </label>
          <br />
        </fieldset>

        {/* this is submit button */}
        <fieldset>
          <div style={{ display: "flex", position: "relative" }}>
            <input
              className="btn btn-primary"
              type="submit"
              value="Registration"
              style={{ width: "100%" }}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ModalForm;
