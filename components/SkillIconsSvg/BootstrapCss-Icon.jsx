import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="#4f0230"
        width="110"
        height="110"
        d="M1 1L7 7L1 13" 
      
        strokeWidth="3%"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="group-hover:stroke-white"  
      >
        <path d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 3v11.99c5.93 0 7.117.08 8.227-.25.65-.2 2.43-.84 2.43-3.09 0-1-.3-2.69-2.26-3.11v-.03h-.37c1-.45 1.63-1.3 1.63-2.55 0-.32.09-2.96-3.41-2.96H11zm2 2h4c1.509 0 1.656.853 1.656 1.49C18.656 15.044 17.03 15 17 15h-4v-3zm0 5h4.76c1.86 0 1.896 1.176 1.896 1.48 0 1.56-1.611 1.52-1.806 1.52H13v-3z"></path>
      </svg>
      <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
          BootstrapCSS
      </p>
    </div>
  );
}

export default Icon;
