import Image from "next/image";

const Figure = ({ imgsrc, setActiveColorVariant }) => {
  return (
    <figure onClick={() => setActiveColorVariant(imgsrc)}>
      <Image src={imgsrc} alt="" className="w-35 cursor-pointer" />
    </figure>
  );
};

export default Figure;
