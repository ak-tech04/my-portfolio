import React, { useId } from "react";
import {
  Navbar,
  Hero,
  AboutMe,
  Projects,
  ContactMe,
  Footer,
} from "../components";
import { projectList } from "../data/projectList";

function Home() {
  return (
    <div className="h-full w-full text-white bg-zinc-900   ">
      <Navbar></Navbar>
      <div className="px-[4vw] md:px-[16vw]">
        <Hero></Hero>
        <div id="about" className="mb-20">
          <AboutMe></AboutMe>
        </div>
        <div id="projects" className="flex flex-col gap-14">
          {projectList.map((item) => {
            const id = useId();
            return <Projects key={id} project={item}></Projects>;
          })}
        </div>
        <div id="contact">
          <ContactMe></ContactMe>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
