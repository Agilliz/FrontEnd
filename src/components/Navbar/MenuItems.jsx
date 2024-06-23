import React, { useState, useEffect, useRef } from "react";
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
        setTimeout(() => {
          setOpenMenuIndex(null);
        }, 0); // Tempo de transição de 1000ms
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

  const submenuMargin = items.submenu ? `${items.submenu.length * 12}%` : "0";

  return (
    <li
      className={`menu-item w-90 flex items-center flex-col pt-2 mb-5 ${
        openMenuIndex === depthLevel
          ? "item-transition margin-add"
          : " margin-remove"
      }`}
      style={{
        transition:
          openMenuIndex === depthLevel
            ? "max-height 200ms ease-in-out"
            : "max-height 700ms ease-in-out",
        maxHeight: openMenuIndex === depthLevel ? "10%" : "0px",
        "--submenu-margin": submenuMargin,
      }}
      ref={ref}
    >
      <button
        className="flex w-full h-full"
        onClick={() => handleMenuClick(depthLevel)}
        style={{
          color: openMenuIndex === depthLevel ? "white" : "#2C2D5B",
        }}
      >
        {items.submenu ? (
          <>
            <div className="w-3/12 flex items-center justify-center h-full">
              {items.icon}
            </div>
            <h2
              className={`w-6/12 flex justify-left items-center h-full font-bold`}
              style={{
                color: openMenuIndex === depthLevel ? "white" : "#2C2D5B",
                padding: openMenuIndex === depthLevel ? "5% 5%" : "0",
              }}
            >
              {items.title}
            </h2>
            <span
              id={`arrow-${depthLevel}`}
              className={`h-full items-center w-3/12 flex justify-center transform pt-0 ${
                openMenuIndex === depthLevel
                  ? "rotate-180 transition-transform duration-400"
                  : "transition-transform duration-300"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuClick(depthLevel);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
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
            <div>
              <h2 className="w-1/2 flex justify-start font-medium">
                {items.title}
              </h2>
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
