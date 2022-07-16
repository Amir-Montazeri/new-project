import { Grid } from "@mui/material";
import navItems from "./navItems.json";
import RenderedNavItems from "./RenderedNavItems";
import { containerStyles } from "./navbarStyles";

const Navbar = () => {
  return (
    <Grid container justifyContent="center" component="ul" sx={containerStyles}>
      <RenderedNavItems items={navItems} />
    </Grid>
  );
};

export default Navbar;
