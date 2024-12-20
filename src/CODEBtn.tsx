import { MouseEventHandler } from "react";
import CODESvg from "./svgs/CODESvg";

interface Props {
  placeholder: string;
}

const CODEBtn = ({ placeholder }: Props) => {
  const handleClickGithub: MouseEventHandler<HTMLButtonElement> = () => {
    window.open("https://github.com/kyungmnlee/dco", "_blank");
  };

  return (
    <button
      className="rounded-3xl flex items-center px-3 py-1 border border-solid border-#0065a2 bg-#0065a2 text-white mt-4 cursor-pointer ml-3"
      onClick={handleClickGithub}
    >
      <CODESvg />
      <div>{placeholder}</div>
    </button>
  );
};

export default CODEBtn;
