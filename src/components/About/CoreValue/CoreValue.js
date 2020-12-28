import React, { useEffect } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import aboutData from '../../../data/about.json';
import CoreValueItem from './CoreValueItem';
    

const CoreValue = () => {
    console.log(aboutData.about.coreValue)
    const feature = aboutData.about.coreValue.feature;
    const summary = aboutData?.about?.coreValue?.summary;
    
    return (
        <main>
            <div style={{ maxWidth:"1300px", margin:"0 auto"}}>
                <div className="row w-100" style={{ padding:" 20px 60px"}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h3>  CORE VALUES </h3>
                        <p> <strong> <i> What we believe in </i> </strong></p>
                        <p> {summary} </p>
                        <br /> <br />
                        
                            {
                                feature.map((item,index) => <CoreValueItem key={index} feature={item} /> )
                            }
                        
                        
                        
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CoreValue;