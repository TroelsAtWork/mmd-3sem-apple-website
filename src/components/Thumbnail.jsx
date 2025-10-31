import Image from "next/image";

const Figure = ({ imgsrc, setActiveWatchImage }) => {
  return (
    <figure>
      <Image
        onClick={() => setActiveWatchImage(imgsrc)}
        src={imgsrc}
        alt=""
        className="w-35 cursor-pointer"
      />
    </figure>
  );
};

export default Figure;
