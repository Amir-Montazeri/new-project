import "./slider.css";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "components/items-slider/Slider";
import { SwiperSlide } from "swiper/react";
import {
  containerStyles,
  titleStyles,
  offersContainer,
  slidesContainerStyles,
} from "./suggestedItemsStyles";
import sampleItems from "./sampleItems.json";
import ItemDramatic from "components/item-dramatic";
import { createRef, useEffect, useState } from "react";

const config = {
    sliderWithRadius: false,
    swiperClassNames: "make-space",
  },
  swiperConfig = {
    navigation: false,
  };

const SuggestedItems = () => {
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

  const renderedSlides = (items) =>
    items.map((item) => (
      <SwiperSlide
        key={item.id}
        ref={slideRef}
        className="edited-slider slides-with-radius cursor-pointer userselect-none"
        style={{ borderRadius: "9px" }}
      >
        <ItemDramatic
          title={item.title}
          desc={item.desc}
          bannerUrl={item.iconUrl}
          minPrice={item.minPrice}
        />
      </SwiperSlide>
    ));

  return (
    <Box sx={containerStyles}>
      <Typography
        variant="h5"
        component="h2"
        sx={titleStyles}
        className="sepahbod-font"
      >
        پیشنهاد ویژه
      </Typography>
      <Grid container sx={offersContainer}>
        <Grid item ref={sliderRef} component="div" sx={slidesContainerStyles}>
          <Slider {...config} swiperConfig={swiperConfig} {...refSizes}>
            {renderedSlides(sampleItems)}
            <SwiperSlide className="transparentb-bg cursor-pointer userselect-none">
              <img
                src="./assets/main-backgrounds/offer-banner.jpg"
                alt="offer-banner"
                height="100%"
              />
            </SwiperSlide>
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuggestedItems;
