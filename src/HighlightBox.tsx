import { MouseEventHandler, useState } from "react";

interface Props {
  title?: string;
  textColor?: string;
  leftImage: { url: string };
  rightImage: { url: string };
  leftText: string;
  rightText: string;
  backgroundColor: string;
}
const HighlightBox = ({
  title,
  textColor,
  leftImage,
  rightImage,
  leftText,
  rightText,
  backgroundColor
}: Props) => {
  const [highlight, setHighlight] = useState(0);

  const handleEnter: MouseEventHandler<HTMLElement> = e => {
    const target = e.target as HTMLElement;
    setHighlight(Number(target.dataset.value));
  };

  const handleLeave: MouseEventHandler<HTMLElement> = () => setHighlight(0);

  return (
    <div
      className={`flex flex-col justify-center items-center px-40 py-6`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`font-semibold text-4xl ${title ? "px-5 pt-8" : ""}`}
        style={{ color: textColor }}
      >
        {title}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            loading="lazy"
            data-value={1}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`${
              new Set([0, 1]).has(highlight) ? "" : "opacity-15"
            } m-4`}
            alt={leftImage.url}
            src={leftImage.url}
            width={400}
            height={300}
          />
          <img
            loading="lazy"
            data-value={2}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`${
              new Set([0, 2]).has(highlight) ? "" : "opacity-15"
            } m-4`}
            alt={rightImage.url}
            src={rightImage.url}
            width={400}
            height={300}
          />
        </div>
        <div
          data-value={1}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`${
            new Set([0, 1]).has(highlight) ? "" : "opacity-15"
          } m-4`}
        >
          {leftText}
        </div>
        <div
          data-value={2}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`${
            new Set([0, 2]).has(highlight) ? "" : "opacity-15"
          } m-4`}
        >
          {rightText}
        </div>
      </div>
      {/* 
      <div className="flex justify-center items-center">
        <div
          data-value={1}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`${
            new Set([0, 1]).has(highlight) ? "" : "opacity-15"
          } m-4`}
        >
          1
        </div>
        <div
          data-value={2}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`${
            new Set([0, 2]).has(highlight) ? "" : "opacity-15"
          } m-4`}
        >
          2
        </div>
        <div
          data-value={1}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`${
            new Set([0, 1]).has(highlight) ? "" : "opacity-15"
          } m-4`}
        >
          3
        </div>
        <div
          data-value={2}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`${
            new Set([0, 2]).has(highlight) ? "" : "opacity-15"
          } m-4`}
        >
          4
        </div>
      </div> */}
    </div>
  );
};

export default HighlightBox;
