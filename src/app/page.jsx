"use client";
import Image from "next/image";
// images
import mint from "/public/mint.png";
import navy from "/public/navy.png";
import ocean from "/public/ocean.png";
// components
import Thumbnail from "@/components/Thumbnail";
import Dot from "@/components/Dot";
// css
import "./globals.css";

export default function Home() {
  return (
    <main className="w-150 grid grid-cols-[486px_100px] grid-rows-[486px_fit]">
      <figure>
        <Image src={mint} alt="" width={500} height={500} />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot color="#6addcc" relatedImage={mint} />
        <Dot color="#434558" relatedImage={navy} />
        <Dot color="#b6ccda" relatedImage={ocean} />
      </div>
      <div className="flex justify-evenly">
        <Thumbnail imgsrc={mint} />
        <Thumbnail imgsrc={navy} />
        <Thumbnail imgsrc={ocean} />
      </div>
    </main>
  );
}
