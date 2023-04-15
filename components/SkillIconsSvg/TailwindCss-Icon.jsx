import React from "react";

function Icon() {
  return (
    <div  className="group block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="relative group-hover:opacity-10 "
      >
        <path
          fill="#ab0569"
          d="M24 9.604c-6.4 0-10.4 3.199-12 9.597 2.4-3.199 5.2-4.398 8.4-3.599 1.826.456 3.131 1.781 4.576 3.247C27.328 21.236 30.051 24 36 24c6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.6-1.825-.456-3.13-1.781-4.575-3.247C32.672 12.367 29.948 9.604 24 9.604zM12 24c-6.4 0-10.4 3.199-12 9.598 2.4-3.199 5.2-4.399 8.4-3.599 1.825.457 3.13 1.781 4.575 3.246 2.353 2.388 5.077 5.152 11.025 5.152 6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.599-1.826-.456-3.131-1.781-4.576-3.246C20.672 26.764 17.949 24 12 24z"
        ></path>
      </svg>
      <p className="break-all absolute lg:top-[21.5rem] lg:left-[57.5rem] md:top-[12rem] md:left-[11.7rem] top-[11rem] left-[9rem]  font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
        TailwindCSS
      </p>
    </div>
  );
}

export default Icon;