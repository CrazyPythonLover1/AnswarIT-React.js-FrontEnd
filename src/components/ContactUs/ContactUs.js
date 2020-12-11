import React from 'react';
import contactImg from '../../Image/contact-us.png'
import ContactForm from './ContactForm';
import Locations from './Locations/Locations';

const ContactUs = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4> CONTACT US </h4>
                        <h5> Corporate Office </h5>
                         <div className="address">
                             <div>  Address: 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 </div>
                             <div>  Phone: +1 703-291-1001 (Consulting & Recruiting)</div>
                             <div> Phone: +1 855-562-7448 (Training) </div>
                             <div>   Phone: +1 917-862-3448 (Employment Verification) </div>
                             <div>  Phone: +1 917-862-3448 (Employment Verification)</div>
                             <div>  Fax: +1 571-766-2629</div>
                             <div> Email: info@answarit.com </div>
                             <img src={contactImg} alt=""/>
                         </div>

                    </div>
                    <div className="col-lg-6">
                    We would like to be easily accessible and to be available to our customers, potential clients and prospective employees. Whenever necessary, you just need to complete the following form. You can, also, visit any of our offices listed below.

                    <ContactForm /> 
                    </div>
                </div>
                <h4> USA LOCATIONS </h4>
                <div className="row">
                    
                    <div className="col-md-6">
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        {/* <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} /> */}
                    </div>
                    <div className="col-md-6">
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        {/* <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} /> */}
                    </div>
                </div>
                <h4> GLOBAL LOCATIONS </h4>
                <div className="row">
                    
                    <div className="col-md-6">
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        {/* <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} /> */}
                    </div>
                    <div className="col-md-6">
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                    <Locations title={" Virginia (Vienna) Office "} address={" 8133 Leesburg Pike, Suite 220, Vienna, VA 22182 "} phone={" +1 703-291-1001 "} fax={" +1 571-766-2629 "} email={" info@answarit.com "} />
                        {/* <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} />
                        <Locations title={" "} address={" "} phone={" "} fax={" "} email={" "} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;