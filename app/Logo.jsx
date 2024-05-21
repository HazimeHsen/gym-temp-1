import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="text-xl font-semibold underline">
      <Image src={"/logo.png"} width={90} height={70} alt="logo" />
    </div>
  );
};

export default Logo;
