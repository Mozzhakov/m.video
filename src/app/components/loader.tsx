import React from "react";
import { Puff } from "react-loader-spinner";

export type LoaderProps = object;

export default function Loader({}: LoaderProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Puff
        visible={true}
        height="40"
        width="40"
        color="#22d3ee"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
