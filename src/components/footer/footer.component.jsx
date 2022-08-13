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
    <div style={{ padding: "15px 0" }} className="footer">
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
          مراحل ثبت فروشگاه
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "24%" }}>
          قوانینن و مقررات
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          پشتیبانی
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          شرایط خرید اعتباری
        </Grid>
        <Grid item sx={{ ...titleStyles, width: "19%" }}>
          مراحل ثبت سفارش
        </Grid>
      </Grid>
      <Row className="footer-images mt-2">
        <Col
          className="mt-3"
          lg={4}
          md={8}
          sm={12}
          xs={12}
          style={{ flexDirection: "row-reverse" }}
        >
          <div style={{ cursor: "pointer" }}>
            {/* <img src={Etemad} alt="etemad icon" /> */}
            <a
              referrerpolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=223440&amp;Code=0zK5cwiSCWNujK3jWTsb"
              rel="noreferrer"
            >
              <img
                referrerpolicy="origin"
                src={Etemad}
                alt=""
                id="0zK5cwiSCWNujK3jWTsb"
              />
            </a>
          </div>
          <div style={{ width: "80px", height: "80px" }}>
            {/* <img src={KasboKar} alt="kasboKar icon" /> */}
            <img
              // src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Im0xMjAgMjQzbDk0LTU0IDAtMTA5IC05NCA1NCAwIDEwOSAwIDB6IiBmaWxsPSIjODA4Mjg1Ii8+Cgk8cGF0aCBkPSJtMTIwIDI1NGwtMTAzLTYwIDAtMTE5IDEwMy02MCAxMDMgNjAgMCAxMTkgLTEwMyA2MHoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo1O3N0cm9rZTojMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjE0IDgwbC05NC01NCAtOTQgNTQgOTQgNTQgOTQtNTR6IiBmaWxsPSIjMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjYgODBsMCAxMDkgOTQgNTQgMC0xMDkgLTk0LTU0IDAgMHoiIGZpbGw9IiM1ODU5NWIiLz4KCTxwYXRoIGQ9Im0xMjAgMTU3bDQ3LTI3IDAtMjMgLTQ3LTI3IC00NyAyNyAwIDU0IDQ3IDI3IDQ3LTI3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MTU7c3Ryb2tlOiNmZmYiLz4KCTx0ZXh0IHg9IjE1IiB5PSIzMDAiIGZvbnQtc2l6ZT0iMjVweCIgZm9udC1mYW1pbHk9IidCIFlla2FuJyIgc3R5bGU9ImZpbGw6IzI5Mjk1Mjtmb250LXdlaWdodDpib2xkIj7Yudi22Ygg2KfYqtit2KfYr9uM2Ycg2qnYtNmI2LHbjDwvdGV4dD4KCTx0ZXh0IHg9IjgiIHk9IjM0MyIgZm9udC1zaXplPSIyNXB4IiBmb250LWZhbWlseT0iJ0IgWWVrYW4nIiBzdHlsZT0iZmlsbDojMjkyOTUyO2ZvbnQtd2VpZ2h0OmJvbGQiPtqp2LPYqCDZiCDaqdin2LHZh9in24wg2YXYrNin2LLbjDwvdGV4dD4KPC9zdmc+ "
              src={KasboKar}
              alt=""
              onClick="window.open('https://ecunion.ir/verify/plastapp.ir?token=817200060e95c205cc36', 'Popup','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')"
              style={{
                cursor: "pointer",
                // width: "96px",
                height: "100%",
              }}
            ></img>
          </div>
          <div>
            <img src={Saman} alt="saman icon" />
          </div>
        </Col>
        <Col className="mt-3" lg={4} md={4} sm={5} xs={5}>
          <div>
            <p
              className="font-size-14 xs-font-size-16 sm-font-size-16"
              style={{ direction: "rtl !important" }}
            >
              021 - 34221
            </p>
            <p className="font-size-10 xs-font-size-11 sm-font-size-11">
              پشتیبانی 24 ساعته
            </p>
          </div>
          <FontAwesomeIcon
            icon={faHeadphones}
            className="hidden-sm hidden-xs"
          />
        </Col>
        <Col
          className="mt-3"
          lg={4}
          md={12}
          sm={7}
          xs={7}
          style={{ flexDirection: "row-reverse" }}
        >
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
