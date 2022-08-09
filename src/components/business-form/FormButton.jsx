import { Button } from "@mui/material";
import { buttonStyles } from "./buttonStyles";

function FormButton() {
	return (
		<Button type="submit" sx={buttonStyles}>
			تایید
		</Button>
	);
}

export default FormButton;
