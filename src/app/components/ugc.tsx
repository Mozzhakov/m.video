"use client";
import React from "react";
import Image from "next/image";
import { CldVideoPlayer, CldImage } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import videos from "../../../lib/videos.json";
import photos from "../../../lib/photos.json";

export type PortfolioProps = {
  isEven: boolean;
};

export default function Portfolio({ isEven }: PortfolioProps) {
  return (
    <section className={`${isEven ? "bg-neutral-50" : "bg-gray-200"}`}>
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:px-10 lg:py-12">
        <h1 className="text-cyan-400 text-6xl">Portfolio</h1>
        <div>
          <h2 className="text-center text-6xl text-gray-600 mt-16 mb-10">
            Videos
          </h2>
          <ul className="flex items-stretch gap-14 justify-around flex-wrap">
            {videos.map(
              (el: { id: string; url: string; description: string }) => {
                return (
                  <li key={el.id} className="w-[250px]">
                    <div className="relative w-full mb-2">
                      <CldVideoPlayer
                        width="225"
                        src={el.url}
                        className="rounded-[35px]"
                        id={`cld-video-${el.id}`}
                      />
                      <Image
                        src="/images/phone_frame_v2.png"
                        alt="iphone frame"
                        width={270}
                        height={400}
                        className="absolute top-0 left-0  h-[100%] z-20 pointer-events-none"
                      />
                    </div>
                    <p className="text-lg text-gray-600 text-center">
                      {el.description}
                    </p>
                  </li>
                );
              },
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-center text-6xl text-gray-600 mt-16 mb-10   ">
            Photos
          </h2>
          <ul className="flex items-center gap-6 justify-around flex-wrap">
            {photos.map((el: { id: string; url: string }) => {
              return (
                <li key={el.id} className="relative w-[280px]">
                  <CldImage
                    width="280"
                    height="400"
                    src={el.url}
                    sizes="100vw"
                    alt="Description of my image"
                    className="rounded-[35px]"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
