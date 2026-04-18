import React from "react";

function AboutMe() {
  return (
    <section className="w-full h-[80vh]   py-8">
      <div className="h-full w-full flex flex-col md:flex-row items-center  gap-8 md:gap-12">
        {/* Right on desktop / Top on mobile */}
        <div className="order-1 md:order-2 w-full md:w-1/2 h-[35vh] md:h-full flex items-center justify-center">
          <div className="w-full h-[40%] rounded-2xl border border-zinc-700 bg-zinc-800/60 flex items-center justify-center text-zinc-400">
            Image goes here
          </div>
        </div>

        {/* Left on desktop / Bottom on mobile */}
        <div className="order-2 md:order-1 w-full md:w-1/2 ">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className=" text-base md:text-lg leading-relaxed">
            I’m a frontend developer focused on building clean, responsive, and
            user-friendly web interfaces. I enjoy working with React, Tailwind,
            and modern UI tools to create smooth digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;