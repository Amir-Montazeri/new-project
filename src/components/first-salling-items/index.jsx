import { Box, setRef } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { useState } from "react";
import { createRef, useEffect } from "react";
import { Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./firstSallingItemsStyles";
import sampleItems from "./sampleItems.json";

const config = {
    sliderWithRadius: false,
    sliderHeight: "250px",
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    modules: [Autoplay],
  },
  swiperConfig = {
    navigation: false,
  };

const FirstSallingItems = () => {
  const [refSizes, setRefSizes] = useState({
    sliderSize: null,
    slideSize: null,
  });
  const sliderRef = createRef();
  const slideRef = createRef();

  useEffect(() => {
    typeof sliderRef.current.clientWidth === "number" &&
      refSizes.sliderSize !== sliderRef.current.clientWidth &&
      setRefSizes((prevState) => ({
        ...prevState,
        sliderSize: sliderRef.current.clientWidth,
      }));
  }, [sliderRef]);

  useEffect(() => {
    typeof slideRef.current.clientWidth === "number" &&
      refSizes.slideSize !== slideRef.current.clientWidth &&
      setRefSizes((prevState) => ({
        ...prevState,
        slideSize: slideRef.current.clientWidth,
      }));
  }, [slideRef]);

  const renderedItems = (items) =>
    items.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
          ref={slideRef}
          style={{ background: "#fff", height: "240px", width: "240px" }}
          className="slides-with-radius mini-slider cursor-pointer userselect-none"
        >
          <ItemDramatic
            bannerUrl={item.iconUrl}
            title={item.title}
            desc={item.desc}
            minPrice={item.minPrice || null}
            maxPrice={item.maxPrice || null}
          />
        </SwiperSlide>
      );
    });
  return (
    <Box ref={sliderRef} sx={containerStyles}>
      <Slider {...config} swiperConfig={swiperConfig} {...refSizes}>
        {renderedItems(sampleItems)}
      </Slider>
    </Box>
  );
};

export default FirstSallingItems;
