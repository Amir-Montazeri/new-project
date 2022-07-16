import { Grid } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { containerStyles } from "./downloadAppComponentStyles";
import { rightSectionStyles } from "./rightSectionStyles";
import { leftSectionStyles } from "./leftSectionStyles";

const DownloadAppComponent = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
      sx={containerStyles}
    >
      <Grid item sx={rightSectionStyles}>
        <RightSection />
      </Grid>
      <Grid item sx={leftSectionStyles}>
        <LeftSection />
      </Grid>
    </Grid>
  );
};

export default DownloadAppComponent;
