import { Box, Grid } from "@mui/material";
import { GrMore } from "react-icons/gr";
import {
  containerStyles,
  moreIconStyles,
  downloadsContainerStyles,
} from "./leftSectionstyles";

const LeftSection = () => {
  return (
    <Grid item sx={containerStyles}>
      <Box sx={moreIconStyles}>
        <GrMore color="#777" />
      </Box>
      <Grid container sx={downloadsContainerStyles}>
        <Grid item>
          <img
            src="./assets/main-backgrounds/get-from-googleplay.png"
            alt="get-from-googleplay"
            height="100%"
          />
        </Grid>
        <Grid item>
          <img
            src="./assets/main-backgrounds/get-from-appstore.png"
            alt="get-from-appstore"
            height="100%"
          />
        </Grid>
        <Grid item>
          <img
            src="./assets/main-backgrounds/get-from-bazaar.png"
            alt="get-from-bazaar"
            height="100%"
          />
        </Grid>
        <Grid item>
          <img
            src="./assets/main-backgrounds/get-from-myket.png"
            alt="get-from-mykey"
            height="100%"
          />
        </Grid>
        <Grid item>
          <img
            src="./assets/main-backgrounds/get-from-sibche.png"
            alt="get-from-sibche"
            height="100%"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftSection;
