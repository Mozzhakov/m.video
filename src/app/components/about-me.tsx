import React from "react";
import Section from "@/app/components/section";
import Title from "@/app/components/title";
import Image from "next/image";

export type AboutMeProps = {
  isEven: boolean;
};

export default function AboutMe({ isEven }: AboutMeProps) {
  return (
    <Section isEven={isEven} id={"about-me"}>
      <Title>About me</Title>
      <div
        className="flex flex-col lg:flex-row gap-4 items-center lg:justify-between"
        data-aos="fade-left"
      >
        <div className="lg:max-w-[50%]">
          <p className="font-medium text-gray-600 mb-3 lg:text-2xl text-xl">
            Hello from Yana, a videographer based in Texas, originally from
            Ukraine.
          </p>
          <p className=" text-gray-600 mb-3 text-lg">
            I create emotional and eye-catching videos that help people and
            brands tell their stories. I work with businesses to promote their
            services on social media, capture unforgettable moments at events,
            and create beautiful portrait-style videos. My projects include
            brand promotion, lifestyle shoots, interior and product videos, and
            emotional storytelling for personal or professional use.
          </p>
          <p className=" text-gray-600 mb-3 text-lg">
            I believe that every video should spark connection—and that’s
            exactly what I aim to do through my work.
          </p>
          <p className="font-bold mb-3 text-gray-600 text-lg">
            What do I specialize in?
          </p>
          <ul className="list-disc pl-3.5 text-gray-600 text-lg">
            <li>Brand promotion and visual storytelling</li>
            <li>Interior, decor, and product videos</li>
            <li>Beauty and wellness content</li>
            <li>Event coverage and special moments</li>
            <li>Portrait videography and lifestyle clips</li>
          </ul>
        </div>
        <div className="hidden h-[525px] w-0.5 bg-gray-600 rounded lg:block"></div>
        <Image
          src="/images/image-1.webp"
          alt={`my photo`}
          height={450}
          width={350}
          className="rounded"
        />
      </div>
    </Section>
  );
}
