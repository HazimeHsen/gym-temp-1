import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="absolute z-20 bg-black/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center w-screen h-screen bg-black/40">
        <Image alt="" width={100} height={100} src="/logo.png" />
      </div>
    </div>
  );
};

export default Loading;
