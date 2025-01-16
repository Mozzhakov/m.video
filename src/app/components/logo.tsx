import React from "react";
import Image from "next/image";
import Link from "next/link";

export type LogoProps = object;

export default function Logo({}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/logo.webp" alt="Logo" width={120} height={80} />
    </Link>
  );
}
