import React from "react";
import Title from "@/app/components/title";
import Section from "@/app/components/section";
import VideoList from "@/app/components/video-list";
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

export default function Videography({
  isEven,
  sport_videos,
  beauty_videos,
  vlog_videos,
  portrait_videos,
  food_videos,
}: VideographyProps) {
  return (
    <Section isEven={isEven} id={"videography"}>
      <Title>Videography</Title>
      <Subtitle>Sport & Entertainment</Subtitle>
      <VideoList videos={sport_videos} />
      <Subtitle>Beauty</Subtitle>
      <VideoList videos={beauty_videos} />
      <Subtitle>Mini-vlogs</Subtitle>
      <VideoList videos={vlog_videos} />
      <Subtitle>Portrait</Subtitle>
      <VideoList videos={portrait_videos} />
      <Subtitle>Food</Subtitle>
      <VideoList videos={food_videos} />
    </Section>
  );
}
