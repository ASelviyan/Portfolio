import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 32 32" 
        width="130px"
        height="130px" 
        fill="#4f0230" 
        strokeWidth="1%"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="group-hover:stroke-white" 
      >
        <path  d="M 5.21875 4 L 5.3125 5.09375 L 7.0625 24.875 L 7.125 25.5625 L 7.78125 25.75 L 15.71875 27.96875 L 15.96875 28.03125 L 16.25 27.96875 L 24.1875 25.78125 L 24.84375 25.59375 L 24.90625 24.90625 L 26.6875 5.09375 L 26.78125 4.03125 L 25.6875 4.03125 L 6.3125 4 Z M 7.40625 6 L 24.59375 6.03125 L 22.96875 24.03125 L 16 25.96875 L 9 24.03125 Z M 9.8125 9 L 10.46875 16.46875 L 19.03125 16.46875 L 18.75 19.6875 L 16 20.4375 L 15.96875 20.4375 L 13.21875 19.6875 L 13.0625 17.625 L 10.5625 17.625 L 10.90625 21.59375 L 15.96875 23 L 16 23 L 21.0625 21.59375 L 21.75 14 L 12.71875 14 L 12.5 11.46875 L 21.96875 11.46875 L 22.1875 9 Z"></path>
      </svg>
      <p className="absolute top-[0%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
          HTML
      </p>
    </div>
  );
}

export default Icon;