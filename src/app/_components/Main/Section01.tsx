import MainComponetForWidth, { PageWidthMain } from "../MainComponetForWidth";

function Section01({
  setisMenuOpen,
}: {
  setisMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => setisMenuOpen(true);

  return (
    <div className={PageWidthMain + " py-20"}>
      <div className="flex items-center justify-between">
        <div className="  flex flex-col gap-10 ">
          <span className="text-[1.875rem] text-mainRed">AWARD WINNING</span>
          <span className="text-[3.75rem]">
            DIGITAL MARKETING <br />
            AGENCY
          </span>
          <p className="max-w-[36.5rem] text-wrap">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <button
            className="max-w-[fit-content]  bg-mainRed px-6 py-3 text-[0.875rem] text-white"
            onClick={onClick}
          >
            CONTACT US
          </button>
        </div>
        <img src="/images/hero.png" />
      </div>
    </div>
  );
}

export default Section01;
