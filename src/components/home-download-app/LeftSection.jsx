import { Box, Grid } from "@mui/material";
import { GrMore } from "react-icons/gr";
import {
	containerStyles,
	moreIconStyles,
	downloadsContainerStyles,
} from "./leftSectionstyles";

const LeftSection = () => {
	return (
		<Grid item sx={containerStyles}>
			<Box sx={moreIconStyles}>
				<GrMore color="#777" />
			</Box>
			<Grid container sx={downloadsContainerStyles}>
				<Grid item>
					<img
						src="./assets/main-backgrounds/get-from-google-play.webp"
						alt="get-from-googleplay"
						height="100%"
					/>
				</Grid>
				<Grid item>
					<img
						src="./assets/main-backgrounds/get-from-baazar.webp"
						alt="get-from-appstore"
						height="100%"
					/>
				</Grid>
				<Grid item>
					<img
						src="./assets/main-backgrounds/get-from-myket.webp"
						alt="get-from-bazaar"
						height="100%"
					/>
				</Grid>
				<Grid item>
					<img
						src="./assets/main-backgrounds/get-from-anardooni.webp"
						alt="get-from-mykey"
						height="100%"
					/>
				</Grid>
				<Grid item>
					<img
						src="./assets/main-backgrounds/get-from-sib-app.webp"
						alt="get-from-sibche"
						height="100%"
					/>
				</Grid>
				<Grid item>
					<img
						src="./assets/main-backgrounds/get-from-sibche.webp"
						alt="get-from-sibche"
						height="100%"
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default LeftSection;
