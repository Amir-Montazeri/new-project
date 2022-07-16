import { Box } from "@mui/material";
import AboutUsComponent from "components/about-us-component";
import { containerStyles } from "./aboutUsStyles";

const AboutUs = () => {
  return (
    <Box sx={containerStyles}>
      <AboutUsComponent />
    </Box>
  );
};

export default AboutUs;
