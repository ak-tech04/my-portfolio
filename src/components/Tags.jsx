import React from "react";

function Tags({ text, path }) {
  return (
    <div className="inline-flex w-fit px-4 py-2 items-center gap-1.5 rounded-full border border-zinc-500/60 ">
      <img src={path} alt="tag icon" className="h-[1em] w-[1em] object-contain" />
      <span className="text-sm leading-none text-zinc-300 whitespace-nowrap">
        {text}
        
      </span>
    </div>
  );
}

export default Tags;