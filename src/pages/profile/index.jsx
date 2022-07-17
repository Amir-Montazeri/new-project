import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { containerStyles, contentStyles } from "./profileStyles";

function Profile() {
  return (
    <Box sx={containerStyles}>
      header
      <Box sx={contentStyles}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Profile;
