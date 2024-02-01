import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  images: { url: string }[];
  backgroundColor: string;
}

const SlideImageBox = ({ images, backgroundColor }: Props) => {
  return (
    <>
      <div
        className="flex justify-center items-center relative pt-10px"
        style={{ backgroundColor: backgroundColor }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map(image => (
            <SwiperSlide key={image.url}>
              <img loading="lazy" src={image.url} width={1500} height={770} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default SlideImageBox;
