"use client";
import React from "react";
import Section from "@/app/components/section";
import Title from "@/app/components/title";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import PhotoSlider from "@/app/components/photo-slider";
import RadioButtons from "@/app/components/radio-buttons";
import photos from "../../../lib/photos.json";
import { getScreenSize, renderCategory } from "@/app/components/videography";

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
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize(window.innerWidth));
    handleResize(); // Инициализация
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Section isEven={isEven} id={"ugc"}>
      <Title>UGC</Title>
      <RadioButtons
        selectedMedia={selectedMedia}
        onChange={(value) => setSelectedMedia(value)}
      />
      {selectedMedia === "videos" && renderCategory(videos, screenSize, "ugc")}

      {selectedMedia === "photos" &&
        (screenSize === "mobile" ? (
          <div>
            <ul
              className="flex items-center gap-6 justify-around flex-wrap"
              id="photos"
              data-aos="zoom-in"
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
        ) : (
          <PhotoSlider
            photos={photos}
            sliderId="ugc-photos"
            photosPerSlide={screenSize === "desktop" ? 4 : 2}
          />
        ))}
    </Section>
  );
}
