import Image from "next/image";
import React from "react";
import Logo from "./Logo";

export default function PageLoading() {
  return (
    <div className="flex-col h-screen w-screen relative gap-4 flex items-center justify-center">
      <div className="w-20 h-20 border-8 text-accent text-4xl animate-spin border-gray-300 p-2 flex items-center justify-center border-t-black rounded-full"></div>
      <div className="animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2">
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
      </div>
    </div>
  );
}
