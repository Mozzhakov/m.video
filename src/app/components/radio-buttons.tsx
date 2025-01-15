// "use client";
//
// import * as React from "react";
//
// // RadioGroup Component
// const RadioGroup = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, children, ...props }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={`grid gap-2 ${className || ""}`} // Условное добавление дополнительных классов
//       {...props}
//     >
//       {children}
//     </div>
//   );
// });
// RadioGroup.displayName = "RadioGroup";
//
// // RadioGroupItem Component
// const RadioGroupItem = React.forwardRef<
//   HTMLInputElement,
//   React.InputHTMLAttributes<HTMLInputElement>
// >(({ className, children, ...props }, ref) => {
//   return (
//     <label
//       className={`flex items-center space-x-2 text-sm cursor-pointer ${
//         className || ""
//       }`}
//     >
//       <input
//         ref={ref}
//         type="radio"
//         className={`h-4 w-4 rounded-full border border-primary ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
//           className || ""
//         }`}
//         {...props}
//       />
//       {children && <span>{children}</span>}
//     </label>
//   );
// });
// RadioGroupItem.displayName = "RadioGroupItem";
//
// // Export Components
// export { RadioGroup, RadioGroupItem };
"use client";

import React, { useState } from "react";

export default function RadioGroupExample() {
  const [selected, setSelected] = useState("photos");

  return (
    <div className="flex items-center space-x-4 p-2 border rounded-lg shadow-sm">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="media"
          value="photos"
          checked={selected === "photos"}
          onChange={() => setSelected("photos")}
          className="hidden"
        />
        <span
          className={`cursor-pointer rounded-full px-3 py-1 ${
            selected === "photos" ? "font-bold text-black" : "text-gray-500"
          }`}
        >
          Photos
        </span>
      </label>
      <span className="text-gray-300">|</span>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="media"
          value="videos"
          checked={selected === "videos"}
          onChange={() => setSelected("videos")}
          className="hidden"
        />
        <span
          className={`cursor-pointer rounded-full px-3 py-1 ${
            selected === "videos" ? "font-bold text-black" : "text-gray-500"
          }`}
        >
          Videos
        </span>
      </label>
    </div>
  );
}
