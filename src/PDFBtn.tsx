import { MouseEventHandler } from "react";
import PDFSvg from "./svgs/PDFSvg";

interface Props {
  placeholder: string;
}

const PDFBtn = ({ placeholder }: Props) => {
  const handleClickArxiv: MouseEventHandler<HTMLButtonElement> = () => {
    // window.open("https://www.naver.com/");
    window.open("/pdf_file_name.pdf");
  };

  return (
    <button
      className="rounded-3xl flex items-center px-3 py-1 border border-solid border-gray-600 bg-gray-600 text-white mt-4 cursor-pointer"
      onClick={handleClickArxiv}
    >
      <PDFSvg />
      <div>{placeholder}</div>
    </button>
  );
};

export default PDFBtn;
