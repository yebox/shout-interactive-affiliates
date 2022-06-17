import React from "react";

const Padding = ({ children, className }) => {
  return <div className={`w-full relative p-[28px] md:px-[48px] md:py-[42px] ${className}`}>{children}</div>;
};

export default Padding;
