import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { addProductButtonStyles } from "./addProductButtonStyles";

function AddProductButton() {
	return (
		<Link to="/product/create">
			<Button sx={addProductButtonStyles}>افزودن محصول +</Button>
		</Link>
	);
}

export default AddProductButton;
