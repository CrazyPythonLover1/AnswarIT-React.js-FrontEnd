import React from 'react';
import aboutData from '../../data/about.json';


const About = () => {

    return (
        <div id="about">
            <h3> Want to know more about us </h3>
            <div className="row">
                <div className="col-md-4 .col-sm-12"> Overview </div>
                <div className="col-md-4 .col-sm-12"> Mission & Vision</div>
                <div className="col-md-4 .col-sm-12"> Core Values</div>
            </div>
            <p>
                {aboutData?.about[0]}
            </p>
        </div>
    );
};

export default About;