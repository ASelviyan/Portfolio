import React from "react";

function Icon() {
  return (
    <div  className="group block relative drop-shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        viewBox="0 0 50 50"
        width="120"
        height="120"
        fill="white"
        className=" group-hover:opacity-10 "
      >
        <path d="M42 6l-3 34-14 4-14-4L8 6zM16.8 28h4l.098 2.5L25 31.898l4.102-1.398.296-4.5h-8.796l-.204-4h9.204l.296-4H16.102l-.301-4h18.3l-.5 8-.703 11.5L25 36.102 17.102 33.5z"></path>
      </svg>
      <p className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-1 opacity-0 group-hover:opacity-100">
          CSS
      </p>
    </div>
  );
}
// lg:top-[12rem] lg:left-[13.2rem] md:top-[12rem] md:left-[14rem] top-[11rem] left-[9rem]
export default Icon;