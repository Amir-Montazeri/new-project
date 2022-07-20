import "./footer.style.scss";
import { Row, Col } from "react-bootstrap";
import Etemad from "../../assets/Images/Etemad.svg";
import KasboKar from "../../assets/Images/KasboKar.svg";
import Saman from "../../assets/Images/Saman.svg";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import telegram from "../../assets/Images/telegram.png";
import twitter from "../../assets/Images/twitter.png";
import instagram from "../../assets/Images/instagram.png";
import facebook from "../../assets/Images/facebook.png";
import { Grid, Typography } from "@mui/material";
import { titleStyles } from "./footerStyles";
const Footer = () => {
  return (
    <div className="footer">
      <br />
      <Grid
        container
        justifyContent="space-evenly"
        sx={{
          padding: "0 10vw",
          "@media screen and (max-width: 768px)": {
            padding: "0",
          },
        }}
      >
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          همکاری با ما
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "24%" }}>
          قوانینن و مقررات
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          پشتیبانی
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          تماس با ما
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          نمایندگی
        </Grid>
      </Grid>
      <Row className="footer-images mt-2">
        <Col className="mt-3" lg={4} md={8} sm={12} xs={12}>
          <div>
            <img src={Etemad} alt="etemad icon" />
          </div>
          <div>
            <img src={KasboKar} alt="kasboKar icon" />
          </div>
          <div>
            <img src={Saman} alt="saman icon" />
          </div>
        </Col>
        <Col className="mt-3" lg={4} md={4} sm={5} xs={5}>
          <FontAwesomeIcon
            icon={faHeadphones}
            className="hidden-sm hidden-xs"
          />
          <div>
            <p className="font-size-14 xs-font-size-16 sm-font-size-16">
              34221 - 021
            </p>
            <p className="font-size-10 xs-font-size-11 sm-font-size-11">
              پشتیبانی 24 ساعته
            </p>
          </div>
        </Col>
        <Col className="mt-3" lg={4} md={12} sm={7} xs={7}>
          <div>
            <img src={telegram} />
          </div>
          <div>
            <img src={twitter} />
          </div>
          <div>
            <img src={instagram} />
          </div>
          <div>
            <img src={facebook} />
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default Footer;

// <Grid
//   container
//   justifyContent="space-evenly"
//   sx={{
//     "> *": {
//       color: "#fff",
//       borderRight: "1px solid #fff",
//       textAlign: "center",
//     },
//   }}
// >
//   <Grid item component="p">
//     همکاری با ما
//   </Grid>
//   <Grid item component="p">
//     قوانینن و مقررات
//   </Grid>
//   <Grid item component="p">
//     پشتیبانی
//   </Grid>
//   <Grid item component="p">
//     تماس با ما
//   </Grid>
//   <Grid item component="p">
//     نمایندگی
//   </Grid>
// </Grid>;
