import React from "react";

const LabelTag = ({ text, bg, color, className }) => {
  return (
    <div
      style={{ backgroundColor: bg, color: color }}
      className={`bg-primary-lightest-2 rounded-[5px] h-[2.6rem] w-max text-center flex px-[1.6rem] items-center justify-center text-[#007FC5] ${className}`}
    >
      <p className="small_light !text-[1.4rem]">{text}</p>
    </div>
  );
};

export default LabelTag;
