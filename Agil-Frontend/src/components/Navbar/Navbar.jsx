"use-client"

import React from "react";
import Logo from "../Logo";
import { menuItemsData, menuItemsSettingsExit } from "./MenuItemsData";
import MenuItems from "./MenuItems";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    
    <header className="desktop-nav w-1/6 h-full">
      <Logo />
      <ul className="menus flex flex-col justify-evenly h-4/6">
        <li onClick={() => navigate("/")}><h2>Acompanhamento</h2></li>
        {menuItemsData.map((menu, index) => {
          return <MenuItems  items={menu} key={index} />;
        })}
      </ul>

      <ul className="menus flex flex-col justify-evenly h-1/6">
        {menuItemsSettingsExit.map((menu, index) => {
          return <MenuItems items={menu} key={index} />
        })}
      </ul>
    </header>
  )
}




export default Navbar