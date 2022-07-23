import { Grid } from "@mui/material";
import { activeNavStyles, containerStyles } from "./navbarStyles";

function NavBar({ isActive }) {
  const activeStyle = isActive ? activeNavStyles : {};
  return <Grid container sx={{ ...containerStyles, ...activeStyle }}></Grid>;
}

export default NavBar;
