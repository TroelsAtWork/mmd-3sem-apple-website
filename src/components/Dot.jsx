"use client";
const Dot = ({
  color,
  relatedImage,
  activeColorVariant,
  setActiveColorVariant,
}) => {
  return (
    <div
      onClick={() => setActiveColorVariant(relatedImage)}
      className={`cursor-pointer w-10 h-10 bg-(--${color}) rounded-full ${
        relatedImage == activeColorVariant ? "border-3" : ""
      } `}
    ></div>
  );
};

export default Dot;
