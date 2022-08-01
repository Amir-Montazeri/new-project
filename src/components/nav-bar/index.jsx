import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { activeNavStyles, containerStyles, itemStyles } from "./navbarStyles";
import { navItems } from "./navItems";

function NavBar({ isActive, setIsActive }) {
  const activeStyle = isActive ? activeNavStyles : {};

  const renderedNavItem = (items) =>
    items.map((item) => (
      <Link
        key={item.title}
        to={item.linkTo}
        onClick={() => setIsActive(false)}
      >
        <Box component="li" sx={itemStyles}>
          {item.title}
        </Box>
      </Link>
    ));

  return (
    <Box sx={{ ...containerStyles, ...activeStyle }} component="ul">
      {renderedNavItem(navItems)}
    </Box>
  );
}

export default NavBar;
