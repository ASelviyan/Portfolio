import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        fill="#4f0230"
        d="M1 1L7 7L1 13"  
        stroke="#4f0230" 
        strokeWidth="3%"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="group-hover:stroke-white" 
      >
        <path
          d="M24 9.604c-6.4 0-10.4 3.199-12 9.597 2.4-3.199 5.2-4.398 8.4-3.599 1.826.456 3.131 1.781 4.576 3.247C27.328 21.236 30.051 24 36 24c6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.6-1.825-.456-3.13-1.781-4.575-3.247C32.672 12.367 29.948 9.604 24 9.604zM12 24c-6.4 0-10.4 3.199-12 9.598 2.4-3.199 5.2-4.399 8.4-3.599 1.825.457 3.13 1.781 4.575 3.246 2.353 2.388 5.077 5.152 11.025 5.152 6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.599-1.826-.456-3.131-1.781-4.576-3.246C20.672 26.764 17.949 24 12 24z"
        ></path>
      </svg>
      <p className="absolute top-[5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
        TailwindCSS
      </p>
    </div>
  );
}

export default Icon;