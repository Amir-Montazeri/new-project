import { Grid } from "@mui/material";
import { containerStyles, itemsStyles } from "./secondBannerStyles";

const ThirdBanner = () => {
  return (
    <Grid container flexWrap="nowrap" sx={containerStyles}>
      <Grid item sx={itemsStyles}>
        <img
          width="100%"
          src="./assets/main-backgrounds/second-banner-left.jpg"
          alt="banner"
        />
      </Grid>
      <Grid item sx={itemsStyles}>
        <img
          width="100%"
          src="./assets/main-backgrounds/second-banner-right.jpg"
          alt="banner"
        />
      </Grid>
    </Grid>
  );
};

export default ThirdBanner;
