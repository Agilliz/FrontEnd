"use-client"

import Dropdown from './Dropdown';
import { useState, useEffect, useRef,  } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuItems = ({ items, depthLevel,  }) => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (openMenuIndex !== null && ref.current && !ref.current.contains(event.target)) {
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
        <li className={`menu-item w-3/4 flex items-center flex-col ${openMenuIndex === depthLevel ? 'item-transition' : 'item-transition-reverse'}`}ref={ref}>
            <button className={`menu-item-button flex w-full h-full  `} onClick={() => handleMenuClick(depthLevel)}>
                {items.submenu ? (
                    <>
                        <div className="w-3/12 flex items-center justify-center h-full">
                            {items.icon}
                        </div>
                        <h2 className='w-6/12 flex justify-start items-center h-full'>{items.title}</h2>
                        <span id={`arrow-${depthLevel}`} className={`h-full items-center w-3/12 flex justify-center transform ${openMenuIndex === depthLevel ? 'rotate-180 transition-transform duration-500' : 'transition-transform duration-300'}`}>
                            <RiArrowDropDownLine />
                        </span>
                    </>
                ) : (
                    <>
                        <div className='w-3/12 flex items-center justify-center h-full'>
                            {items.icon}
                        </div>
                        <div className='bg-red'>
                            <h2 className='w-1/2 flex justify-start'>{items.title}</h2>
                        </div>
                    </>
                )}
            </button>
            {items.submenu && openMenuIndex === depthLevel && <Dropdown submenus={items.submenu} dropdown={openMenuIndex === depthLevel}  />}
        </li>
    );
};

export default MenuItems;
