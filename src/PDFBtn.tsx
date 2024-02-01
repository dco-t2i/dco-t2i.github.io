import { MouseEventHandler } from "react";

interface Props {
  placeholder: string;
}

const PDFBtn = ({ placeholder }: Props) => {
  const handleClickArxiv: MouseEventHandler<HTMLButtonElement> = () => {
    window.open("https://www.naver.com/");
  };

  return (
    <button
      className="rounded-xl flex items-center px-3 py-1 border border-solid border-gray-400 bg-white mt-4 cursor-pointer"
      onClick={handleClickArxiv}
    >
      <img src={"./pdf.png"} className="max-w-[30px]" />
      <div>{placeholder}</div>
    </button>
  );
};

export default PDFBtn;
