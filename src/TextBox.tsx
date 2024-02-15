import { MouseEventHandler, ReactNode } from "react";
import TopSvg from "./svgs/TopSvg";

interface Props {
  title: string | ReactNode;
  backgroundColor: string;
  textColor: string;
  children?: ReactNode;
  titleFontSize?: string;
  last?: boolean;
}

const TextBox = ({
  title,
  backgroundColor,
  textColor,
  titleFontSize,
  children,
  last
}: Props) => {
  const handleClickTop: MouseEventHandler<HTMLDivElement> = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="relative px-40 py-10 break-words"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`text-center font-semibold ${
          titleFontSize ? `${titleFontSize}` : "text-4xl"
        }`}
        style={{ color: textColor }}
      >
        {title}
      </div>
      {children && (
        <div
          className="text-justify text-xl pt-5 mx-auto w-[1050px]"
          style={{ color: textColor, textAlignLast: "center" }}
        >
          {children}
        </div>
      )}
      {last && (
        <div
          className="absolute rounded-lg top-1/2 right-5 h-10 flex flex-col justify-center items-center text-white text-sm cursor-pointer"
          onClick={handleClickTop}
        >
          <TopSvg />
          <div>TOP</div>
        </div>
      )}
    </div>
  );
};

export default TextBox;
