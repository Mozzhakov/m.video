import React from "react";

type RadioButtonsProps = {
  selectedMedia: string;
  onChange: (value: string) => void;
};

export default function RadioButtons({
  selectedMedia,
  onChange,
}: RadioButtonsProps) {
  return (
    <div className="mb-8 w-fit mx-auto ">
      <div className="flex items-center space-x-4 p-2 border rounded-lg shadow-sm">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="media"
            value="videos"
            checked={selectedMedia === "videos"}
            onChange={() => onChange("videos")}
            className="hidden"
          />
          <span
            className={`cursor-pointer rounded-full px-3 py-1 ${
              selectedMedia === "videos"
                ? "font-bold text-cyan-400"
                : "text-gray-600"
            }`}
          >
            Videos
          </span>
        </label>
        <span className="text-gray-300">|</span>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="media"
            value="photos"
            checked={selectedMedia === "photos"}
            onChange={() => onChange("photos")}
            className="hidden"
          />
          <span
            className={`cursor-pointer rounded-full px-3 py-1 ${
              selectedMedia === "photos"
                ? "font-bold text-cyan-400"
                : "text-gray-600"
            }`}
          >
            Photos
          </span>
        </label>
      </div>
    </div>
  );
}
