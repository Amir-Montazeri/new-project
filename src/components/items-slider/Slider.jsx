import "swiper/css";
import "swiper/css/navigation";
import "./swiperEdited.css";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import { calSlidesPerView, getWindowSize } from "functions/sizes";

const config = {
  spaceBetween: 5,
  slidesPerView: 5,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  modules: [Autoplay],
};

const Slider = ({
  sliderSize,
  slideSize,
  swiperClassNames = "",
  sliderWithRadius = true,
  sliderHeight = "230px",
  sliderBg = "",
  swiperConfig = {},
  children,
}) => {
  const [windowSize, setWindowSize] = useState({ innerWidth: null });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log({ sliderSize, slideSize });
  return (
    <Swiper
      {...config}
      {...swiperConfig}
      modules={[...(swiperConfig.modules || []), ...config.modules]}
      slidesPerView={sliderSize / slideSize}
      className={
        !sliderWithRadius
          ? `swiper-without-radius ${swiperClassNames}`
          : swiperClassNames
      }
      style={{ height: sliderHeight, backgroundColor: sliderBg }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
