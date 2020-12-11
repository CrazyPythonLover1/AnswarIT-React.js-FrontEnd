import React from 'react';

const Locations = ({title, address, phone, fax, email}) => {
    return (
        <div>
            <h6> {title} </h6>
            <div> Address: { address } </div>
            <div> Phone: { phone } </div>
            <div> Fax: { fax } </div>
            <div> Email: { email } </div>
        </div>
    );
};

export default Locations;