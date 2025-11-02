"use client";
import "../app/globals.css";

const Dot = ({
  color,
  activeWatchImage,
  setActiveWatchImage,
  relatedImage,
}) => {
  return (
    <div
      onClick={() => setActiveWatchImage(relatedImage)}
      style={{ backgroundColor: `${ color }` }}
      // className="cursor-pointer w-10 h-10 rounded-full"
      className={`cursor-pointer w-10 h-10 rounded-full ${
        activeWatchImage === relatedImage ? "border-3" : ""
      }`}
    ></div>
  );
};

export default Dot;
