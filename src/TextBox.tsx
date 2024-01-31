import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  backgroundColor: string;
  textColor: string;
  children?: ReactNode;
}

const TextBox = ({ title, backgroundColor, textColor, children }: Props) => (
  <div
    className="px-40 py-6 break-words"
    style={{ backgroundColor: backgroundColor }}
  >
    <div
      className="text-center font-semibold text-4xl pt-8"
      style={{ color: textColor }}
    >
      {title}
    </div>
    <div
      className="text-justify text-xl pt-8 pb-8 mx-auto w-[1000px]"
      style={{ color: textColor }}
    >
      {children}
    </div>
  </div>
);

export default TextBox;
