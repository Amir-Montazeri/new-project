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
import { fetchMainPage } from "store/actions";
import { connect } from "react-redux";
import { base_api_url } from "api";
import { Link } from "react-router-dom";

const config = {
    sliderWithRadius: false,
    swiperClassNames: "make-space",
  },
  swiperConfig = {
    navigation: false,
  };

const SuggestedItems = ({ mainPage, fetchMainPage }) => {
  const [refSizes, setRefSizes] = useState({
    sliderSize: null,
    slideSize: null,
  });
  const sliderRef = createRef();
  const slideRef = createRef();

  useEffect(() => {
    if (!mainPage) {
      fetchMainPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    typeof sliderRef.current.clientWidth === "number" &&
      refSizes.sliderSize !== sliderRef.current.clientWidth &&
      setRefSizes((prevState) => ({
        ...prevState,
        sliderSize: sliderRef.current.clientWidth,
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef]);

  useEffect(() => {
    typeof slideRef.current?.clientWidth === "number" &&
      refSizes.slideSize !== slideRef.current.clientWidth &&
      setRefSizes((prevState) => ({
        ...prevState,
        slideSize: slideRef.current.clientWidth,
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideRef]);

  const renderedSlides = () =>
    mainPage?.special_offer?.map((item) => (
      <SwiperSlide
        key={item.id}
        ref={slideRef}
        className="edited-slider slides-with-radius cursor-pointer userselect-none"
        style={{ borderRadius: "9px" }}
      >
        <Link to={`/product/${item.id}`} style={{ height: "100%" }}>
          <ItemDramatic
            title={item.name}
            // title={"ممد شیره‌ای"}
            desc={
              item.for_us ? "موجود در انبار پلاست اب" : "موجود در انبار فروشنده"
            }
            bannerUrl={base_api_url + item.image1}
            minPrice={item.price}
          />
        </Link>
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
            {renderedSlides()}
            <SwiperSlide className="transparentb-bg cursor-pointer userselect-none">
              <img
                src="./assets/main-backgrounds/offer-banner.jpg"
                alt="offer-banner"
                height="100%"
              />
            </SwiperSlide>
            {/* {renderedSlides(sampleItems)} */}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  mainPage: state.mainPage,
});

export default connect(mapStateToProps, { fetchMainPage })(SuggestedItems);
