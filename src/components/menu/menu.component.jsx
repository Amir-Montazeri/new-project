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
import { NavBar } from "components";
import { useState } from "react";

const Menu = ({ user, logOut }) => {
  const navigate = useNavigate();
  const [navIsActive, setNavIsActive] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <div
          className="header-container"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <div>
            <img className="logo pointer" src={logo} />
          </div>
          <div></div>
          <div>
            <span className="icon pointer icon-search-larg-window">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <div>
              {/* <span className="pointer two-icon">
                <FontAwesomeIcon icon={faShop} />
                <FontAwesomeIcon icon={faCaretDown} />
              </span> */}
              <span
                className="pointer icon"
                onClick={() => (user ? logOut() : navigate("/login"))}
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
        <div>
          <span
            className="icon icon-bar pointer"
            onClick={() => setNavIsActive((prevState) => !prevState)}
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </nav>
      <NavBar isActive={navIsActive} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logOut })(Menu);
