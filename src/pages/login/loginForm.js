import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { setIsLoading, setUser } from "../../store/actions";
import Image from "../../components/image/image";
import Link from "../../components/Link/mLink";
import Logo from "assets/Images/logo.svg";
import { Navigate, Link as RRDLink } from "react-router-dom";
import { setItem } from "lcoalStorage";
import { base_api_url } from "api";

function Login({ isLoading, setIsLoading, setUser, user }) {
  const [info, setInfo] = useState({ username: "", pass: "" });
  const [submited, setSubmited] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${base_api_url}/auth/login/`, {
        Headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        username: info.username,
        password: info.pass,
      })
      .then((res) => {
        setIsLoading(false);
        console.log("login suc! ", res);
        console.log("login suc! ", res.data);
        if (res.statusText === "OK") {
          setItem("access", res.data.access);
          setItem("refresh", res.data.refresh);
          setUser(res.data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        let error = JSON.parse(err.request.responseText);
        console.log("err! ", err);
        // setError(error);
      });
  }
  function numhandler(e) {
    let numbers = /^[0-9]+$/;
    if (e.target.value.match(numbers)) {
      setInfo({ ...info, username: e.target.value.trim() });
    }
  }

  function passHandler(e) {
    setInfo({ ...info, pass: e.target.value.toLowerCase().trim() });
  }

  return user?.access ? (
    <Navigate to={user["is_ok"] ? "/profile/business" : "/profile/me"} />
  ) : (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "#015077" }}
    >
      <Container>
        <Row>
          <Col xs={10} md={8} lg={5} className="bg-white mx-auto rounded">
            <div className="d-flex justify-content-center">
              <Image height="80px" width="80px" src={Logo} />
            </div>

            <div className="mx-5">
              <Form onSubmit={(e) => submitHandler(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h3 style={{ textAlign: "center" }}>ورود</h3>
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-3 pe-5 border border-dark text-right"
                    type="text"
                    placeholder="شماره موبایل"
                    value={info.username}
                    onChange={(e) => numhandler(e)}
                    required
                  />
                  <Form.Control
                    size="lg"
                    className="radius-4 p-3 pe-5 border border-dark text-right"
                    type="password"
                    placeholder="رمز ورود"
                    value={info.pass}
                    onChange={(e) => passHandler(e)}
                    required
                  />
                </Form.Group>

                <Col xs={10} md={8} lg={5} className="mx-auto mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="rounded-pill w-100 text-light"
                  >
                    ورود
                  </Button>
                </Col>
                <Col xs={10} md={8} lg={5} className="mx-auto mt-4">
                  <RRDLink to="/register">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="rounded-pill w-100 text-light"
                    >
                      ثبت‌نام
                    </Button>
                  </RRDLink>
                </Col>
              </Form>
            </div>

            <p className="my-4 mx-2 text-center">
              ورود شما به معنای پذیرش شرایط <Link url="/" title="پلاست اپ" /> و
              قوانین <Link url="/" title="حریم خصوصی" /> است.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  user: state.user,
});

export default connect(mapStateToProps, { setIsLoading, setUser })(Login);
