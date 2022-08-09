import { Box } from "@mui/material";
import { MyProductList } from "components";
import { containerStyles } from "./myProductsStyles";

function MyProducts() {
	return (
		<Box sx={containerStyles}>
			<MyProductList />
		</Box>
	);
}

export default MyProducts;
