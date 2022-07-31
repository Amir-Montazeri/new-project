import { Box } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./secondSallingItemsStyles";
import sampleItems from "./sampleItems.json";

const config = {
    sliderWithRadius: false,
    sliderHeight: "250px !important",
  },
  swiperConfig = {
    navigation: false,
  };

const SecondSallingItems = () => {
  const renderedItems = (items) =>
    items.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
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
    <Box sx={containerStyles}>
      <Slider {...config} swiperConfig={swiperConfig} autoSildesPerView>
        {renderedItems(sampleItems)}
      </Slider>
    </Box>
  );
};

export default SecondSallingItems;
