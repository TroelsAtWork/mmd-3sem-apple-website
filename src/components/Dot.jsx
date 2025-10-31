"use client";
import "../app/globals.css";

const Dot = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`cursor-pointer w-10 h-10 rounded-full`}
    ></div>
  );
};

export default Dot;
