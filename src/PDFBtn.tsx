import { MouseEventHandler } from "react";
import PDFSvg from "./svgs/PDFSvg";

interface Props {
  placeholder: string;
}

const PDFBtn = ({ placeholder }: Props) => {
  const handleClickArxiv: MouseEventHandler<HTMLButtonElement> = () => {
    window.open("https://openreview.net/forum?id=VazkRbCGxt", "_blank");
  };

  return (
    <button
      className="rounded-3xl flex items-center px-3 py-1 border border-solid border-#0065a2 bg-#0065a2 text-white mt-4 cursor-pointer mr-3"
      onClick={handleClickArxiv}
    >
      <PDFSvg />
      <div>{placeholder}</div>
    </button>
  );
};

export default PDFBtn;
