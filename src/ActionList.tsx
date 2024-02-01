import { Dispatch, SetStateAction, MouseEventHandler, ReactNode } from "react";

interface Props {
  actions: { action: ReactNode; path: string }[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  //   borderColor: string;
  //   type: "subject" | "style" | "action";
}

const ActionList = ({ actions, selected, setSelected }: Props) => {
  const handleClickImg: MouseEventHandler<HTMLImageElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLImageElement;
    setSelected(target.id);
    // 딴거
  };

  return (
    <div
      className={`"relative flex flex-col h-[1200px] pt-4"
      } ${actions.length === 6 ? "justify-between" : "justify-evenly"}`}
    >
      {actions.map(action => (
        <div
          className={`w-[200px] min-h-[180px] text-center justify-center flex flex-col my-2 hover:scale-105 cursor-pointer whitespace-pre-wrap text-2xl italic ${
            selected === action.path
              ? "scale-105 opacity-100"
              : "opacity-50 hover:opacity-90"
          }`}
          key={action.path}
          id={action.path}
          onClick={handleClickImg}
        >
          {action.action}
        </div>
      ))}
    </div>
  );
};

export default ActionList;
