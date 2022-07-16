import { Box, Grid, Typography } from "@mui/material";
import { containerStyles, logoContainer } from "./rightSectionStyles";

const RightSection = () => {
  return (
    <Grid item sx={containerStyles}>
      <Typography variant="h5" component="h3" color="#fff">
        دانلود اپلیکیشن
      </Typography>
      <Box sx={logoContainer}>
        <img src="./assets/logos/plastapp-logo.svg" alt="logo" height="100%" />
      </Box>
    </Grid>
  );
};

export default RightSection;
