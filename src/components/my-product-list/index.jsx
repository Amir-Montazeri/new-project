import { Box } from "@mui/material";
import { containerStyles } from "./myProductListStyles";
import AddProductButton from "./add-product-button";
import ProductsList from "./products-list";

function MyProductList() {
	return (
		<Box sx={containerStyles}>
			<AddProductButton />
			<ProductsList />
		</Box>
	);
}

export default MyProductList;
