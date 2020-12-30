import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import aboutData from '../../../data/about.json';

const MissionVision = () => {
    console.log(aboutData.about.mission.summary)
    const {summary} = aboutData.about.mission;
    return (
        <div className="missionVision about">
            <div style={{ maxWidth:"1300px", margin:"0 auto"}}> 
                <div className="row w-100" style={{ padding: "20px 60px"}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h4 className="title"> <strong> MISSION AND VISION </strong> </h4>
                        <p> <strong> <i> What we think </i> </strong></p>
                        {summary.map((item, index) => <p key={index}> {item}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;