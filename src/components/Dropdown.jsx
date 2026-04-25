import React from "react";
import { navLinks } from "../data/navigation";

function Dropdown({ dropDown }) {
  return (
    <div className=" drop-down   fixed bg-zinc-900  inset-0 hidden  w-full  h-screen   ">
      <div className="w-full h-[10vh] flex  justify-between items-center px-[4vw] mb-20 ">
        <div className="  ">
          <img className="size-12 rounded-full" src="a-logo.jpg" alt="logo" />
        </div>
        <div className="flex items-center  " onClick={dropDown}>
          <img className="w-12" src="menu.svg" />
        </div>
      </div>
      <ul className=" flex flex-col   w-full  justify-center items-stretch  gap-[5vh]">
        {navLinks.map((item) => (
          <li className=" block w-full px-4  text-center  ">
            <a
              className=" block w-full py-3   rounded-2xl  hover:bg-slate-500"
              href={item.href}
              onClick={dropDown}
              
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
