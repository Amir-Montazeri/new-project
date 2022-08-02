import { Grid } from "@mui/material";
import { containerStyles } from "./mainAboutStyles";

function MainAbout() {
  return (
    <Grid container justifyContent="space-between" sx={containerStyles}>
      <Grid item>1</Grid>
      <Grid item>2</Grid>
      <Grid item>3</Grid>
      <Grid item>4</Grid>
    </Grid>
  );
}

export default MainAbout;
