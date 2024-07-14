import { useState } from "react";
import MainComponetForWidth from "../MainComponetForWidth";

const Section04Data = [
  {
    ingUrl: "/images/image.png",
    title: "Genderless Kei – Japan’s Hot",

    discription:
      "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
  },
  {
    ingUrl: "/images/image-1.png",
    title: "Better Strategy & Quality",
    discription:
      "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
  },
  {
    ingUrl: "/images/image-2.png",
    title: "Genderless Kei – Japan’s Hot",
    discription:
      "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
  },
];

function Section04() {
  const [selected, setselected] = useState(0);
  return (
    <MainComponetForWidth
      color="bg-white"
      className="flex flex-col gap-10 py-20"
    >
      <div className="flex flex-col items-center gap-10">
        <span className="uppercasetext-mainRed text-[1.5rem] font-medium">
          our project
        </span>
        <span className="text-[2.8125rem] font-bold uppercase">
          Why We Are Best
        </span>
        <div className="flex gap-5">
          <img src={Section04Data[selected]!.ingUrl} alt="" />
          <div className="flex h-full flex-col">
            {Section04Data.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`flex grow flex-col gap-5 p-10 hover:cursor-pointer  ${i === selected ? "bg-mainRed text-white" : "bg-creamDark"} `}
                  onClick={() => setselected(i)}
                >
                  <span className="font-medium">{data.title}</span>
                  <p className="text-wrap">{data.discription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainComponetForWidth>
  );
}

export default Section04;
