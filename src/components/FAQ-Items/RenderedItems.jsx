import { Grid } from "@mui/material";
import { containerStyles } from "./renderedItemsStyles";

const RenderedItems = ({ items }) =>
  items.map((item) => {
    return (
      <Grid item key={item.id} sx={containerStyles}>
        <img src={item.iconUrl} alt={item.title} />
        {item.title}
      </Grid>
    );
  });

export default RenderedItems;
