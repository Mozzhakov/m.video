import React from "react";

export interface TitleProps {
  children?: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <div data-aos="fade-right">
      <h1 className="text-cyan-400 font-bold text-5xl lg:text-6xl mb-6">
        {children}
      </h1>
    </div>
  );
}
