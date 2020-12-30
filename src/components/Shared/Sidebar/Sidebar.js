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
                <NavLink activeClassName="selected"  to={`/overview`} >  <li> <div class="button"></div> <span>  OVERVIEW </span> </li></NavLink>
                <NavLink activeClassName="selected" to={`/missionVision`} > <li> <div class="button"></div> <span> MISSION & VISION </span> </li>  </NavLink>
                <NavLink activeClassName="selected" to="/core-value" > <li> <div class="button"></div> <span> CORE VALUES </span> </li>   </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;