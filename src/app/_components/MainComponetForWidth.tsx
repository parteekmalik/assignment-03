import type { ReactNode } from "react";
export const PageWidthMain = " w-full max-w-[1170px] mx-auto   ";

function MainComponetForWidth({
  children,
  color = " bg-cream ",
  className = " ",
  margin = "my-10",
}: {
  margin?: string;
  color?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={` flex w-full  justify-center ${color} `}>
      <div className={` ${PageWidthMain} ${className} ${margin}`}>
        {children}
      </div>
    </div>
  );
}

export default MainComponetForWidth;
