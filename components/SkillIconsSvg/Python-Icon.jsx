import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 30 30"
        fill="#4f0230"
        stroke="#4f0230" 
        strokeWidth="3%"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="group-hover:stroke-white" 
      >
        <path d="M13 3a4 4 0 00-4 4v1h5a1 1 0 010 2H7a4 4 0 00-4 4v4a4 4 0 004 4h1v-5c0-1.654 1.346-3 3-3h8a1 1 0 001-1V7a4 4 0 00-4-4h-3zm-1 2a1 1 0 110 2 1 1 0 010-2zm10 3v5c0 1.654-1.346 3-3 3h-8a1 1 0 00-1 1v6a4 4 0 004 4h3a4 4 0 004-4v-1h-5a1 1 0 010-2h7a4 4 0 004-4v-4a4 4 0 00-4-4h-1zm-4 15a1 1 0 110 2 1 1 0 010-2z"></path>
      </svg>
      <p className="absolute top-[-5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
        Python
      </p>
    </div>
  );
}

export default Icon;