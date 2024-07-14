"use client";

import MainComponetForWidth from "../MainComponetForWidth";

function Section06() {
  return (
    <MainComponetForWidth
      color="bg-white"
      className="flex flex-col gap-10 py-20"
    >
      <div className="flex flex-col items-center gap-10">
        <span className="uppercasetext-mainRed text-[1.5rem] font-medium">
          {`client's feedback`}
        </span>
        <span className="text-[2.8125rem] font-bold uppercase">
          {`people say's about us !`}
        </span>
        <div className="relative flex max-w-[52rem] flex-col gap-10 text-[1.25rem] ">
          <img
            src="/svg/Quotemarks-left.svg"
            className="absolute left-0 top-0"
            style={{ transform: "translate(-1rem,-1rem)" }}
          />
          <span className="font-medium">
            Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s
            is reproduced below for those interested. Sections Bonorum et
            Malorum original.
          </span>
          <div>
            <span className="font-bold text-mainRed">JANNAT TUMPA</span>
            <span className="font-light text-lightText">
              - COO, AMERIMAR ENTERPRISES, INC.
            </span>
          </div>
        </div>
      </div>
    </MainComponetForWidth>
  );
}

export default Section06;
