import { Box, Typography } from "@mui/material";
import { containerStyles, listContainerStyles } from "./formFooterStyles";
import { formFooterItems } from "./formFooterData";

const FormFooter = () => {
	const renderedItems = items =>
		items.map(item => (
			<Box component="li" key={item}>
				{item}
			</Box>
		));

	return (
		<Box sx={containerStyles}>
			<Typography>فروشنده محترم:</Typography>
			<Box component="ul" sx={listContainerStyles}>
				{renderedItems(formFooterItems)}
			</Box>
			<Typography>
				درصورت عدم رعایت موارد فوق امکان تایید از سمت پلاست اپ وجود نخواهد داشت
				.
			</Typography>
		</Box>
	);
};

export default FormFooter;
