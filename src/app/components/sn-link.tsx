import React from "react";
import Link from "next/link";

export interface SnLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SnLink({ href, children }: SnLinkProps) {
  return (
    <Link
      href={href}
      className="lg:w-12 lg:h-12 w-9 h-9 rounded-full flex items-center justify-center hover:bg-cyan-400 group transition"
    >
      {children}
    </Link>
  );
}
