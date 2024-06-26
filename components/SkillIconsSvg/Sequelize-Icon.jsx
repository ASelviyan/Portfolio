import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-lg">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="#4f0230"
        d="M1 1L7 7L1 13"  
        v="3%"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="group-hover:stroke-white" 
        >
        <path
            d="M12.026 0L1.595 5.992v12.016L12.026 24l10.38-5.992V5.992L12.025 0zM12 3.484l7.43 4.227v8.578L12 20.516l-7.348-4.182-.08-8.623L12 3.484zm.049.59c-.977.563-1.952 1.128-2.928 1.692v.254l2.608 1.523v.482l.402-.232.256.15v-.336c.884-.506 1.807-1.04 2.568-1.48.004-.123.003-.253.004-.373l-2.91-1.68zM8.335 6.14c-.97.553-1.931 1.122-2.893 1.691v3.402l2.893 1.67.402-.232V9.754l2.49-1.44V7.83L8.336 6.14zm7.443.088l-2.892 1.67v.337l2.636 1.541v3.067l.256.148 2.893-1.67V7.918l-2.893-1.691zM12.13 8.37l-2.893 1.672v3.424c.965.555 1.929 1.112 2.893 1.67l2.893-1.672v-3.402L12.13 8.37zm-6.197 3.723c-.163.096-.328.189-.49.285v3.402l2.892 1.672.402-.232v-2.918l.473-.274-.473-.273v-.508l-.402.233c-.825-.478-1.69-.976-2.402-1.387zm12.248.086l-2.403 1.388-.255-.148v.334l-.493.285.493.287v3.067l.255.148 2.893-1.672v-3.402l-.49-.287zm-8.47 2.138c-.157.092-.316.183-.474.274v3.424l2.893 1.67 2.893-1.67v-3.403l-.49-.287-2.403 1.389-2.418-1.397z"
        ></path>
        </svg>
        <p className="absolute top-[-10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
            Sequelize
        </p>
    </div>
  );
}

export default Icon;