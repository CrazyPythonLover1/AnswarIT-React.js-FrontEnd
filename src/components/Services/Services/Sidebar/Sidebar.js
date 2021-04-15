import React from 'react';
import './Sidebar.scss';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
    let { path, url } = useRouteMatch();

    console.log(path);
    console.log(url)
    return (
        <div className="sidebar">
            <ul className="list-unstyled">
                  <NavLink activeClassName="selected"  to="/softwareDevelopment">  <li> <div class="button"></div> <span>  SOFTWARE DEVELOPMENT </span> </li></NavLink>
                  <NavLink activeClassName="selected" to={`/managementConsulting`} > <li> <div class="button"></div> <span> MANAGEMENT CONSULTING </span> </li>  </NavLink>
                  <NavLink activeClassName="selected" to="/technologyConsulting" > <li> <div class="button"></div> <span> TECHNOLOGY CONSULTING  </span> </li>   </NavLink>
                  <NavLink activeClassName="selected"  to={`/staffAugmentation`} >  <li> <div class="button"></div> <span>  STAFF AUGMENTATION </span> </li></NavLink>
                  <NavLink activeClassName="selected" to={`/businessProcess`} > <li> <div class="button"></div> <span> BUSINESS PROCESS ASSURANCE </span> </li>  </NavLink>
                  <NavLink activeClassName="selected" to="/BpoKpo" > <li> <div class="button"></div> <span> BPO/KPO </span> </li>   </NavLink>
                  <NavLink activeClassName="selected" to="/whyAnswarIT" > <li> <div class="button"></div> <span> WHY ANSWARIT </span> </li>   </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;