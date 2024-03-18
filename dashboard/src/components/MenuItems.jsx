import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconContext } from "react-icons";


const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);
    
    return (
        <li className="menu-items flex items-center w-4/5 p-2 relative" ref={ref} onClick={() => setDropdown((prev) => !prev)}>
        <div className='w-1/3 flex items-center justify-center'>
            {items.icon}
        </div>
        {items.submenu ? (
            <>

            <button className='w-1/3 flex items-center '
            type="button" 
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            
            >
                {items.title}{' '}
            </button>
            

            <Dropdown submenus={items.submenu} 
            dropdown={dropdown}
            />
            </>
        ) : (
            <button className='w-1/3 flex items-center '
            type="button" 
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            >
                {items.title}{' '}
            </button>
        )}
        <div className='w-1/3 flex items-center justify-center'>
            <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: "2rem"}}>
                <div>
                    <RiArrowDropDownLine />
                </div>
            </IconContext.Provider>
        </div>
        </li>
    );
};

export default MenuItems;