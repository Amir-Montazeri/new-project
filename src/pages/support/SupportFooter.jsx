import { Box, Typography } from "@mui/material";
import { containerStyles, listContainerStyles } from "./supportFooterStyles";
import { supportFooterItems } from "./supportFooterData";

const SupportFooter = () => {
	const renderedItems = items =>
		items.map(item => (
			<Box component="li" key={item}>
				{item}
			</Box>
		));

	return (
		<Box sx={containerStyles}>
			<Typography>کاربر گرامی:</Typography>
			<Box component="ul" sx={listContainerStyles}>
				{renderedItems(supportFooterItems)}
			</Box>
		</Box>
	);
};

export default SupportFooter;
