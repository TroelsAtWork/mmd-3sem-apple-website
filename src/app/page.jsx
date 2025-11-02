"use client";
import { useState } from "react";
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
  const [activeWatchImage, setActiveWatchImage] = useState(mint);
  return (
    <main className="w-fit grid grid-cols-[486px_40px] grid-rows-[486px_fit]">
      <figure>
        <Image src={activeWatchImage} alt="" />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot
          color="mint"
          relatedImage={mint}
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
        <Dot
          color="navy"
          relatedImage={navy}
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
        <Dot
          color="ocean"
          relatedImage={ocean}
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
      </div>
      <div className="flex justify-evenly">
        <Thumbnail imgsrc={mint} setActiveWatchImage={setActiveWatchImage} />
        <Thumbnail imgsrc={navy} setActiveWatchImage={setActiveWatchImage} />
        <Thumbnail imgsrc={ocean} setActiveWatchImage={setActiveWatchImage} />
      </div>
    </main>
  );
}
