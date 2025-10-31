"use client";
import { useState } from "react";
import Image from "next/image";
// images
import mint from "@/images/mint.png";
import navy from "@/images/navy.png";
import ocean from "@/images/ocean.png";
// components
import Thumbnail from "@/components/Thumbnail";
import Dot from "@/components/Dot";
// css
import "./globals.css";

export default function Home() {
  const [activeColorVariant, setActiveColorVariant] = useState(mint);
  return (
    <main className="w-150 grid grid-cols-[486px_100px] grid-rows-[486px_fit]">
      <figure>
        <Image src={activeColorVariant} alt="" />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot
          color="#6addcc"
          relatedImage={mint}
          activeColorVariant={activeColorVariant}
          setActiveColorVariant={setActiveColorVariant}
        />
        <Dot
          color="#434558"
          relatedImage={navy}
          activeColorVariant={activeColorVariant}
          setActiveColorVariant={setActiveColorVariant}
        />
        <Dot
          color="#b6ccda"
          relatedImage={ocean}
          activeColorVariant={activeColorVariant}
          setActiveColorVariant={setActiveColorVariant}
        />
      </div>
      <div className="flex justify-evenly">
        <Thumbnail
          imgsrc={mint}
          setActiveColorVariant={setActiveColorVariant}
        />
        <Thumbnail
          imgsrc={navy}
          setActiveColorVariant={setActiveColorVariant}
        />
        <Thumbnail
          imgsrc={ocean}
          setActiveColorVariant={setActiveColorVariant}
        />
      </div>
    </main>
  );
}
