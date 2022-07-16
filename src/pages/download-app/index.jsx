import { Box } from "@mui/material";
import DownloadAppComponent from "components/download-app-component";
import { containerStyles } from "./downloadappStyles";

const DownloadApp = () => {
  return (
    <Box sx={containerStyles}>
      <DownloadAppComponent />
    </Box>
  );
};

export default DownloadApp;
