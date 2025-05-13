// import React, { useState, useEffect } from "react";
// import Title from "@/app/components/title";
// import Section from "@/app/components/section";
// import VideoList from "@/app/components/video-list";
// import VideoSlider from "@/app/components/video-slider";
// import Subtitle from "@/app/components/subtitle";
//
// export interface Video {
//   id: string;
//   name: string;
//   url: string;
//   description: string;
//   poster?: string;
// }
//
// export interface VideographyProps {
//   isEven: boolean;
//   sport_videos: Video[];
//   beauty_videos: Video[];
//   vlog_videos: Video[];
//   portrait_videos: Video[];
//   food_videos: Video[];
// }
//
// export default function Videography({
//   isEven,
//   sport_videos,
//   beauty_videos,
//   vlog_videos,
//   portrait_videos,
//   food_videos,
// }: VideographyProps) {
//   const [screenSize, setScreenSize] = useState<string>("desktop");
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setScreenSize("mobile");
//       } else if (window.innerWidth <= 1024) {
//         setScreenSize("tablet");
//       } else {
//         setScreenSize("desktop");
//       }
//     };
//
//     // Инициализация
//     handleResize();
//
//     // Обработчик события изменения размера экрана
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <Section isEven={isEven} id={"videography"}>
//       <Title>Videography</Title>
//       <Subtitle>Sport & Entertainment</Subtitle>
//
//       {screenSize === "mobile" ? (
//         <VideoList videos={sport_videos} />
//       ) : (
//         <VideoSlider
//           videos={sport_videos}
//           sliderId={"sports"}
//           videosPerSlide={screenSize === "desktop" ? 4 : 2}
//         />
//       )}
//       <VideoSlider
//         videos={sport_videos}
//         sliderId={"sports"}
//         videosPerSlide={screenSize === "desktop" ? 4 : 2}
//       />
//       <Subtitle>Beauty</Subtitle>
//       {screenSize === "mobile" ? (
//         <VideoList videos={beauty_videos} />
//       ) : (
//         <VideoSlider
//           videos={beauty_videos}
//           sliderId={"beauty"}
//           videosPerSlide={screenSize === "desktop" ? 4 : 2}
//         />
//       )}
//
//       <Subtitle>Mini-vlogs</Subtitle>
//       {screenSize === "mobile" ? (
//         <VideoList videos={vlog_videos} />
//       ) : (
//         <VideoSlider
//           videos={vlog_videos}
//           sliderId={"vlogs"}
//           videosPerSlide={screenSize === "desktop" ? 4 : 2}
//         />
//       )}
//
//       <Subtitle>Portrait</Subtitle>
//       {screenSize === "mobile" ? (
//         <VideoList videos={portrait_videos} />
//       ) : (
//         <VideoSlider
//           videos={portrait_videos}
//           sliderId={"portraits"}
//           videosPerSlide={screenSize === "desktop" ? 4 : 2}
//         />
//       )}
//
//       <Subtitle>Food</Subtitle>
//       {screenSize === "mobile" ? (
//         <VideoList videos={food_videos} />
//       ) : (
//         <VideoSlider
//           videos={food_videos}
//           sliderId={"foods"}
//           videosPerSlide={screenSize === "desktop" ? 4 : 2}
//         />
//       )}
//     </Section>
//   );
// }
import React, { useState, useEffect } from "react";
import Title from "@/app/components/title";
import Section from "@/app/components/section";
import VideoList from "@/app/components/video-list";
import VideoSlider from "@/app/components/video-slider";
import Subtitle from "@/app/components/subtitle";

export interface Video {
  id: string;
  name: string;
  url: string;
  description: string;
  poster?: string;
}

export interface VideographyProps {
  isEven: boolean;
  sport_videos: Video[];
  beauty_videos: Video[];
  vlog_videos: Video[];
  portrait_videos: Video[];
  food_videos: Video[];
}

// Функция для определения screenSize
export const getScreenSize = (
  width: number
): "mobile" | "tablet" | "desktop" => {
  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
};

// Универсальная функция для рендера секции
export const renderCategory = (
  // title?: string,
  videos: Video[],
  screenSize: string,
  sliderId: string
) => (
  <>
    {screenSize === "mobile" ? (
      <VideoList videos={videos} />
    ) : (
      <VideoSlider
        videos={videos}
        sliderId={sliderId}
        videosPerSlide={screenSize === "desktop" ? 4 : 2}
      />
    )}
  </>
);

export default function Videography({
  isEven,
  sport_videos,
  beauty_videos,
  vlog_videos,
  portrait_videos,
  food_videos,
}: VideographyProps) {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
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
    <Section isEven={isEven} id={"videography"}>
      <Title>Videography</Title>
      <Subtitle>Events</Subtitle>
      {renderCategory(vlog_videos, screenSize, "vlogs")}
      <Subtitle>Sport & Entertainment</Subtitle>
      {renderCategory(sport_videos, screenSize, "sports")}
      <Subtitle>Beauty</Subtitle>
      {renderCategory(beauty_videos, screenSize, "beauty")}
      <Subtitle>Portrait</Subtitle>
      {renderCategory(portrait_videos, screenSize, "portraits")}
      <Subtitle>Food</Subtitle>
      {renderCategory(food_videos, screenSize, "foods")}
    </Section>
  );
}
