'use client'
import Image from "next/image";

const BgImg = () => {
 
  return (
    <div className=" w-dvw h-dvh z-0 fixed">
      <Image 
      src='/background.jpg'
      alt="background image"
      className="dark:invert"
      layout="fill"
      objectFit='cover'
      priority
      />
    </div>
  );
};

export default BgImg;