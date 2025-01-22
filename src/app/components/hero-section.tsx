import React from "react";
import SocialNetworks from "@/app/components/social-networks";
import styles from "./hero-section.module.css";

export type HeroSectionProps = object;

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section
      className={`flex flex-col lg:flex-row items-center lg:py-10 lg:px-10 justify-around px-4 py-6 ${styles.section}`}
      style={{ height: "calc(100vh - 71.09px)" }}
      id="home"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gray-600 lg:text-7xl text-4xl md:text-5xl mb-10 text-center">
            Yana Mozzhakova
          </h1>
          <p className="text-gray-600 lg:text-4xl text-2xl  md:text-3xl text-center mb-10 max-w-48 md:max-w-60 lg:max-w-none">
            Videographer & UGC creator
          </p>
          <SocialNetworks />
        </div>
      </div>
    </section>
  );
}
