import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropup, setIsDropup] = useState(false);

  useEffect(() => {
    if (dropdown) {
      setIsVisible(true);
      setIsDropup(false);
    } else {
      setIsDropup(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }
  }, [dropdown]);

  return (
    <ul className={`dropdown w-full ${isVisible ? "show" : ""} ${isDropup ? "hide" : ""}`}>
      {submenus &&
        submenus.map((submenu, index) => (
          <li
            key={index}
            className={`menu-items ml-1 pt-1 flex justify-left`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <g id="Stockholm-icons / Shopping / Settings">
                <path
                  id="Combined Shape"
                  opacity="0.3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.25 8.75C4.21447 8.75 3.375 9.58947 3.375 10.625C3.375 11.6605 4.21447 12.5 5.25 12.5H10.5C11.5355 12.5 12.375 11.6605 12.375 10.625C12.375 9.58947 11.5355 8.75 10.5 8.75H5.25ZM15.375 18.75C14.3395 18.75 13.5 19.5895 13.5 20.625C13.5 21.6605 14.3395 22.5 15.375 22.5H20.625C21.6605 22.5 22.5 21.6605 22.5 20.625C22.5 19.5895 21.6605 18.75 20.625 18.75H15.375Z"
                  fill="#2C2D5B"
                />
                <path
                  id="Combined Shape_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 10C22.5 12.0711 20.989 13.75 19.125 13.75C17.261 13.75 15.75 12.0711 15.75 10C15.75 7.92893 17.261 6.25 19.125 6.25C20.989 6.25 22.5 7.92893 22.5 10ZM10.125 20C10.125 22.0711 8.61396 23.75 6.75 23.75C4.88604 23.75 3.375 22.0711 3.375 20C3.375 17.9289 4.88604 16.25 6.75 16.25C8.61396 16.25 10.125 17.9289 10.125 20Z"
                  fill="#2C2D5B"
                />
              </g>
            </svg>
            <Link to={submenu.urlNavigate}>{submenu.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;
