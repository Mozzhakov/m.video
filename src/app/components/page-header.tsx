"use client";
import React, { useState } from "react";
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import MobileMenuButton from "@/app/components/mobile-menu-button";
import { usePathname } from "next/navigation";
import { useModal } from "@/app/components/modal-context";

export default function PageHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 z-40 w-full shadow-md bg-white border-gray-200">
      <nav className="px-4 lg:px-10 py-2.5 h-full mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo />
          <div className="flex items-center lg:order-2">
            <MobileMenuButton isOpen={isOpen} onToggleMenu={toggleMenu} />
            <button
              className="rounded-lg py-2 px-6 bg-cyan-400 text-white transition shadow hover:scale-105 hidden lg:block"
              onClick={openModal}
            >
              Contact me
            </button>
          </div>

          <NavLinks
            isOpen={isOpen}
            onCloseMenu={closeMenu}
            isHomePage={isHomePage}
            openModal={openModal}
          />
        </div>
      </nav>
    </header>
  );
}
