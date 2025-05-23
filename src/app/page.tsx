"use client";
import React, { useEffect } from "react";
// import PageHeader from "@/app/components/page-header";
import HeroSection from "@/app/components/hero-section";
import AboutMe from "@/app/components/about-me";
import Contacts from "@/app/components/contacts";
import Ugc from "@/app/components/ugc";
import Videography from "@/app/components/videography";
import beautyVideos from "../../lib/beauty.json";
import foodVideos from "../../lib/food.json";
import portraitVideos from "../../lib/portrait.json";
import sportVideos from "../../lib/sports.json";
import ugcVideos from "../../lib/ugc.json";
import vlogVideos from "../../lib/vlogs.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalWindow from "@/app/components/modal-window";
import { useModal } from "./components/modal-context";

export interface VideoData {
  id: string;
  name: string;
  url: string;
  description: string;
  poster?: string;
}

export default function Home() {
  const { isModalOpen } = useModal();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <main className="pt-[72px]">
      <HeroSection />
      <div>
        <AboutMe isEven={false} />
        <Videography
          isEven={true}
          sport_videos={sportVideos}
          beauty_videos={beautyVideos}
          vlog_videos={vlogVideos}
          portrait_videos={portraitVideos}
          food_videos={foodVideos}
        />
        <Ugc isEven={false} videos={ugcVideos} />
        <Contacts isEven={true} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeButton={true}
        draggable
        theme="colored"
      />
      {isModalOpen && <ModalWindow />}
    </main>
  );
}
