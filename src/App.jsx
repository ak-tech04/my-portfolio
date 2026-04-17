import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="h-screen w-full text-white bg-zinc-900  ">

      <Navbar></Navbar>
      {/* wrapper */}
      <div className="px-[16vw]">
      <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
