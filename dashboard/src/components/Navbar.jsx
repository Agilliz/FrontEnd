import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { menuItemsData, menuItemsSettingsExit } from "./MenuItemsData";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import Dropdown from "./Dropdown";
import MenuItems from "./MenuItems";



const Navbar = () => {

   
    
    return (
        // <div className="w-1/6 h-full bg-agilzblue flex flex-col">
        //     <div className="w-full flex justify-center p-2">
        //         <Logo></Logo>
        //     </div>
        //     <div id="containerButtons" className="flex flex-col items-center justify-center h-full">
        //         <Buttons /></div>
        // </div>


        
        <nav className="desktop-nav w-full h-full">
      <ul className="menus flex flex-col h-4/6 pt-4">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>

      <ul className="menus flex flex-col justify-evenly h-2/6">
        {menuItemsSettingsExit.map((menu, index) => {
          return <MenuItems items={menu} key={index} />
        })}
      </ul>
    </nav>
    )
}




// const Buttons = () => {
//     return (
//       <>
//       <div className="flex h-full w-full justify-center items-center">
//       <ul className=" flex flex-col w-full"> 
//       {
//       menuItemsData.map((menu, index) => {
//           return (
//             <li className="flex justify-center items-center" key={index}>
//                 <Button>
//                     <span className="flex w-1/3 justify-center">
//                     {menu.icon}
//                     </span>
//                     <span className="flex w-1/3">
//                     {menu.title}
//                     </span>
//                     <span className="flex w-1/3 justify-center">
//                     <RiArrowDropDownLine />
//                     </span>
//                 </Button>
                    
//             </li>
//           );
//         })
//         }
//       </ul>
//       </div>
//       <div className="flex flex-col items-center justify-center">
//   <ul className="flex justify-center items-center flex-col">
//   <li className="flex justify-center items-center">
//       <Button>
//           <BiSupport />
//           <span className="ml-1">Suporte</span>
//           <RiArrowDropDownLine />
//       </Button>
//   </li>
//   <li className="flex justify-center items-center">
//       <Button>
//           <TbAdjustmentsHorizontal />
//           <span className="ml-1">Ajustes</span>
//       </Button>
//   </li>
//   <li className="flex justify-center items-center">
//       <Button className="bg-agilzblue rounded-lg text-[#FFFFFF] font-sans font-bold flex justify-center items-center">
//           <ImExit />
//           Sair
//       </Button>
//   </li>
//   </ul>
//   </div>
//       </>
//     )
//   }

  

  

export default Navbar