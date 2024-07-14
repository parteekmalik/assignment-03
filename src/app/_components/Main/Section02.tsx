import { useState } from "react";
import MainComponetForWidth from "../MainComponetForWidth";

export const OImagesData = ["/images/1.png", "/images/2.png", "/images/3.png"];

function rotateImages(index: number) {
  const rotatedImages = [
    ...OImagesData.slice(index),
    ...OImagesData.slice(0, index),
  ];
  return rotatedImages;
}
function Section02() {
  const [ImagesData, setImagesData] = useState({
    images: rotateImages(0),
    imgNo: 0,
  });

  return (
    <MainComponetForWidth className="flex flex-col gap-10 py-20">
      <div className="flex flex-col gap-10">
        <span className="text-[1.5rem] font-medium text-mainRed">
          WHAT WE DO
        </span>
        <div className="flex items-center justify-between">
          <span className="text-[2.8125rem] font-bold uppercase">
            Services provide <br />
            for you
          </span>
          <span className="max-w-[36.5rem]">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </span>
        </div>
      </div>
      <div className="flex justify-between    ">
        {ImagesData.images.map((url) => {
          return (
            <div className="group relative" key={url}>
              <img src={url} />
              <div
                className={`absolute top-0 hidden h-full w-full flex-col items-center justify-center gap-5 bg-mainRed  text-center  text-white group-hover:flex`}
              >
                <img src="/svg/icon.svg" />
                <span className="text-[1.5rem]">WEB DEVELOPMENT</span>
                <span>
                  Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                  Pellentesque
                </span>
                <button
                  onClick={() => window.open("https://fylehq.com", "_blank")}
                  className="mt-5 flex max-w-fit items-center gap-2 bg-white px-4 py-2 text-mainRed  "
                >
                  <span className="text-[0.875rem]">READ MORE</span>
                  <img src="/svg/arrow.svg" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center">
        {ImagesData.images.map((_, i) => {
          return (
            <div
              onClick={() =>
                setImagesData({ images: rotateImages(i), imgNo: i })
              }
              key={i}
            >
              <img src={i === ImagesData.imgNo ? "/svg/1.svg" : "/svg/2.svg"} />
            </div>
          );
        })}
      </div>
    </MainComponetForWidth>
  );
}

export default Section02;
