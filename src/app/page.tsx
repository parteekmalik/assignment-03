"use client";

import { useState } from "react";
import Section06 from "./_components/Main/Section06";
import Section05 from "./_components/Main/Section05";
import Section02 from "./_components/Main/Section02";
import Section01 from "./_components/Main/Section01";
import Section04 from "./_components/Main/Section04";
import Section03 from "./_components/Main/Section03";
import Section07 from "./_components/Main/Section07";
import AddListing from "./_components/AddListing";

function MainContent() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <main
      className={` flex  min-h-screen flex-col items-center justify-center px-[3rem] pt-[0.5rem] 2xl:px-[0]  `}
    >
      <main className={`relative w-full ${isMenuOpen ? "hidden" : " "} `}>
        <Section01 setisMenuOpen={setisMenuOpen} />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
      </main>
      {isMenuOpen && <AddListing setisMenuOpen={setisMenuOpen} />}
    </main>
  );
}

export default MainContent;
