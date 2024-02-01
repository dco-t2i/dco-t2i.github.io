import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ImageModal from "./ImageModal";

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
        className="flex justify-center items-center relative pt-10px"
        style={{ backgroundColor: backgroundColor }}
      >
        <SimpleImageSlider
          width={1000}
          height={500}
          images={images}
          showBullets={images.length > 1}
          showNavs={images.length > 1}
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
