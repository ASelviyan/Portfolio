import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        fill="#ab0569"
        className=" group-hover:opacity-10"
      >
        <path d="M45.273 2.324A.996.996 0 0044.535 2H5.465a.996.996 0 00-.996 1.09l3.52 39.426c.034.414.324.757.722.875l16.012 4.57c.086.027.18.039.273.039a.926.926 0 00.274-.04l16.023-4.57c.398-.117.684-.46.723-.874L45.53 3.09a.985.985 0 00-.258-.766zm-8.425 13.594H18.035l.45 5.09h17.91L35.05 36.05 24.992 39.09l-.097-.031-9.942-3.012-.543-6.129h4.871l.211 2.379 5.559 1.164 5.457-1.164.582-6.438H14.047l-1.324-14.804H37.28z"></path>
      </svg>
      <p className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
          HTML
      </p>
    </div>
  );
}

export default Icon;