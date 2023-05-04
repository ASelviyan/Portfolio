import React from "react";

function Icon() {
  return (
    <div  className="relative group block">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        className=" group-hover:opacity-10"
        fill="#ab0569"
        >
        <path d="M46.793 22.09L27.91 3.207A4.093 4.093 0 0025 2c-1.055 0-2.11.402-2.91 1.207l-3.735 3.734 4.622 4.622a3.994 3.994 0 014.851.609 3.988 3.988 0 01.606 4.848l4.543 4.543a3.994 3.994 0 014.851 6.265 3.994 3.994 0 01-6.266-4.852l-4.542-4.542a3.855 3.855 0 01-1.02.421v12.286A3.99 3.99 0 0129 35c0 2.21-1.79 4-4 4s-4-1.79-4-4a3.99 3.99 0 013-3.86V18.856a3.955 3.955 0 01-1.828-1.027 3.988 3.988 0 01-.606-4.848l-4.625-4.625L3.207 22.09a4.112 4.112 0 000 5.82L22.09 46.793A4.093 4.093 0 0025 48c1.055 0 2.11-.402 2.91-1.207L46.793 27.91a4.112 4.112 0 000-5.82z"></path>
        </svg>
        <p className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
            Git
        </p>
    </div>
  );
}

export default Icon;