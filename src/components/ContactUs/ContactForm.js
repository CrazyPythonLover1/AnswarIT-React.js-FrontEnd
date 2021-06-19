import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState([""]);

  const handleChange = (e) => {
    const userInfo = { ...contactInfo };
    userInfo[e.target.name] = e.target.value;
    setContactInfo(userInfo);
  };

  const handleSubmit = (event) => {
    fetch("https://answarit-server.herokuapp.com/addContactInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      });

    alert("Message Send Successfully");
    //event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputState">
              {" "}
              <b> Choose a Country *</b>{" "}
            </label>
            <select
              name="selected-country"
              onChange={handleChange}
              id="inputState"
              class="form-control"
            >
              <option selected> </option>
              <option> BANGLADESH </option>
              <option> UK </option>
              <option> CANADA </option>
              <option> AUSTRALIA </option>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label for="inputCity">
              {" "}
              <b> Your Name * </b>
            </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              class="form-control"
              id="inputCity"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputPassword4">
              {" "}
              <b> Phone *</b>{" "}
            </label>
            <input
              onChange={handleChange}
              name="phone"
              type="tel"
              class="form-control"
              id="inputPassword4"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">
              <b>Email *</b>
            </label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              class="form-control"
              id="inputEmail4"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">
            {" "}
            <b>Subject *</b>{" "}
          </label>
          <input
            name="subject"
            onChange={handleChange}
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder=" "
            required
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">
            {" "}
            <b>Message *</b>{" "}
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            type="text"
            rows="6"
            class="form-control"
            id="inputAddress2"
            placeholder=" "
            required
          />
        </div>

        {/* <button type="submit" class="btn btn-primary">
          {" "}
          Send Message{" "}
        </button> */}
        <input className="btn btn-primary" type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
