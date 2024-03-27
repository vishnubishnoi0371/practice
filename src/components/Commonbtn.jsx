import React from "react";
const Commonbtn = (props) => {
  return (
    <div>
      <button onClick={props.click}  className=" cmn_btn bg-black  rounded-[15px] text-white px-4 py-3 mt-4 ">
        {props.text}
      </button>
    </div>
  );
};
export default Commonbtn; 