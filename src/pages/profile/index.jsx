import { Box } from "@mui/material";
import { RenderIfLoggedIn } from "components";
import { Outlet } from "react-router-dom";
import { containerStyles, contentStyles } from "./profileStyles";

function Profile() {
	return (
		<RenderIfLoggedIn mustLoggedIn={true}>
			<Box sx={containerStyles}>
				{/* header */}
				<Box sx={contentStyles}>
					<Outlet />
				</Box>
			</Box>
		</RenderIfLoggedIn>
	);
}

export default Profile;
