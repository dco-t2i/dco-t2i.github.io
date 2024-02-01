import { useEffect, useState } from "react";
import ImageList from "./ImageList";

interface Props {
  title?: string;
  textColor?: string;
  subjectImages: { url: string }[];
  styleImages: { url: string }[];
  backgroundColor: string;
}

const parseUrl2Name = (url: string) => {
  return url.split("/")[2].split(".")[0];
};

const SubjectStyleImageBox = ({
  title,
  subjectImages,
  styleImages,
  backgroundColor,
  textColor
}: Props) => {
  const [subject, setSubject] = useState(subjectImages[0].url);
  const [style, setStyle] = useState(styleImages[0].url);
  // const [action, setAction] = useState(actions[0].path);

  const [composedImg, setComposedImg] = useState<string>(
    `/msms/${parseUrl2Name(subject)}/${parseUrl2Name(style)}.png`
    // `/msms/${parseUrl2Name(subject)}/${parseUrl2Name(style)}/${action}.png` 느낌
  );

  useEffect(() => {
    setComposedImg(
      `/msms/${parseUrl2Name(subject)}/${parseUrl2Name(style)}.png`
      // `/msms/${parseUrl2Name(subject)}/${parseUrl2Name(style)}/${action}.png` 느낌
    );
  }, [subject, style, styleImages, subjectImages]);

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
      <div className="flex flex-col m-0 px-28 py-14">
        {/* <div className="flex">
          <div className="mx-2 w-[106px]"></div>
          <div>
            <ImageList
              images={subjectImages}
              selected={subject}
              setSelected={setSubject}
              borderColor={backgroundColor}
              subject={true}
            />
          </div>
        </div> */}
        <div className="flex flex-col">
          <div>
            <ImageList
              images={subjectImages}
              selected={subject}
              setSelected={setSubject}
              borderColor={backgroundColor}
              type={"subject"}
            />
          </div>
          <div>
            <ImageList
              images={styleImages}
              selected={style}
              setSelected={setStyle}
              borderColor={backgroundColor}
              type={"style"}
            />
          </div>
          <div className="flex">
            <div className="pl-4">
              <img
                loading="lazy"
                alt={composedImg}
                src={composedImg}
                width={800}
                height={800}
              />
            </div>
            <div>
              {/* <ActionList
                actions={actions}
                selected={action}
                setSelected={setAction}
                // borderColor={backgroundColor}
                // type={"action"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectStyleImageBox;
