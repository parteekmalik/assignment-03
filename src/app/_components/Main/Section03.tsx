import MainComponetForWidth from "../MainComponetForWidth";

const Section03Data = [
  {
    iconurl: "/svg/1-1.svg",
    title: "Clarified Vision & Target",
    discription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    iconurl: "/svg/2-1.svg",
    title: "High Performance",
    discription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    iconurl: "/svg/3-1.svg",
    title: "Maintain Security",
    discription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    iconurl: "/svg/4.svg",
    title: "Better Strategy & Quality",
    discription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
];

function Section03() {
  return (
    <MainComponetForWidth
      color="bg-white"
      className="flex flex-col gap-10 py-20"
    >
      <div className="flex flex-col items-center gap-10">
        <span className="text-[1.5rem] font-medium text-mainRed">
          WHY CHOOSE US
        </span>
        <span className="text-[2.8125rem] font-bold uppercase">
          Why We Are Best
        </span>
        <div className="flex w-full justify-between ">
          {Section03Data.map((data) => {
            return (
              <div key={data.title} className="">
                <img src={data.iconurl} />
                <span className="text-[1.25rem]">{data.title}</span>
                <p className="max-w-[16rem] text-wrap">{data.discription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </MainComponetForWidth>
  );
}

export default Section03;
