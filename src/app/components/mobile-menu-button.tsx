"use client";
import React from "react";

export type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggleMenu: () => void;
};

export default function MobileMenuButton({
  isOpen,
  onToggleMenu,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onToggleMenu}
      className="lg:hidden flex items-center p-2 rounded-md text-gray-500 hover:text-cyan-400 hover:bg-gray-100 focus:outline-none"
      aria-label="Toggle navigation"
    >
      {isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
}
