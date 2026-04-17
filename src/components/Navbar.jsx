import React from "react";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="w-full ">
      <div className="w-full h-[10vh] flex  justify-between items-center  px-[16vw] border-b ">
        <div className="  ">
          <img className="size-12 rounded-full" src="a-logo.jpg" alt="logo" />
        </div>
        <div className="flex items-center md:hidden w-12" onClick={dropDown}>
          <img src="hamburger-menu.png" />
        </div>
        <ul className=" hidden md:flex items-center gap-10 ">
          <li>About </li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>

      <Dropdown dropDown={dropDown}></Dropdown>
    </div>
  );
}
function dropDown() {
  const dropDown = document.querySelector(".drop-down");
  dropDown.classList.toggle("hidden");
}

export default Navbar;
