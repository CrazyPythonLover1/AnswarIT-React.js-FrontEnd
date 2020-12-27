import React from 'react';
import aboutData from '../../data/about.json';
import Sidebar from '../Shared/Sidebar/Sidebar';


const About = () => {

    return (
        <div id="about" className="container-fluid">
            <div className="row w-100 m-0">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <Sidebar/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <h3> Want to know more about us </h3>
                </div>
            </div>

           
        </div>
    );
};

export default About;