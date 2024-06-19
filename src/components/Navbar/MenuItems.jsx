import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        openMenuIndex !== null &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [openMenuIndex]);

  const handleMenuClick = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <li
      className={`menu-item w-5/6 flex items-center flex-col pt-2 ${
        openMenuIndex === depthLevel
          ? "item-transition"
          : "item-transition-reverse"
      }`} style={{color: "#2C2D5B"}}
      ref={ref}
    >
      <button
        className="menu-item-button flex w-full h-full"
        onClick={() => handleMenuClick(depthLevel)}
      >
        {items.submenu ? (
          <>
            <div className="w-3/12 flex items-center justify-center h-full">
              {items.icon}
            </div>
            <h2 className="w-6/12 flex justify-start items-center h-full font-semibold p-3 pt-2" style={{color: "white"}}>
              {items.title}
            </h2>
            <span
              id={`arrow-${depthLevel}`}
              className={`h-full items-center w-3/12 flex justify-center transform ${
                openMenuIndex === depthLevel
                  ? "rotate-180 transition-transform duration-500"
                  : "transition-transform duration-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </>
        ) : (
          <>
            <div className="w-3/12 flex items-center justify-center h-full">
              {items.icon}
            </div>
            <div className="bg-red">
              <h2 className="w-1/2 flex justify-start font-medium">
                {items.title}
              </h2>{" "}
              {/* Modifique a fonte para mais grossa aqui */}
            </div>
          </>
        )}
      </button>
      {items.submenu && (
        <Dropdown
          submenus={items.submenu}
          dropdown={openMenuIndex === depthLevel}
        />
      )}
    </li>
  );
};

export default MenuItems;
