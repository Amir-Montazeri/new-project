import "./menu.style.scss";
import { faBars,faSearch,faHome,faShop,faSignOut, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/Images/logo.png";
const Menu = () => (
  <nav>
    <div className="header-container">
      <div>
        <span className="icon icon-bar">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <img className="logo" src={logo} />
      </div>
      <div></div>
      <div>
        <span className="icon icon-search-larg-window">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <div>
          <span className="two-icon">
            <FontAwesomeIcon icon={faShop} />
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faSignOut} />
          </span>
        </div>
        <span className="icon">
          <FontAwesomeIcon icon={faHome} />
        </span>
      </div>
    </div>
    <div className="header-search-container">
        <FontAwesomeIcon icon={faSearch} />
       <input type="text" className="search-input"/>
    </div>
  </nav>
);

export default Menu;
