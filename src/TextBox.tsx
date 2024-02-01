import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  backgroundColor: string;
  textColor: string;
  children?: ReactNode;
  titleFontSize?: string;
}

const TextBox = ({
  title,
  backgroundColor,
  textColor,
  titleFontSize = "4xl",
  children
}: Props) => (
  <div
    className="px-40 py-10 break-words"
    style={{ backgroundColor: backgroundColor }}
  >
    <div
      className={`text-center font-semibold text-${titleFontSize}`}
      style={{ color: textColor }}
    >
      {title}
    </div>
    {children && (
      <div
        className="text-justify text-xl pt-5 pb-5 mx-auto w-[1000px]"
        style={{ color: textColor }}
      >
        {children}
      </div>
    )}
  </div>
);

export default TextBox;
