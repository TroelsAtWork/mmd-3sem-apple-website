import Image from "next/image";

const Figure = ({ img, setActiveWatchImage }) => {
  return (
    <figure>
      <Image
        onClick={() => setActiveWatchImage(img)}
        src={img}
        alt="iWatch"
        width={500}
        height={500}
        className="w-35 cursor-pointer"
      />
    </figure>
  );
};

export default Figure;
