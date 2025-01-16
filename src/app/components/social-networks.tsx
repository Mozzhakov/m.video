import React from "react";
// import Link from "next/link";
import SnLink from "@/app/components/sn-link";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export type SocialNetworksProps = object;

export default function SocialNetworks({}: SocialNetworksProps) {
  return (
    <ul className="flex items-center lg:gap-3 gap-2">
      <li>
        <SnLink href="https://www.instagram.com/mozzhakova_/">
          <FaInstagram className="lg:w-7 lg:h-7 w-6 h-6 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
      <li>
        <SnLink href="https://www.tiktok.com/@mozzhakova__">
          <FaTiktok className="lg:w-7 lg:h-7 w-6 h-6 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
      <li>
        <SnLink href="https://www.facebook.com/yana.orehova.9">
          <FaFacebookF className="lg:w-7 lg:h-7 w-6 h-6 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
      <li>
        <SnLink href="https://www.linkedin.com/in/yana-mozzhakova-ba8415345/">
          <FaLinkedinIn className="lg:w-7 lg:h-7 w-6 h-6 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
    </ul>
  );
}
