import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyled">
                <li>
                    <NavLink to="overview "><span> OVERVIEW </span></NavLink>
                </li>
                <li>
                    <NavLink to="mission "><span> MISSION & VISION </span></NavLink>
                </li>
                <li>
                    <NavLink to="/core-value "><span> CORE VALUES </span></NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;