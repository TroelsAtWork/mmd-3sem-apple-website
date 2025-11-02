import Image from "next/image";

const Figure = ({ imgsrc }) => {
  return (
    <figure>
      <Image
        src={imgsrc}
        alt=""
        width="500"
        height="500"
        className="w-35 cursor-pointer"
      />
    </figure>
  );
};

export default Figure;
