// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Video } from "@/app/components/ugc";
// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";
//
// interface VideoSliderProps {
//   videos: Video[];
//   videosPerSlide?: number;
//   sliderId: string;
// }
//
// export const chunkArray = <T,>(array: T[], size: number): T[][] => {
//   const result: T[][] = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// };
//
// export default function VideoSlider({
//   videos,
//   videosPerSlide = 4,
//   sliderId,
// }: VideoSliderProps) {
//   const videoRef = useRef<{ [key: string]: HTMLVideoElement | null }>({});
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//
//   const handlePlayVideo = (id: string) => {
//     const video = videoRef.current[id];
//     if (video) {
//       if (video.paused) {
//         video.play();
//       } else {
//         video.pause();
//       }
//     }
//   };
//
//   const videoChunks = chunkArray(videos, videosPerSlide);
//
//   const handleSlideChange = (swiper: {
//     isBeginning: boolean | ((prevState: boolean) => boolean);
//     isEnd: boolean | ((prevState: boolean) => boolean);
//   }) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };
//   console.log(navigator.platform);
//   return (
//     <div className="video-slider-container relative">
//       <div className={`prev-${sliderId}`}>
//         <MdArrowBackIosNew
//           className={`absolute top-1/2 left-2 lg:-left-7 z-10 transform -translate-y-1/2 w-7 h-7 hover:scale-110 hover:cursor-pointer ${
//             isBeginning ? "text-gray-300 pointer-events-none" : "text-cyan-400"
//           }`}
//         />
//       </div>
//       <div className={`next-${sliderId}`}>
//         <MdArrowForwardIos
//           className={`absolute top-1/2 right-2 lg:-right-7 z-10 transform -translate-y-1/2 w-7 h-7 hover:scale-110 hover:cursor-pointer ${
//             isEnd ? "text-gray-300 pointer-events-none" : "text-cyan-400"
//           }`}
//         />
//       </div>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation={{
//           prevEl: `.prev-${sliderId}`,
//           nextEl: `.next-${sliderId}`,
//         }}
//         onSlideChange={handleSlideChange}
//         data-aos="zoom-in"
//       >
//         {videoChunks.map((group, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex gap-6 justify-center">
//               {group.map((video) => (
//                 <div key={video.id} className="w-[250px]">
//                   <div className="relative mb-2">
//                     <video
//                       ref={(elem) => {
//                         if (elem) videoRef.current[video.id] = elem;
//                       }}
//                       className="rounded-[35px] w-full h-[500px] object-cover"
//                       controls
//                       preload="none"
//                       poster={video.poster}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         e.stopPropagation();
//                         handlePlayVideo(video.id);
//                       }}
//                     >
//                       <source src={video.url} type="video/mp4" />
//                       <source src={video.url} type="video/quicktime" />
//                       <p>Your browser does not support HTML5 video.</p>
//                     </video>
//                     <Image
//                       src="/images/phone_frame_v2.png"
//                       alt="iPhone frame"
//                       width={270}
//                       height={400}
//                       className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
//                     />
//                   </div>
//                   <p className="text-lg text-gray-600 text-center">
//                     {video.description || "No description available"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Video } from "@/app/components/ugc";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { isMobile, isTablet } from "react-device-detect"; // Импортируем необходимые флаги

interface VideoSliderProps {
  videos: Video[];
  videosPerSlide?: number;
  sliderId: string;
}

export const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function VideoSlider({
  videos,
  videosPerSlide = 4,
  sliderId,
}: VideoSliderProps) {
  const videoRef = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Обработчик воспроизведения видео (для десктопов)
  const handlePlayVideo = (id: string) => {
    const video = videoRef.current[id];
    if (video) {
      if (video.paused) {
        video.play().catch((error) => {
          console.log("Video playback failed:", error);
        });
      } else {
        video.pause();
      }
    }
  };

  const videoChunks = chunkArray(videos, videosPerSlide);

  const handleSlideChange = (swiper: {
    isBeginning: boolean | ((prevState: boolean) => boolean);
    isEnd: boolean | ((prevState: boolean) => boolean);
  }) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="video-slider-container relative">
      {/*<div className={`prev-${sliderId}`}>*/}
      {/*  <MdArrowBackIosNew*/}
      {/*    className={`absolute top-1/2 left-2 lg:-left-7 z-10 transform -translate-y-1/2 w-7 h-7 hover:scale-110 hover:cursor-pointer ${*/}
      {/*      isBeginning ? "text-gray-300 pointer-events-none" : "text-cyan-400"*/}
      {/*    }`}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className={`next-${sliderId}`}>*/}
      {/*  <MdArrowForwardIos*/}
      {/*    className={`absolute top-1/2 right-2 lg:-right-7 z-10 transform -translate-y-1/2 w-7 h-7 hover:scale-110 hover:cursor-pointer ${*/}
      {/*      isEnd ? "text-gray-300 pointer-events-none" : "text-cyan-400"*/}
      {/*    }`}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={`prev-${sliderId}`}>
        <MdArrowBackIosNew
          className={`absolute top-1/2 left-2 lg:-left-7 z-10 transform -translate-y-1/2 w-7 h-7 rounded-full p-1 bg-cyan-400 text-white hover:scale-110 hover:cursor-pointer ${
            isBeginning ? "bg-gray-300 text-gray-300 pointer-events-none" : ""
          }`}
        />
      </div>
      <div className={`next-${sliderId}`}>
        <MdArrowForwardIos
          className={`absolute top-1/2 right-2 lg:-right-7 z-10 transform -translate-y-1/2 w-7 h-7 rounded-full p-1 bg-cyan-400 text-white hover:scale-110 hover:cursor-pointer ${
            isEnd ? "bg-gray-300 text-gray-300 pointer-events-none" : ""
          }`}
        />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: `.prev-${sliderId}`,
          nextEl: `.next-${sliderId}`,
        }}
        onSlideChange={handleSlideChange}
        data-aos="zoom-in"
      >
        {videoChunks.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-6 justify-center">
              {group.map((video) => (
                <div key={video.id} className="w-[250px]">
                  <div className="relative mb-2">
                    <video
                      ref={(elem) => {
                        if (elem) videoRef.current[video.id] = elem;
                      }}
                      className="rounded-[35px] w-full h-[444px] object-contain"
                      controls
                      preload="none"
                      poster={video.poster}
                      // Если это мобильное или планшетное устройство, не используем обработчик, а полагаемся на стандартный плеер
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!isMobile && !isTablet) {
                          handlePlayVideo(video.id); // Включаем/останавливаем видео только на десктопах
                        }
                      }}
                    >
                      <source src={video.url} type="video/mp4" />
                      <source src={video.url} type="video/quicktime" />
                      <p>Your browser does not support HTML5 video.</p>
                    </video>
                    <Image
                      src="/images/phone_frame_v2.png"
                      alt="iPhone frame"
                      width={270}
                      height={400}
                      className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
                    />
                  </div>
                  <p className="text-lg text-gray-600 text-center">
                    {video.description || "No description available"}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
