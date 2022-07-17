import { Grid } from "@mui/material";
import RenderedItems from "./RenderedItems";
import { items } from "./itemsData";

function FAQItems() {
  return (
    <Grid container flexDirection="row-reverse" justifyContent="center">
      <RenderedItems items={items} />
    </Grid>
  );
}

export default FAQItems;
