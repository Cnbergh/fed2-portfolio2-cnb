'use client';
import React from "react";
import CreditsTop from "./credits-top";

const Header = () => {

  return (
    <header className="absolute w-full bg-transparent top-0 left-0 z-20">
<CreditsTop/>
    </header>
  );
};

export default Header;