import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="h-full w-full text-white bg-zinc-900  ">
      <Navbar></Navbar>
      {/* wrapper */}
      <div className="px-[16vw]">
        <Hero></Hero>
        <AboutMe></AboutMe>

        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
