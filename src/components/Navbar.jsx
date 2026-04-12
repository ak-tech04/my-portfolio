import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[10vh] flex  justify-between items-center  px-[16vw] border-b ">
      <div className="  ">
        <img className="size-12 rounded-full" src="a-logo.jpg" alt="logo" />
      </div>
      <ul className="flex items-center gap-10 ">
        <li>About </li>
        <li>Projects</li>
        <li>Contacts</li>
        
      </ul>
    </div>
  );
}

export default Navbar;
