import React from "react";

function Icon() {
  return (
    <div  className="group block relative drop-shadow-2xl">
      <svg 
        xmlns="http://www.w3.org/2000/svg"  
        width="125" 
        height="125"
        viewBox="0 0 50 50" 
        fill="#4f0230" 
        stroke="#4f0230"
        stroke-width="1%"
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="group-hover:stroke-white" 
      >
        <path fill-rule="evenodd" d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"/>
      </svg>
      
      <p className="absolute top-[0%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-1 opacity-0 group-hover:opacity-100">
          CSS
      </p>
    </div>
    
  );
}
// lg:top-[12rem] lg:left-[13.2rem] md:top-[12rem] md:left-[14rem] top-[11rem] left-[9rem]
export default Icon;