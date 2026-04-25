import React from "react";
import { Dropdown } from "./index";
import { navLinks } from "../data/navigation";

function Navbar() {
  return (
    <div className="w-full ">
      <div className="w-full h-[10vh] flex justify-between items-center px-[4vw] md:px-[16vw] border-b">
        <div>
          <img className="size-12 rounded-full" src="a-logo.jpg" alt="logo" />
        </div>
        <div className="flex items-center md:hidden" onClick={dropDown}>
          <img className="w-12" src="menu.svg" alt="menu" />
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-400 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Dropdown dropDown={dropDown} />
    </div>
  );
}

function dropDown() {
  const dropDown = document.querySelector(".drop-down");
  dropDown.classList.toggle("hidden");
}

export default Navbar;
