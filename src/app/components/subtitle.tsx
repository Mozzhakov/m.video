import React from "react";

export interface SubtitleProps {
  children?: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="font-semibold text-gray-600 text-4xl text-center mt-12 mb-8">
      {children}
    </h2>
  );
}
