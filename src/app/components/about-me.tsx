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
            Hello from Yana, the videographer and UGC creator. Originally from
            Ukraine, now live in Texas.
          </p>
          <p className=" text-gray-600 mb-3 text-lg">
            My journey into content creation began with a passion for crafting
            vibrant and emotional videos. I’ve worked on a variety of projects,
            ranging from family and sports shoots to content for beauty salons,
            home goods, product shoots, and lifestyle storytelling. Now, I aim
            to use my experience and creativity to help brands connect with
            their audience.
          </p>
          <p className="font-bold mb-3 text-gray-600 text-lg">
            What do I specialize in?
          </p>
          <ul className="list-disc pl-3.5 text-gray-600 text-lg">
            <li>Family values, inspiration, and lifestyle content</li>
            <li>Home goods, decor, and interior design</li>
            <li>Beauty and self-care</li>
            <li>Sports and active lifestyles</li>
            <li>Everyday life, travel, and authentic emotions</li>
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
