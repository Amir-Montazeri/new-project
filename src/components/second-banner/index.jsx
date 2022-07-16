import { Grid } from "@mui/material";
import { containerStyles, itemsStyles } from "./secondBannerStyles";

const SecondBanner = () => {
  return (
    <Grid container flexWrap="nowrap" sx={containerStyles}>
      <Grid item sx={itemsStyles}>
        <img
          width="100%"
          src="./assets/main-backgrounds/first-banner-left.png"
          alt="banner"
        />
      </Grid>
      <Grid item sx={itemsStyles}>
        <img
          width="100%"
          src="./assets/main-backgrounds/first-banner-right.png"
          alt="banner"
        />
      </Grid>
    </Grid>
  );
};

export default SecondBanner;
