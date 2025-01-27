"use client";

import React, { useEffect } from "react";
import { useModal } from "@/app/components/modal-context";
import ContactForm from "@/app/components/contact-form";
import { RxCross2 } from "react-icons/rx";

export type ModalWindowProps = object;

export default function ModalWindow({}: ModalWindowProps) {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      className="w-screen h-screen z-50 bg-gray-500 bg-opacity-50 fixed top-0 left-0 flex items-center justify-center px-5"
      onClick={closeModal}
    >
      <div
        className="w-fit h-fit bg-white rounded-lg p-4 relative"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 p-1 rounded-full flex justify-center items-center hover:bg-gray-100 text-gray-600 hover:text-cyan-400 transition"
        >
          <RxCross2 className="w-5 h-5" />
        </button>

        <ContactForm />
      </div>
    </div>
  );
}
