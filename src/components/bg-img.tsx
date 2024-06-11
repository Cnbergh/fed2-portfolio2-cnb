'use client'
import Image from "next/image";

const BgImg = () => {
  return (
    <div className="w-full h-full fixed z-0">
      <Image 
        src='/background.jpg'
        alt="background image"
        layout="fill"
        objectFit='cover'
        priority
      />
    </div>
  );
};

export default BgImg;