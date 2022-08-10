import { createRef, useEffect, useState } from "react";
import {
  faBars,
  faSearch,
  faHome,
  faSignOut,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "store/actions";
import { NavBar } from "components";
import { Box, Button, Grid, Typography } from "@mui/material";
import Modal from "components/ProductComponent/DetailsProduct/modal";
import {
  modalButton,
  modalButtonAccept,
  modalButtonReject,
} from "./menuStyles";

const Menu = ({ user, logOut }) => {
  const navigate = useNavigate();
  const [navIsActive, setNavIsActive] = useState(false);
  const [logOutModalStatus, setLogOutModalStatus] = useState(false);
  const barsIconRef = createRef();

  useEffect(() => {
    const handleOutsideClicked = (e) => {
      if (navIsActive && !barsIconRef.current.contains(e.target)) {
        setNavIsActive(false);
        console.log("should close!");
      }
    };

    document.addEventListener("click", handleOutsideClicked);

    return () => document.removeEventListener("click", handleOutsideClicked);
  }, [navIsActive]);

  return (
    <div style={{ position: "relative" }}>
      <nav style={{ display: "flex", alignItems: "center", padding: "16px 0" }}>
        {/* <div
					className="header-container"
					style={{ display: "flex", flexDirection: "row-reverse" }}>
					<div>
						<Link to="/">
							<img className="logo pointer" src={logo} />
						</Link>
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
								onClick={() => (user ? logOut() : navigate("/login"))}>
								<FontAwesomeIcon icon={user ? faSignOut : faSignIn} />
							</span>
						</div>
						<Link to="/">
							<span className="icon">
								<FontAwesomeIcon icon={faHome} />
							</span>
						</Link>
					</div>
				</div> */}

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "0 30px" }}
        >
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "7px" }}>
              <span
                className="pointer icon"
                onClick={() =>
                  user ? setLogOutModalStatus(true) : navigate("/login")
                }
              >
                <FontAwesomeIcon icon={user ? faSignOut : faSignIn} />
              </span>
            </div>
            <Link to="/">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
            </Link>
          </Grid>
          <Grid item>
            <div>
              <Link to="/">
                <img
                  className="logo pointer"
                  style={{
                    height: "48px",
                    width: "170px",
                  }}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
          </Grid>
        </Grid>
        <div ref={barsIconRef}>
          <span
            className="icon icon-bar pointer"
            style={{ marginRight: "10px" }}
            onClick={() => setNavIsActive((prevState) => !prevState)}
          >
            <FontAwesomeIcon icon={faBars} />
          </span>

          <NavBar
            isActive={navIsActive}
            setIsActive={(value) => setNavIsActive(value)}
          />
        </div>
      </nav>
      <Modal
        open={logOutModalStatus}
        handleClose={() => setLogOutModalStatus(false)}
      >
        <Box
          sx={{
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{ margin: "5px 30px", direction: "rtl" }}
          >
            ایا از این کار اطمینان دارید؟
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              sx={{ ...modalButton, ...modalButtonReject }}
              onClick={() => setLogOutModalStatus(false)}
            >
              خیر
            </Button>
            <Button
              sx={{ ...modalButton, ...modalButtonAccept }}
              onClick={() => {
                logOut();
                setLogOutModalStatus(false);
              }}
            >
              بله
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logOut })(Menu);
