import { Dispatch, SetStateAction, MouseEventHandler } from "react";

interface Props {
  images: { url: string }[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  borderColor: string;
  subject: boolean;
}

const ImageList = ({
  images,
  selected,
  setSelected,
  borderColor,
  subject,
}: Props) => {
  const handleClickImg: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLImageElement;
    setSelected(target.id);
  };

  return (
    <div
      className={`flex ${
        subject ? "w-[500px] pl-4" : "flex-col h-[500px] pt-4"
      } ${images.length === 4 ? "justify-between" : "justify-evenly"}`}
    >
      {images.map((image) => (
        <img
          className={`${
            subject ? "my-2" : "mx-2"
          } hover:scale-105 cursor-pointer border border-solid ${
            selected === image.url
              ? "scale-105 opacity-100"
              : "opacity-50 hover:opacity-90"
          }`}
          key={image.url}
          alt={image.url}
          src={image.url}
          width={100}
          height={100}
          style={
            selected === image.url
              ? { borderColor: "red" }
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
