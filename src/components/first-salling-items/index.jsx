import { Box } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./firstSallingItemsStyles";
import sampleItems from "./sampleItems.json";

const config = {
    sliderWithRadius: false,
    sliderHeight: "250px",
    slidesPerViewInXl: 4.65,
    slidesPerViewIn2lg: 3.85,
    slidesPerViewInLg: 3,
    slidesPerViewInSm: 2,
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
  const renderedItems = (items) =>
    items.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
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
    <Box sx={containerStyles}>
      <Slider {...config} swiperConfig={swiperConfig}>
        {renderedItems(sampleItems)}
      </Slider>
    </Box>
  );
};

export default FirstSallingItems;
