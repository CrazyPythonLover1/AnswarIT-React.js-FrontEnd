import React from 'react';
import { Route, Switch } from 'react-router-dom';
import aboutData from '../../../data/about.json';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const About = () => {

    return (
        <div id="about" className="container-fluid">
            <div className="row w-100 m-0">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <Sidebar/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                {/* <Switch>
        
        <Route path={`${path}/overview`}>
          <Overview />
        </Route>
        <Route path={`${path}/missionVision`}>
          <MissionVision />
        </Route>
        <Route path={`${path}/core-value`}>
          <CoreValue />
        </Route>
      </Switch> */}
                </div>
            </div>

           
        </div>
    );
};

export default About;