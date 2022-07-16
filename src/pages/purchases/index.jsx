import { Box, Button, Grid } from "@mui/material";
import { purchasesItems } from "./purchasesItemsData";
import {
  buttonStyles,
  containerStyles,
  itemsContainerStyles,
} from "./purchasesStyles";
import RenderedItems from "./RenderedItems";

function Purchases() {
  const renderedPurchasesContainer = (items) =>
    items.map(({ items, id }) => {
      return (
        <Grid container flexWrap="nowrap" sx={itemsContainerStyles}>
          <RenderedItems key={id} items={items} />
        </Grid>
      );
    });

  return (
    <Box sx={containerStyles}>
      {renderedPurchasesContainer(purchasesItems)}
      <Button sx={buttonStyles}>فروشگاه</Button>
    </Box>
  );
}

export default Purchases;
