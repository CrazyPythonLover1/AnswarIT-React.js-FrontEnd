import React, { useEffect } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import aboutData from '../../../data/about.json';
    

const CoreValue = () => {
    console.log(aboutData.about.coreValue)
    console.log(aboutData.about.coreValue.summary)
    const summary = aboutData?.about?.coreValue?.summary;
    
    return (
        <div>
            <div className="row w-100 m-0">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <Sidebar/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <h3>  CORE VALUES </h3>
                    <p> <strong> <i> What we believe in </i> </strong></p>
                    <p> {summary} </p>
                </div>
            </div>
        </div>
    );
};

export default CoreValue;