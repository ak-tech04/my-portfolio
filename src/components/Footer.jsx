import React from "react";

function Footer() {
  return (
    <footer className="w-full h-fit flex items-center justify-center border-t border-zinc-700">
      <div className="text-center my-6">
        <p className="text-sm text-zinc-400 mb-2">
          Designed & built by <span className="text-zinc-300 font-medium">Aditya Kumar Patel</span>
        </p>
        <p className="text-sm text-zinc-500">
          Email:{" "}
          <a
            href="mailto:ak.dev@gmail.com"
            target="_blank"
            className="text-blue-400 hover:text-blue-300"
          >
            ak.dev@gmail.com
          </a>
        </p>
        <p className="text-xs text-zinc-600 mt-2">
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;