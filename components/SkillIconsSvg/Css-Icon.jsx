import React from "react";

function Icon() {
  return (
    <div  >
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        viewBox="0 0 50 50"
        width="120"
        height="120"
        fill="#ab0569"
        className="relative group bg-center bg-cover border-2  shadow-lg pb-1-2 rounded-xl "
      >
        <path d="M42 6l-3 34-14 4-14-4L8 6zM16.8 28h4l.098 2.5L25 31.898l4.102-1.398.296-4.5h-8.796l-.204-4h9.204l.296-4H16.102l-.301-4h18.3l-.5 8-.703 11.5L25 36.102 17.102 33.5z"></path>
      </svg>
      <div className="absolute bg-opacity-25 opacity-0 group-hover:opacity-100">

      </div>
      <div
          className="absolute p-6 text-2xl tracking-widest text-white uppercase -translate-y-1/2 bg-black bg-opacity-75 opacity-0 top-1/2 rounded-xl group-hover:opacity-100"
      ></div>
             CSS
    </div>
  );
}

export default Icon;