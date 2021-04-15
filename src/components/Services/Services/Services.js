import React from 'react';
import './Services.scss';
import { NavLink, Route, BrowserRouter as Router, Switch, Link, useLocation } from 'react-router-dom';
import SoftwareDevelopment from '../SoftwareDevelopment/SoftwareDevelopment';
import ManagementConsulting from '../ManagementConsulting/ManagementConsulting';
import TechnologyConsulting from '../TechnologyConsulting/TechnologyConsulting';
import StaffAugmentation from '../StaffAugmentation/StaffAugmentation';
import BusinessProcessAssurance from '../BusinessProcessAssurance/BusinessProcessAssurance';
import BpoKpo from '../BpoKpo/BpoKpo';
import WhyAnswarIT from '../WhyAnswarIT/WhyAnswarIT';
import Sidebar from './Sidebar/Sidebar';

const routes = [
  {
    path: "/softwareDevelopment",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <SoftwareDevelopment/>,
  },
  {
    path: "/managementConsulting",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <ManagementConsulting />
  },
  {
    path: "/technologyConsulting",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <TechnologyConsulting />
  },
  {
    path: "/staffAugmentation",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <StaffAugmentation/>

  },
  {
    path: "/businessProcess",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <BusinessProcessAssurance />
  },
  
  {
    path: "/BpoKpo",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <BpoKpo/>

  },
  {
    path: "/whyAnswarIT",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <WhyAnswarIT />,

  } 
];
const Services = () => {
  const location = useLocation();
  return (
    <Router>
      <div className="services" style={{ maxWidth:"1300px", padding:" 40px 60px", margin:"0 auto"}}>
        <div className="row w-100 m-0">
          <div className="col-lg-4 col-md-5">
            <div className="sidebar">
              <ul style={{ listStyleType: "none", padding: 0 }}>
                  <NavLink activeClassName="selected"  to="/softwareDevelopment">  <li> <div class="button"></div> <span>  SOFTWARE DEVELOPMENT </span> </li></NavLink>
                  <NavLink activeClassName="selected" to={`/managementConsulting`} > <li> <div class="button"></div> <span> MANAGEMENT CONSULTING </span> </li>  </NavLink>
                  <NavLink activeClassName="selected" to="/technologyConsulting" > <li> <div class="button"></div> <span> TECHNOLOGY CONSULTING  </span> </li>   </NavLink>
                  <NavLink activeClassName="selected"  to={`/staffAugmentation`} >  <li> <div class="button"></div> <span>  STAFF AUGMENTATION </span> </li></NavLink>
                  <NavLink activeClassName="selected" to={`/businessProcess`} > <li> <div class="button"></div> <span> BUSINESS PROCESS ASSURANCE </span> </li>  </NavLink>
                  <NavLink activeClassName="selected" to="/BpoKpo" > <li> <div class="button"></div> <span> BPO/KPO </span> </li>   </NavLink>
                  <NavLink activeClassName="selected" to="/whyAnswarIT" > <li> <div class="button"></div> <span> WHY ANSWARIT </span> </li>   </NavLink>
              </ul>
            </div>
            {/* <Sidebar></Sidebar> */}
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="service-details" style={{ flex: 1, padding: "0px" }}>
              {/* <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch> */}
              {
                (location.pathname === '/softwareDevelopment') &&
                <SoftwareDevelopment/>
              }
              {
                (location.pathname === '/managementConsulting') &&
                <ManagementConsulting/>
              }
              
            </div>
          </div>

        </div>
        
      </div>
    </Router>
  );
};

export default Services;