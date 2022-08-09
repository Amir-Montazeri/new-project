import { Button, Grid } from "@mui/material";
import { purchasesItems } from "./purchasesItemsData";
import { buttonStyles, itemsContainerStyles } from "./purchasesStyles";
import RenderedItems from "./RenderedItems";

function Purchases() {
	const renderedPurchasesContainer = items =>
		items?.map(({ items, id }) => {
			return (
				<Grid container flexWrap="nowrap" sx={itemsContainerStyles} key={id}>
					<RenderedItems key={id} items={items} />
				</Grid>
			);
		});

	return (
		<>
			{renderedPurchasesContainer(purchasesItems)}
			<Button sx={buttonStyles}>فروشگاه</Button>
		</>
	);
}

export default Purchases;
