import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { containerStyles } from "./profileStyles";

function Profile() {
  return (
    <Box sx={containerStyles}>
      header <Outlet />
    </Box>
  );
}

export default Profile;
