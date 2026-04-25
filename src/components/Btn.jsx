import React from "react";

function Btn({ text, iconPath, url }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.open(url, "_blank");
      }}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
    >
      {iconPath ? (
        <img
          src={iconPath}
          alt="button icon"
          className="h-[1em] w-[1em] object-contain"
        />
      ) : null}
      <span className="capitalize text-nowrap">{text}</span>
    </button>
  );
}

export default Btn;
