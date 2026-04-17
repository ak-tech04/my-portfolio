import React from "react";

function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-between ">
      <div className="text-white">
        <h1 className="text-5xl font-bold">Hi, I’m Ak</h1>
        <p className="mt-4 text-zinc-300">Frontend Developer</p>
      </div>

      <div className="w-[30vw] max-w-full">
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

          <circle
            className="dot d1"
            cx="90"
            cy="55"
            r="8"
            fill="currentColor"
          />
          <circle
            className="dot d2"
            cx="110"
            cy="55"
            r="8"
            fill="currentColor"
          />
          <circle
            className="dot d3"
            cx="130"
            cy="55"
            r="8"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
