import "./menu.style.scss";
import {
  faBars,
  faSearch,
  faHome,
  faShop,
  faSignOut,
  faCaretDown,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "store/actions";

const Menu = ({ user, logOut }) => {
  const navigate = useNavigate();
  console.log("user: ", user);

  return (
    <nav>
      <div className="header-container">
        <div>
          <span className="icon icon-bar pointer">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <img className="logo pointer" src={logo} />
        </div>
        <div></div>
        <div>
          <span className="icon pointer icon-search-larg-window">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <div>
            <span className="pointer two-icon">
              <FontAwesomeIcon icon={faShop} />
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <span
              className="pointer icon"
              onClick={() => (user ? logOut() : navigate("/register"))}
            >
              <FontAwesomeIcon icon={user ? faSignOut : faSignIn} />
            </span>
          </div>
          <Link to="/">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
          </Link>
        </div>
      </div>
      <div className="header-search-container">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" className="search-input" />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logOut })(Menu);
