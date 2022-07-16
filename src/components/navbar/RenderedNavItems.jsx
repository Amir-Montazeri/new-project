import { Grid } from "@mui/material";
import { itemsContainerStyles } from "./RenderedNavItemsStyles";

const RenderedNavItems = ({ items }) =>
  items.map((item) => (
    <Grid item component="li" key={item.id} sx={itemsContainerStyles}>
      {item.title}
    </Grid>
  ));

export default RenderedNavItems;
