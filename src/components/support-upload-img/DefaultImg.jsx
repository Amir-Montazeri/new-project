import { Grid } from "@mui/material";
import defaultImg from "assets/icons-dir/defaultImg.svg";
import { containerStyles } from "./defaultImgStyles";

function DefaultImg({ imgUrl }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item>
        <img src={imgUrl || defaultImg} alt="default" />
      </Grid>
    </Grid>
  );
}

export default DefaultImg;
