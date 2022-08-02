import { Box } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./secondSallingItemsStyles";
import sampleItems from "./sampleItems.json";
import { connect } from "react-redux";
import { base_api_url } from "api";
import { Link } from "react-router-dom";

const config = {
    sliderWithRadius: false,
    sliderHeight: "250px !important",
  },
  swiperConfig = {
    navigation: false,
  };

const SecondSallingItems = ({ items }) => {
  const renderedItems = (items) =>
    items?.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
          style={{ background: "#fff" }}
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
  items: state.mainPage?.row2,
});

export default connect(mapStateToProps)(SecondSallingItems);
