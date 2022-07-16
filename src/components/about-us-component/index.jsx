import { Grid } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { containerStyles } from "./aboutUsComponentStyles";
import { rightSectionStyles } from "./rightSectionStyles";
import { leftSectionStyles } from "./leftSectionStyles";

const AboutUsComponent = () => {
  return (
    <Grid container justifyContent="center" sx={containerStyles}>
      <Grid item sx={rightSectionStyles}>
        <RightSection />
      </Grid>
      <Grid item sx={leftSectionStyles}>
        <LeftSection />
      </Grid>
    </Grid>
  );
};

export default AboutUsComponent;
