"use client";
import React, { useRef } from "react";
import Image from "next/image";

export interface Video {
  id: string;
  name: string;
  url: string;
  description: string;
  poster?: string;
}

export interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  const videoRef = useRef<Record<string, HTMLVideoElement | null>>({});
  const handlePlayVideo = (id: string) => {
    if (videoRef.current[id]) {
      videoRef.current[id].play();
    }
  };
  return (
    <div data-aos="zoom-in">
      <ul
        className="flex items-stretch gap-12 justify-around flex-wrap"
        // className="flex flex-row gap-12 justify-around overflow-scroll scroll-mt-4"
      >
        {videos.map((el: Video) => (
          <li key={el.name} className="w-[250px] ">
            <div className="relative w-[250px] mb-2">
              <video
                ref={(elem) => {
                  if (elem) videoRef.current[el.id] = elem;
                }}
                width="100%"
                height="500"
                controls
                className="rounded-[35px] w-[250px] h-[500px] object-cover"
                title={el.name}
                preload="none"
                poster={el.poster}
                onClick={() => handlePlayVideo(el.id)}
              >
                <source src={el.url} type="video/mp4" />
                <source src={el.url} type="video/quicktime" />
                <p>Your browser does not support HTML5 video.</p>
              </video>
              <Image
                src="/images/phone_frame_v2.png"
                alt="iphone frame"
                width={270}
                height={400}
                className="absolute top-0 left-0 h-[100%] z-20 pointer-events-none"
              />
            </div>
            <p className="text-lg text-gray-600 text-center">
              {el.description || "No description available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
