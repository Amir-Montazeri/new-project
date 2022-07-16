import { Box, Grid } from "@mui/material";
import { containerStyles, contentStyles } from "./homeDownloadAppStyles";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HomeDownloadApp = () => {
  return (
    <Box sx={containerStyles}>
      <Grid
        container
        justifyContent="space-between"
        flexDirection="row-reverse"
        flexWrap="wrap"
        alignItems="center"
        sx={contentStyles}
      >
        <RightSection />
        <LeftSection />
      </Grid>
    </Box>
  );
};

export default HomeDownloadApp;
