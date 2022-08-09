import { Box, Typography } from "@mui/material";
import {
	containerStyles,
	listContainerStyles,
} from "./profileFormFooterStyles";
import { profileFormFooterItems } from "./profileFormFooterData";

const ProfileFormFooter = () => {
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
				{renderedItems(profileFormFooterItems)}
			</Box>
		</Box>
	);
};

export default ProfileFormFooter;
