import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
    return (
        <div>
            <form>
            <div class="form-row">
    
    <div class="form-group col-md-6">
      <label for="inputState"> <b> Choose a Country *</b> </label>
      <select id="inputState" class="form-control">
        <option selected> USA </option>
        <option> Uk  </option>
        <option> CANADA  </option>
        <option> AUSTRALIA  </option>
      </select>
    </div>

    <div class="form-group col-md-6">
      <label for="inputCity"> <b> Your Name * </b></label>
      <input type="text" class="form-control" id="inputCity" required />
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputPassword4"> <b> Phone *</b> </label>
      <input type="tel" class="form-control" id="inputPassword4" required />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4"><b>Email *</b></label>
      <input type="email" class="form-control" id="inputEmail4" required />
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress"> <b>Subject *</b>  </label>
    <input type="text" class="form-control" id="inputAddress" placeholder=" " required />
  </div>
  <div class="form-group">
    <label for="inputAddress2"> <b>Message *</b> </label>
    <textarea type="text" rows="6" class="form-control" id="inputAddress2" placeholder=" " required />
  </div>
  
 
  <button type="submit" class="btn btn-primary"> Send Message </button>
</form>
        </div>
    );
};

export default ContactForm;