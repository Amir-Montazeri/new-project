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
const Footer = () => {
  return (
    <div className="footer">
      <br />
      <Row className="footer-links hidden-sm hidden-xs">
        <Col gl="true" md>
          همکاری با ما
        </Col>
        <Col gl="true" md>
          قوانینن و مقررات
        </Col>
        <Col gl="true" md>
          پشتیبانی
        </Col>
        <Col gl="true" md>
          تماس با ما
        </Col>
        <Col gl="true" md>
          نمایندگی
        </Col>
      </Row>
      <Row className="footer-links d-lg-none d-md-none visible-sm visible-xs">
        <Col sm xs>
          همکاری با ما
        </Col>
        <Col sm xs>
          قوانینن و مقررات
        </Col>
        <Col sm xs>
          پشتیبانی
        </Col>
      </Row>
      <Row className="footer-links d-lg-none d-md-none visible-sm visible-xs">
        <Col sm xs>
          تماس با ما
        </Col>
        <Col sm xs>
          نمایندگی
        </Col>
      </Row>

      <Row className="footer-images mt-2">
        <Col className="mt-3" lg={4} md={8} sm={12} xs={12}>
          <div>
            <img src={Etemad} />
          </div>
          <div>
            <img src={KasboKar} />
          </div>
          <div>
            <img src={Saman} />
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
