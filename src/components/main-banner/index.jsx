import { Box } from "@mui/material";
import { useState } from "react";
import { containerStyles } from "./mainBannerStyles";

const MainBanner = () => {
  const [imageUrl, setImageUrl] = useState(
    "./assets/main-backgrounds/main-banner.jpg"
  );

  return (
    <Box sx={containerStyles}>
      <img alt="plast-app" src={imageUrl} />
    </Box>
  );
};

export default MainBanner;
