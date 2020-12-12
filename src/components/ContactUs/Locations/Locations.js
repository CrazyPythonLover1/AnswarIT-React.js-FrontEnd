import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import EmailIcon from '@material-ui/icons/Email';


const Locations = ({title, address, phone, fax, email}) => {
    return (
        <div className="location">
            <h6 className="main-title location-title"> {title} </h6>
            <div> <b> <LocationOnIcon/> Address: </b> { address } </div>
            <div> <b> <PhoneIcon/> Phone: </b> { phone } </div>
            <div> <b> <PrintIcon/> Fax: </b> { fax } </div>
            <div> <b> <EmailIcon/> Email: </b> { email } </div>
        </div>
    );
};

export default Locations;