import React from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyled">
                <li>
                    <div class="button"></div>
                    <NavLink className="" to="overview "><span>  OVERVIEW </span></NavLink>
                </li>
                <li>
                <div class="button"></div>
                    <NavLink to="mission "><span> MISSION & VISION </span></NavLink>
                </li>
                <li>
                <div class="button"></div>
                    <NavLink to="/core-value "><span> CORE VALUES </span></NavLink>
                </li>
               
            </ul>
        </div>
    );
};

export default Sidebar;