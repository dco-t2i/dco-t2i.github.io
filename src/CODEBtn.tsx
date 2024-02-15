import { MouseEventHandler } from "react";
import CODESvg from "./svgs/CODESvg";

interface Props {
  placeholder: string;
}

const CODEBtn = ({ placeholder }: Props) => {
  const handleClickGithub: MouseEventHandler<HTMLButtonElement> = () => {
    // window.open("", "_blank");
  };

  return (
    <button
      className="rounded-3xl flex items-center px-3 py-1 border border-solid border-gray-500 bg-gray-500 text-white mt-4 cursor-pointer ml-3"
      onClick={handleClickGithub}
    >
      <CODESvg />
      <div>{placeholder}</div>
    </button>
  );
};

export default CODEBtn;
