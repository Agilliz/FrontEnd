import React from "react";
import Logo from "../Logo";
import { menuItemsData } from "./MenuItemsData";
import MenuItems from "./MenuItems";
import { useNavigate } from "react-router-dom";
import BtnNav from "../BtnNav";
import { ReactComponent as SvgAjustes } from "../../images/svgAjustes.svg";
import {ReactComponent as SvgPower } from "../../images/svgPower.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="desktop-nav w-1/6 h-full">
      <Logo />
      <ul className="menus flex flex-col justify-evenly h-4/6 w-full font-semibold" style={{ color: "#2C2D5B" }}>
        {menuItemsData.map((menu, index) => (
          <MenuItems items={menu} key={index} />
        ))}
      </ul>
      <BtnNav altura="8%" cor="#2C2D5B" largura="75%" texto="Ajustes" svg={<SvgAjustes />} />
      <BtnNav altura="7%" cor="#DE6600" largura="45%" texto="Sair" svg={<SvgPower />}></BtnNav>
    </header>
  );
}

export default Navbar;
