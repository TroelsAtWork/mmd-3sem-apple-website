"use client";
import { useState } from "react";
import Image from "next/image";
// components
import Thumbnail from "@/components/Thumbnail";
import Dot from "@/components/Dot";
// css
import "./globals.css";

export default function Home() {
  const [activeWatchImage, setActiveWatchImage] = useState("/mint.png");
  return (
    <main className="w-fit grid grid-cols-[486px_40px] grid-rows-[486px_fit]">
      <figure>
        <Image src={activeWatchImage} alt="iWatch" width={500} height={500} />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot
          color="mint"
          relatedImage="/mint.png"
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
        <Dot
          color="navy"
          relatedImage="/navy.png"
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
        <Dot
          color="ocean"
          relatedImage="/ocean.png"
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
      </div>
      <div className="flex justify-evenly">
        <Thumbnail img="/mint.png" setActiveWatchImage={setActiveWatchImage} />
        <Thumbnail img="/navy.png" setActiveWatchImage={setActiveWatchImage} />
        <Thumbnail img="/ocean.png" setActiveWatchImage={setActiveWatchImage} />
      </div>
    </main>
  );
}
