import React from "react";

function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center md:flex-row   md:items-center md:justify-between gap-8">
      <div className="text-white w-full md:w-1/2 ">
        <p className="mb-2 text-zinc-300">Hello, I'm</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Aditya Kumar Patel
        </h1>
        <p className="mt-4 text-zinc-300">
          Full-Stack Developer | React & Cloud-Native Architect. <br /> I build
          and deploy end-to-end web applications. Expert in crafting responsive
          frontends and <br /> connecting them to powerful backend services like
          Appwrite and Supabase to deliver <br /> high-performance,
          data-driven solutions
        </p>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
        <svg
          viewBox="0 0 220 110"
          className="w-full h-auto hero-loader text-blue-500"
          aria-label="animated hero loader"
          role="img"
        >
          <g className="brackets">
            <path
              d="M72 24 L44 55 L72 86"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M148 24 L176 55 L148 86"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <circle className="dot d1" cx="90" cy="55" r="8" fill="currentColor" />
          <circle className="dot d2" cx="110" cy="55" r="8" fill="currentColor" />
          <circle className="dot d3" cx="130" cy="55" r="8" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
