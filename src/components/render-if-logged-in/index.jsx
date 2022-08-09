import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function RenderIfLoggedIn({ mustLoggedIn, user, children }) {
	if (mustLoggedIn === true) {
		return user ? children : <Navigate to="/login" />;
	} else if (mustLoggedIn === false) {
		return !user ? children : <Navigate to="/" />;
	} else {
		return children;
	}
}

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(RenderIfLoggedIn);
