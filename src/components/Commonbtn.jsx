import React from "react";

const Commonbtn = (props) => {
  return (
    <div>
      <button className="rounded-md text-white p-4 mt-4 bg-black border border-solid">
        {props.text}
      </button>
    </div>
  );
};

export default Commonbtn;
