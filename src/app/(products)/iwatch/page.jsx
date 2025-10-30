"use client";
import Image from "next/image";
import mint from "@/images/mint.png";
import navy from "@/images/navy.png";
import ocean from "@/images/ocean.png";
import Figure from "@/components/Figure";
import Dot from "@/components/Dot";
import { useState } from "react";

export default function Home() {
  const [activeColorVariant, setActiveColorVariant] = useState(mint);
  return (
    <main className="w-150 grid grid-cols-[486px_100px] grid-rows-[486px_fit]">
      <figure>
        <Image src={activeColorVariant} alt="" />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot
          color="mint"
          relatedImage={mint}
          activeColorVariant={activeColorVariant}
          setActiveColorVariant={setActiveColorVariant}
        />
        <Dot
          color="navy"
          relatedImage={navy}
          activeColorVariant={activeColorVariant}
          setActiveColorVariant={setActiveColorVariant}
        />
        <Dot
          color="ocean"
          relatedImage={ocean}
          activeColorVariant={activeColorVariant}
          setActiveColorVariant={setActiveColorVariant}
        />
      </div>
      <div className="flex justify-evenly">
        <Figure imgsrc={mint} setActiveColorVariant={setActiveColorVariant} />
        <Figure imgsrc={navy} setActiveColorVariant={setActiveColorVariant} />
        <Figure imgsrc={ocean} setActiveColorVariant={setActiveColorVariant} />
      </div>
    </main>
  );
}
