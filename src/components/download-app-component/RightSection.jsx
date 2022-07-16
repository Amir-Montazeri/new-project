import { Box, Grid, Typography } from "@mui/material";
import {
  descStyles,
  rightContentStyles,
  titleStyles,
  downloadLinksStyles,
  getAppContainerStyles,
} from "./rightSectionStyles";

const RightSection = () => {
  return (
    <Box sx={rightContentStyles}>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        فروشگاه و محصول مورد نظر خود را به دقت انتخاب کنید
      </Typography>
      <Typography variant="body1" component="p" color="#969696" sx={descStyles}>
        اپلیکیشن پلاست اپ را دانلود کنید
        <br /> و هر کاری را که دارید رایگان سفارش دهید
      </Typography>
      <Grid
        container
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        sx={downloadLinksStyles}
      >
        <Grid item>
          <img
            src="./assets/main-backgrounds/download-app-QR.svg"
            alt="Qr-Code"
            height="120px"
            width="120px"
          />
        </Grid>
        <Grid item>
          <Box sx={getAppContainerStyles}>
            <img
              src="./assets/main-backgrounds/get-from-googleplay.svg"
              alt="get app from googleplay"
            />
          </Box>
          <Box sx={getAppContainerStyles}>
            <img
              src="./assets/main-backgrounds/get-from-appstore.svg"
              alt="get app from googleplay"
            />
          </Box>
          <Box sx={getAppContainerStyles}>
            <img
              src="./assets/main-backgrounds/get-from-bazaar.svg"
              alt="get app from googleplay"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightSection;
