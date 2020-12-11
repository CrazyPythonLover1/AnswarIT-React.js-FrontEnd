import React, { useState } from 'react';
import './About.scss';
import aboutData from '../../../data/about.json';


const About = () => {
    const [about, setAbout] = useState(aboutData.about.overview)
    

    const overview = () => {
        setAbout(aboutData.about.overview)
    }

    const mission = () => {
        setAbout(aboutData.about.mission)
    }

    const coreValue = () => {
        setAbout(aboutData.about.coreValue)
    }
    return (
        <div id="about" className="container-fluid">
            <h3 className=" main-title "> Want to know more about us </h3>
            <div className="about-section">
                <div className="row">
                    <div onClick={()=> overview()} className="col col-md-4 .col-sm-12"> <span> Overview </span> </div>
                    <div onClick={()=> mission()} className=" col col-md-4 .col-sm-12">  <span> Mission & Vision </span> </div>
                    <div onClick={()=> coreValue()} className="col col-md-4 .col-sm-12"> <span> Core Values </span> </div>
                </div>
                <p>
                    {about.summary.toString().substring(0, 415)} <br/> <br/>
                    <span> Learn More... </span>
                </p>
            </div>
        </div>
    );
};

export default About;