import React from "react";
import { useHistory } from "react-router";
import "./ModalForm.css";
const ModalForm = (props) => {
  const { id, title, img } = props.saveCourse;
  const history = useHistory();
  const handleSubmit = () => {
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
            value={
              id === 1
                ? "Software Development Course"
                : id === 2
                ? "Blockchain Training Course"
                : "Digital Marketing Course"
            }
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabindex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Education (optional)"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>

        {/* this is question section */}
        <fieldset>
          <p>Q:1: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:2: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:3: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:4: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:5: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:6: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:7: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>

        <fieldset>
          <p>Q:8: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:9: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <p>Q:10: what is your purpose?</p>
          <input
            placeholder="whit is your purpose?"
            type="text"
            tabindex="4"
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
