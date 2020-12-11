import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div>
            <form>
            <div class="form-row">
    
    <div class="form-group col-md-6">
      <label for="inputState"> Choose a Country </label>
      <select id="inputState" class="form-control">
        <option selected> USA </option>
        <option> CANADA  </option>
        <option> INDIA  </option>
        <option> BANGLADESH  </option>
      </select>
    </div>

    <div class="form-group col-md-6">
      <label for="inputCity"> Your Name </label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputPassword4"> Phone </label>
      <input type="tel" class="form-control" id="inputPassword4" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" />
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress"> Subject  </label>
    <input type="text" class="form-control" id="inputAddress" placeholder=" " />
  </div>
  <div class="form-group">
    <label for="inputAddress2"> Message </label>
    <textarea type="text" rows="6" class="form-control" id="inputAddress2" placeholder=" " />
  </div>
  
 
  <button type="submit" class="btn btn-primary"> Send Message </button>
</form>
        </div>
    );
};

export default ContactForm;