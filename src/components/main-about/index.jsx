import { Grid } from "@mui/material";
import { containerStyles, itemsContainerStyles } from "./mainAboutStyles";

function MainAbout() {
	return (
		<Grid container justifyContent="space-between" sx={containerStyles}>
			<Grid item sx={itemsContainerStyles}>
				<img
					src="./assets/main-backgrounds/zemanat.webp"
					alt="ضمانت بازگشت کالا"
					height="100%"
				/>
			</Grid>
			<Grid item sx={itemsContainerStyles}>
				<img
					src="./assets/main-backgrounds/poshtibani.webp"
					alt="ضمانت بازگشت کالا"
					height="100%"
				/>
			</Grid>
			<Grid item sx={itemsContainerStyles}>
				<img
					src="./assets/main-backgrounds/pardakht-amn.webp"
					alt="ضمانت بازگشت کالا"
					height="100%"
				/>
			</Grid>
			<Grid item sx={itemsContainerStyles}>
				<img
					src="./assets/main-backgrounds/ersale-sari.webp"
					alt="ضمانت بازگشت کالا"
					height="100%"
				/>
			</Grid>
		</Grid>
	);
}

export default MainAbout;
