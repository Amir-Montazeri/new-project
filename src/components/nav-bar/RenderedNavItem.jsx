import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { itemStyles, subTitleStyles } from "./navbarStyles";

const RenderedNavItem = ({ item, setIsActive }) => {
	const [subTitleIsAppear, setSubTitleIsAppear] = useState(false);
	const navigate = useNavigate();

	const handleItemClicked = item => {
		if (item.linkTo) {
			setIsActive(false);
			navigate(item.linkTo);
		} else if (item.subTitles) {
			setSubTitleIsAppear(prevState => !prevState);
		}
	};

	const handleSubTitleClicked = item => {
		if (item.linkTo) {
			setIsActive(false);
			navigate(item.linkTo);
		}
	};

	const renderedSubTitles = subTitles =>
		subTitles.map(subTitle => (
			<Box
				component="li"
				key={subTitle.title}
				onClick={() => handleSubTitleClicked(subTitle)}
				sx={subTitleStyles}>
				{subTitle.title}
			</Box>
		));

	return (
		<Box
			key={item.title}
			onClick={() => handleItemClicked(item)}
			component="li"
			sx={itemStyles}>
			{item.title}
			{subTitleIsAppear && <ul>{renderedSubTitles(item.subTitles)}</ul>}
		</Box>
	);
};

export default RenderedNavItem;
