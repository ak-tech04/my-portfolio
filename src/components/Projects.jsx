import React, { useState } from "react";
import Tags from "./Tags";
import Btn from "./Btn";


function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full h-fit ">
      <div className="h-full w-full flex flex-col md:flex-row border border-zinc-700 rounded-2xl bg-zinc-800/40 overflow-hidden">
        <div className="w-full md:w-[30%] flex-1 min-h-[20vh] md:min-h-0 bg-zinc-700/40 flex items-center justify-center text-zinc-400">
          Project Image
        </div>

        <div className="w-full flex-2 md:w-[70%] h-[60%] md:h-full flex flex-col justify-between p-5 md:p-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Project Title
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
              This is a sample project description area. You can replace this
              content with your actual project details, tech stack, and key
              features. The text starts with two lines in collapsed mode and can
              be expanded to show the full description when the user clicks
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              minus illo culpa numquam ea consectetur perferendis placeat libero
              eos, nulla accusantium modi eius ullam animi ex vel nesciunt
              possimus debitis. Placeat nisi non consectetur officia suscipit!
              Accusantium reprehenderit minus ea quisquam, officiis cum delectus
              aliquam blanditiis voluptatibus autem? Ratione sequi, sed voluptas
              quibusdam molestias corrupti libero. Nihil, quibusdam nobis. Ad,
              omnis recusandae earum officiis veritatis officia harum dolorem
              atque cumque minus quae, facere veniam beatae aspernatur inventore
              aperiam, illum asperiores. Molestias eos, labore dolorum quos
              aliquam neque modi autem, veritatis optio officiis beatae corrupti
              placeat blanditiis odit ad pariatur vero. “More”.
            </p>

            <button
              type="button"
              onClick={() => setIsExpanded((previous) => !previous)}
              className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              {isExpanded ? "Less" : "More"}
            </button>

            <p className="mt-3 text-xs md:text-sm text-zinc-400">
              {/* Small supporting text goes here. */}

              <Tags text={"text"} path={"some"}></Tags>
            </p>
          </div>

          <div className="mt-4    h-12 flex items-center  text-xs text-zinc-400">
            
            <Btn text={'source code'} ></Btn>
            {/* Buttons space */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
