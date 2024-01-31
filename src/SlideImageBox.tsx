import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ImageModal from "./ImageModal";
import LeftArrowSvg from "./svgs/LeftArrowSvg";
import RightArrowSvg from "./svgs/RightArrowSvg";

interface Props {
  images: { url: string }[];
  backgroundColor: string;
}

const SlideImageBox = ({ images, backgroundColor }: Props) => {
  const [open, setOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState<number | undefined>();

  const handleClickImage = (
    idx: number,
    event: React.SyntheticEvent<Element, Event>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setOpen(true);
    setImageIdx(idx);
  };

  return (
    <>
      <div
        className="flex justify-center items-center relative"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="absolute top-[1/2-29px] -left-38px bg-gray z-10 w-[38px] h-[58px] cursor-pointer flex flex-col justify-center items-center rounded-l-md">
          <LeftArrowSvg />
        </div>
        <div className="absolute top-[1/2-29px] -right-38px bg-gray z-10 w-[58px] h-[58px] cursor-pointer flex flex-col justify-center items-center rounded-r-md">
          <RightArrowSvg />
        </div>
        <SimpleImageSlider
          width={1000}
          height={500}
          images={images}
          showBullets={false}
          showNavs={false}
          onClick={handleClickImage}
          autoPlay={true}
          autoPlayDelay={3}
          bgColor="white"
        />
      </div>
      {open && <ImageModal imgUrl={images[imageIdx!].url} setOpen={setOpen} />}
    </>
  );
};
export default SlideImageBox;
