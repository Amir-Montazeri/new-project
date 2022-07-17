import { Grid } from "@mui/material";
import defaultImg from "assets/icons-dir/defaultImg.svg";
import { containerStyles } from "./defaultImgStyles";

function DefaultImg() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item>
        <img src={defaultImg} alt="default" />
      </Grid>
    </Grid>
  );
}

export default DefaultImg;
