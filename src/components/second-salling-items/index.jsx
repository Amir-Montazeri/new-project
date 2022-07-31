import { Box } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./secondSallingItemsStyles";
import sampleItems from "./sampleItems.json";
import { createRef, useEffect, useState } from "react";

const config = {
    sliderWithRadius: false,
    sliderHeight: "250px !important",
  },
  swiperConfig = {
    navigation: false,
  };

const SecondSallingItems = () => {
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
          style={{ background: "#fff" }}
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

export default SecondSallingItems;
