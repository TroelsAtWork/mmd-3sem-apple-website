"use client";
import "../app/globals.css";

const Dot = ({
  color,
  relatedImage,
  activeColorVariant,
  setActiveColorVariant,
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => setActiveColorVariant(relatedImage)}
      className={`cursor-pointer w-10 h-10 rounded-full ${
        relatedImage == activeColorVariant ? "border-3" : ""
      } `}
    ></div>
  );
};

export default Dot;
