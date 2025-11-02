"use client";
import Image from "next/image";
import Thumbnail from "@/components/Thumbnail";
import Dot from "@/components/Dot";
// css
import "./globals.css";

export default function Home() {
  return (
    <main className="w-150 grid grid-cols-[486px_100px] grid-rows-[486px_fit]">
      <figure>
        <Image src="/mint.png" alt="" width={500} height={500} />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot color="#6addcc" relatedImage="/mint.png" />
        <Dot color="#434558" relatedImage="/navy.png" />
        <Dot color="#b6ccda" relatedImage="/ocean.png" />
      </div>
      <div className="flex justify-evenly">
        <Thumbnail imgsrc="/mint.png" />
        <Thumbnail imgsrc="/navy.png" />
        <Thumbnail imgsrc="/ocean.png" />
      </div>
    </main>
  );
}
