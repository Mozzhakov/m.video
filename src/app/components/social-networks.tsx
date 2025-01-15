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
    <ul className="flex items-center lg:gap-3 gap-1">
      <li>
        <SnLink href="/">
          <FaInstagram className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
      <li>
        <SnLink href="/">
          <FaTiktok className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
      <li>
        <SnLink href="/">
          <FaFacebookF className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
      <li>
        <SnLink href="/">
          <FaLinkedinIn className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-white transition" />
        </SnLink>
      </li>
    </ul>
  );
}
