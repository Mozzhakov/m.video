import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export type SocialsProps = object;

export default function Socials({}: SocialsProps) {
  return (
    <ul className="flex items-center lg:gap-3 gap-1">
      <li>
        <Link
          href="/"
          className="lg:w-12 lg:h-12 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 group transition"
        >
          <FaInstagram className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition" />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="lg:w-12 lg:h-12 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 group transition"
        >
          <FaTiktok className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition" />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="lg:w-12 lg:h-12 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 group transition"
        >
          <FaFacebookF className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition" />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="lg:w-12 lg:h-12 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 group transition"
        >
          <FaLinkedinIn className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition" />
        </Link>
      </li>
    </ul>
  );
}
