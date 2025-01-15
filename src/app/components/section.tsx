import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  isEven: boolean;
  id: string;
}

export default function Section({ children, isEven, id }: SectionProps) {
  return (
    <section className={`${isEven ? "bg-neutral-50" : "bg-gray-100"}`} id={id}>
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:px-10 lg:py-12">
        {children}
      </div>
    </section>
  );
}
