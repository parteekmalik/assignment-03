import MainComponetForWidth from "../MainComponetForWidth";

const Section05Data = [
  { iconurl: "/svg/heart.svg", name: "Staticfied Customers", score: "199 +" },
  { iconurl: "/svg/clock.svg", name: "Days Of Operation", score: "1591 +" },
  { iconurl: "/svg/Path 4402.svg", name: "Complete Project", score: "283 +" },
  { iconurl: "/svg/Path 4406.svg", name: "Win Awards", score: "75 +" },
];

const boxShadow = "";

const Section05 = () => {
  return (
    <MainComponetForWidth className="flex flex-col gap-10 py-20">
      <div className="flex flex-col items-center gap-10">
        <span className="uppercasetext-mainRed text-[1.5rem] font-medium">
          our project
        </span>
        <span className="text-[2.8125rem] font-bold uppercase">
          Why We Are Best
        </span>
        <div className="flex w-full justify-between ">
          {Section05Data.map((data) => {
            return (
              <div
                className={`hover:shadow-custom flex w-[16.875rem] flex-col items-center bg-white p-5`}
                key={data.name}
              >
                <img className="max-h-[40px] max-w-[40px]" src={data.iconurl} />
                <span className="text-[3.75rem] font-light">{data.score}</span>
                <span className="text-[1.25rem] font-light">{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </MainComponetForWidth>
  );
};

export default Section05;
