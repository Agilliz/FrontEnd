
// Dropdown.js

"use-client"

import React from "react";
import { Link } from "react-router-dom";


const Dropdown = ({ submenus, dropdown }) => {


    return (
        <ul className={`dropdown w-full ${dropdown ? "show active" : ""} font-medium`}>
            {submenus && submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <Link to={submenu.urlNavigate} >{submenu.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
