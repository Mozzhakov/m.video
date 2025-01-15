"use client";
import React, { useState } from "react";
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import MobileMenuButton from "@/app/components/mobile-menu-button";
import Link from "next/link";

export type PageHeaderProps = object;

export default function PageHeader({}: PageHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen); // Функция для изменения состояния
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="fixed top-0 left-0 z-40 w-full shadow-md bg-white border-gray-200">
      <nav className=" px-4 lg:px-10 py-2.5 dark:bg-gray-800 h-full mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo />
          <div className="flex items-center lg:order-2">
            <MobileMenuButton isOpen={isOpen} onToggleMenu={toggleMenu} />
            <Link
              href="#contacts"
              className="rounded-lg py-2 px-6 bg-cyan-400 text-white transition shadow hover:scale-105 hidden lg:block"
            >
              Contact me
            </Link>
          </div>

          <NavLinks isOpen={isOpen} onCloseMenu={closeMenu} />
        </div>
      </nav>
    </header>
  );
}
