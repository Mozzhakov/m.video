import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CldImage } from "next-cloudinary";
import { chunkArray } from "@/app/components/video-slider";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface PhotoSliderProps {
  photos: { id: string; url: string }[];
  photosPerSlide?: number;
  sliderId: string;
}

export default function PhotoSlider({
  photos,
  photosPerSlide = 4,
  sliderId,
}: PhotoSliderProps) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const photoChunks = chunkArray(photos, photosPerSlide);

  const handleSlideChange = (swiper: {
    isBeginning: boolean;
    isEnd: boolean;
  }) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="photo-slider-container relative">
      <div className={`prev-${sliderId}`}>
        <MdArrowBackIosNew
          className={`absolute top-1/2 left-2 lg:-left-7 z-10 transform -translate-y-1/2 w-7 h-7 hover:scale-110 hover:cursor-pointer ${
            isBeginning ? "text-gray-300 pointer-events-none" : "text-cyan-400"
          }`}
        />
      </div>
      <div className={`next-${sliderId}`}>
        <MdArrowForwardIos
          className={`absolute top-1/2 right-2 lg:-right-7 z-10 transform -translate-y-1/2 w-7 h-7 hover:scale-110 hover:cursor-pointer ${
            isEnd ? "text-gray-300 pointer-events-none" : "text-cyan-400"
          }`}
        />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: `.prev-${sliderId}`,
          nextEl: `.next-${sliderId}`,
        }}
        onSlideChange={handleSlideChange}
        data-aos="zoom-in"
      >
        {photoChunks.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-6 justify-center">
              {group.map((photo) => (
                <div key={photo.id} className="w-[250px]">
                  <CldImage
                    width="250"
                    height="350"
                    src={photo.url}
                    alt={`Photo ${photo.id}`}
                    className="rounded-[20px] w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
