import { Box } from "@mui/material";
import { base_api_url } from "api";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

const FirstSallingItems = ({ items }) => {
  console.log("items::: ", { items });
  const renderedItems = (items) =>
    items?.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
          style={{ background: "#fff", height: "240px", width: "240px" }}
          className="slides-with-radius mini-slider cursor-pointer userselect-none"
        >
          <Link
            to={`/product/${item.id}`}
            style={{ height: "100%", width: "100%" }}
          >
            <ItemDramatic
              bannerUrl={base_api_url + item.image1}
              title={item.name}
              desc={
                item.for_us
                  ? "موجود در انبار پلاست اب"
                  : "موجود در انبار فروشنده"
              }
              minPrice={item.minPrice || null}
              maxPrice={item.maxPrice || null}
            />
          </Link>
        </SwiperSlide>
      );
    });
  return (
    <Box sx={containerStyles}>
      <Slider {...config} swiperConfig={swiperConfig} autoSildesPerView>
        {renderedItems(items)}
      </Slider>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  items: state.mainPage?.row1,
});

export default connect(mapStateToProps)(FirstSallingItems);
