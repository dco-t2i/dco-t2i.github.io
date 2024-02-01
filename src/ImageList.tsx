import { Dispatch, SetStateAction, MouseEventHandler } from "react";

interface Props {
  images: { url: string }[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  borderColor: string;
  type: "subject" | "style" | "action";
}

const ImageList = ({
  images,
  selected,
  setSelected,
  borderColor,
  type
}: Props) => {
  const handleClickImg: MouseEventHandler<HTMLImageElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLImageElement;
    setSelected(target.id);
  };

  return (
    <div
      className={`relative flex w-[1000px] pl-4 ${
        images.length === 6 ? "justify-between" : "justify-evenly"
      }`}
      // className={`flex ${
      //   subject ? "w-[700px] pl-4" : "flex-col h-[700px] pt-4"
      // } ${images.length === 6 ? "justify-between" : "justify-evenly"}`}
    >
      <div className="absolute top-[90px] -left-[100px] text-right w-24 h-10 text-3xl">
        {type}
      </div>
      {images.map(image => (
        <img
          className={`my-2 hover:scale-105 cursor-pointer border-3 border-solid ${
            selected === image.url
              ? "scale-105 opacity-100"
              : "opacity-50 hover:opacity-90"
          }`}
          // className={`${
          //   subject ? "my-2" : "mx-2"
          // } hover:scale-105 cursor-pointer ${
          //   selected === image.url
          //     ? "scale-105 opacity-100"
          //     : "opacity-50 hover:opacity-90"
          // }`}
          key={image.url}
          alt={image.url}
          src={image.url}
          width={150}
          height={150}
          style={
            selected === image.url
              ? {
                  borderColor:
                    type === "subject"
                      ? "#34a853"
                      : type === "style"
                      ? "#ea4335"
                      : "#fbbc05"
                }
              : { borderColor: borderColor }
          }
          id={image.url}
          onClick={handleClickImg}
        />
      ))}
    </div>
  );
};

export default ImageList;
