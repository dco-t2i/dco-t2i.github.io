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
      className={`relative flex w-[700px] pl-4 ${
        actions.length === 6 ? "justify-between" : "justify-evenly"
      }`}
    >
      <div className="absolute top-1/3 -left-[45px] text-center h-10">
        Select <br /> Action
      </div>
      {actions.map(action => (
        <div
          className={`w-[100px] h-[100px] text-center justify-center flex flex-col my-2 hover:scale-105 cursor-pointer whitespace-pre-wrap text-lg italic ${
            selected === action.path
              ? "scale-105 opacity-100"
              : "opacity-50 hover:opacity-90"
          }`}
          key={action.path}
          //   width={100}
          //   height={100}
          id={action.path}
          onClick={handleClickImg}
        >
          {action.action}
          {/* ...Ride a<br />
          bike ... */}
        </div>
      ))}
    </div>
  );
};

export default ActionList;
