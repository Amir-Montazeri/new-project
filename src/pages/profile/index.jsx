import { Box } from "@mui/material";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { containerStyles, contentStyles } from "./profileStyles";

function Profile({ user }) {
	return !user ? (
		<Box sx={containerStyles}>
			header
			<Box sx={contentStyles}>
				<Outlet />
			</Box>
		</Box>
	) : (
		<Navigate to="/login" />
	);
}

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(Profile);
