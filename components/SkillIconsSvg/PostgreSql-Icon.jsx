import React from "react";

function Icon() {
  return (
    <div  className="relative group block drop-shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        fill="#4f0230"
        d="M1 1L7 7L1 13"  
        stroke-width="3%"
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="group-hover:stroke-white" 
      >
        <path d="M35.2 2.102c-1.5 0-2.802.296-4 .597 2.1.899 3.402 2 4.1 2.5 1.602 1.399 2.5 2.801 4.102 5.102.297.5.797 1.199 1.098 2.297.3 1 .3 1.8.3 2.601 0 1.102-.1 2-.202 2.899-.098.703-.098 1.004-.196 1.203 0 .101 0 .199-.101.398 0 .5 0 .703.101 1.102 0 .398.098.8.098 1.5.102 1.3.102 2.199-.098 3.297V26c-.203.898-.402 1.8-.902 2.598.102.203.2.3.3.5.5-.7.9-1.399 1.298-2.196C42.3 24.7 43 22.801 43.5 21.402c.898-2.601 1.398-4.504 1.7-5.902.698-3 .8-4.398.5-6 0-.5-.2-1.402-.7-2.3-1.102-2-2.8-2.9-4-3.5-.8-.4-2.902-1.5-5.8-1.598zm-21.665.441c-1.152-.023-2.558.105-4.137.855-.5.204-2 .903-3.199 2.5-.8 1-1.398 2.5-1.699 4.2-.3 1.5-.402 3.304.2 6.703.398 2.398.8 4 1.6 7.297.102.402.7 2.203 2 6.203l.098.199c.204.7.801 2.2 2.102 3.7.898 1 1.7 1.6 2.402 1.6h.196c1.3 0 2.203-1 3-1.8 0-.102 1.902-2.398 2.601-3.2-.101-.1-.297-.1-.398-.202-1.2-.7-2.102-1.797-2.801-3-1.2-2.2-1.102-4.399-.902-5.5l.101-1.696c-.398-2.703-.297-5.3.203-7.902.399-2.2.899-4.398 2.696-6.7.601-.8 1.3-1.5 2-2a14.571 14.571 0 00-5-1.198c-.325-.028-.68-.051-1.063-.059zm12.563.855c-.5 0-1 0-1.5.102-2 .398-3.899 1.5-5.399 3.398-1.5 1.903-1.898 3.7-2.297 5.801-.203.801-.203 1.5-.304 2.301.601-.5 1.402-1.102 2.601-1.402.7-.2 2.5-.797 4 .101.5.301 1.2.903 1.899 2.602 1.5 4.199.004 8.5-.196 8.898-.101.399-.3.7-.402.899-.2.5-.398.902-.598 1.703-.101.699-.203 1.3-.203 2 .301 0 .602.097.899.297.5.5.601 1.203.703 1.5.199 1.601.199 3.601.199 5.601 0 1.602 0 3.102.098 4.102.203 2.3.902 3.898 1.902 4.699.7.602 1.598.598 2.098.7h.203c1.5 0 3.898-1 4.797-2.4.5-.8.703-1.5.902-2.5.102-.6.098-.898.2-1.5 0-.3.1-.8.1-1.398 0-.5.098-1.101.2-1.804.102-1.7.398-3.696.5-4.797.102-1.301.7-2.403 1.2-3.102-.7-.101-1.4-.699-1.798-1.699-.601-1.102-.703-1.402-.804-1.902-.098-.399-.297-.899-1-2.399-1.5-3.398-1.696-4.398-1.696-5.199-.101-1.102-.203-2.598 1-3.598 1.797-1.601 4.098-1.5 5.297-1.101v-.203c-.199-.797-.597-1.399-.898-1.797C36.3 9 35.5 7.8 34.098 6.6a14.321 14.321 0 00-4.297-2.5c-1-.3-2.203-.703-3.703-.703zm11.054 11.727c-.726-.05-1.652.074-2.453.777-.398.399-.398 1.2-.297 1.899 0 .5.098 1.199 1.598 4.601.7 1.598.898 2.098 1 2.5.102.399.2.598.8 1.696.102.203.2.402.4.601.198-.3.3-.8.398-1.601l.101-.297c.2-.899.102-1.602.102-2.801 0-.602-.102-1-.102-1.3-.101-.5-.101-.9-.101-1.5-.2-.302-.2-.4-.098-.602 0-.2.098-.496.2-1.098.1-.8.202-1.5.202-2.3-.203-.102-.3-.2-.5-.298 0 0-.527-.226-1.25-.277zm-15.636.395c-.637-.075-1.368.132-1.817.28-1.101.302-1.797 1-2.297 1.4-.3.3-.601.6-.902 1 0 .698.098 1.402.2 2.1v.102l-.2 2c-.2.899-.3 2.598.7 4.297.5 1 1.202 1.801 2.1 2.301.602.398 1.4.7 2.298.902 0-.703.101-1.504.203-2.203.199-1 .398-1.5.699-2.101a3 3 0 01.402-.797c.098-.301 1.496-4.102.196-7.602-.297-.8-.598-1.3-1-1.5a1.47 1.47 0 00-.582-.18zm14.672.57c.261-.016.511.008.613.11.3.198-.102.698-.203.8-.098.102-.297.3-.598.402-.398.098-.7-.203-.8-.203-.102-.101-.4-.398-.298-.699.098-.2.2-.2.598-.3a2.84 2.84 0 01.688-.11zm-15.032.828c.336-.023.617.105.844.18.3.101.598.203.598.402.101.3-.196.5-.297.598-.301.3-.801.304-.801.304-.5 0-.8-.3-1-.601-.102-.102-.2-.301-.098-.5.098-.2.297-.301.399-.301.125-.05.242-.074.355-.082zM39.5 30c-.5.7-1.2 1.602-1.3 2.8 0 .2 0 .302-.102.5.8.2 1.504.2 2.203.102C41.902 33.2 43 32.398 43.199 32.2c.7-.5 1.602-1.5 1.399-1.898-.098-.2-.399-.102-2 0-.399 0-1.598.3-2.399.101H40c-.2-.101-.398-.203-.5-.402zm-17.402 2c-.2.3-.496.5-.696.7-.8.5-1.804.902-2.804 1.1-.899.302-1.399.302-1.399.602-.101.399.899.899 1.399 1.098 1.703.7 3.402.3 3.703.2.199-.102.699-.302 1.199-.602 0-1.098-.098-2.098-.2-2.899v-.101h-.1c-.302 0-.7.004-1.102-.098z"></path>
      </svg>
      <p className="absolute top-[-10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-2xl z-0 opacity-0 group-hover:opacity-100">
          PostgreSQL
      </p>
    </div>
  );
}


export default Icon;
