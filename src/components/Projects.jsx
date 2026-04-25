import React, { use, useId, useState } from "react";

import { Btn, Tags } from "./index";

function Projects({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full h-fit ">
      <div className="h-full w-full flex flex-col md:flex-row border border-zinc-700 rounded-2xl bg-zinc-800/40 overflow-auto ">
        <div className="w-full   flex-1 min-h-[20vh] md:min-h-0 bg-zinc-700/40 flex items-center justify-center text-zinc-400">
          <img
            className="h-full object-cover"
            src={project.projectImagePath}
            alt="Project Demo Image"
          />
        </div>

        <div className="w-full flex-2 md:w-[70%] h-[60%] md:h-full flex flex-col justify-between p-5 md:p-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {project.projectTitle}
            </h3>

            <p
              className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed"
              style={
                isExpanded
                  ? undefined
                  : {
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
              }
            >
              {project.projectDescription}
            </p>

            <button
              type="button"
              onClick={() => setIsExpanded((previous) => !previous)}
              className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              {isExpanded ? "Less" : "More"}
            </button>

            <p className="mt-3 flex gap-2 flex-wrap text-xs md:text-sm text-zinc-400">
              {project.techStackUsed.map((item) => {
                const id = useId();
                return <Tags key={id} text={item.name} path={item.icon}></Tags>;
              })}
            </p>
          </div>

          <div className=" mt-4 gap-2 md:gap-4  h-12 flex items-center  text-xs text-zinc-400 flex-wrap">
            {/* Buttons space */}
            {Object.entries(project.buttons).map(([key, value]) => {
              const id = useId();

              return (
                <Btn
                  key={id}
                  text={value.text}
                  iconPath={value.icon}
                  url={value.url}
                ></Btn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
