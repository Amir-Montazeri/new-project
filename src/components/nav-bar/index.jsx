import { Box } from "@mui/material";
import { connect } from "react-redux";
import { activeNavStyles, containerStyles } from "./navbarStyles";
import { navItems } from "./navItems";
import RenderedNavItem from "./RenderedNavItem";

function NavBar({ isActive, setIsActive, user }) {
	const activeStyle = isActive ? activeNavStyles : {};

	return (
		<Box sx={{ ...containerStyles, ...activeStyle }} component="ul">
			{/* {renderedNavItem(navItems)} */}
			{navItems.map(item =>
				item.renderIfLoggedIn === true ? (
					user ? (
						<RenderedNavItem
							key={item.title}
							item={item}
							setIsActive={setIsActive}
						/>
					) : null
				) : item.renderIfLoggedIn === false ? (
					user ? null : (
						<RenderedNavItem
							key={item.title}
							item={item}
							setIsActive={setIsActive}
						/>
					)
				) : (
					<RenderedNavItem
						key={item.title}
						item={item}
						setIsActive={setIsActive}
					/>
				)
			)}
		</Box>
	);
}

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(NavBar);
