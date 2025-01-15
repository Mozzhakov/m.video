"use client";
import React from "react";
import Section from "@/app/components/section";
import Title from "@/app/components/title";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import RadioButtons from "@/app/components/radio-buttons";
import photos from "../../../lib/photos.json";
import VideoList from "@/app/components/video-list";

export interface Video {
  id: string;
  name: string;
  url: string;
  description: string;
  poster?: string;
}

export interface UgcProps {
  isEven: boolean;
  videos: Video[];
}

export default function Ugc({ isEven, videos }: UgcProps) {
  const [selectedMedia, setSelectedMedia] = useState("videos");
  console.log(videos);
  return (
    <Section isEven={isEven} id={"ugc"}>
      <Title>UGC</Title>
      <RadioButtons
        selectedMedia={selectedMedia}
        onChange={(value) => setSelectedMedia(value)}
      />
      {selectedMedia === "videos" && <VideoList videos={videos} />}

      {selectedMedia === "photos" && (
        <div>
          <ul
            className="flex items-center gap-6 justify-around flex-wrap"
            id="photos"
          >
            {photos.map((el: { id: string; url: string }) => (
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
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
