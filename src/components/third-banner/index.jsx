import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { containerStyles, itemsStyles } from "./secondBannerStyles";

const ThirdBanner = ({ images }) => {
  return (
    <Grid container flexWrap="nowrap" sx={containerStyles}>
      <Grid item sx={{ ...itemsStyles, marginRight: "5px" }}>
        <Link to={images?.url_of_row_4_poster_1 || ""}>
          <img width="100%" src={images?.row_4_poster_1 || ""} alt="banner" />
        </Link>
      </Grid>
      <Grid item sx={itemsStyles}>
        <Link to={images?.url_of_row_4_poster_2 || ""}>
          <img width="100%" src={images?.row_4_poster_2 || ""} alt="banner" />
        </Link>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  images: state.mainPage?.main_page_content,
});

export default connect(mapStateToProps)(ThirdBanner);
