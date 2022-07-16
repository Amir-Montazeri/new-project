import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setIsLoading, setUser } from "../../store/actions";
import Image from "../../components/image/image";
import Link from "../../components/Link/mLink";
import Logo from "../../logo.svg";
import { Navigate } from "react-router-dom";

function Login({ isLoading, setIsLoading, setUser, user }) {
  const [info, setInfo] = useState({ tel: "", pass: "" });
  const [submited, setSubmited] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    await fetch("http://127.0.0.1:8081/User/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: info.email,
        password: info.pass,
      }),
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function numhandler(e) {
    let numbers = /^[0-9]+$/;
    if (e.target.value.match(numbers)) {
      setInfo({ ...info, tel: e.target.value.trim() });
    } else {
      if (info.tel.length === 1) {
        setInfo({ ...info, tel: "" });
      } else {
        setInfo({ ...info, tel: info.tel });
      }
    }
  }

  function passHandler(e) {
    setInfo({ ...info, pass: e.target.value.toLowerCase().trim() });
  }

  return user?.user_id ? (
    <Navigate to="/" />
  ) : (
    <div className="min-vh-100 bg-primary d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={10} md={8} lg={5} className="bg-white mx-auto rounded">
            <div className="d-flex justify-content-center">
              <Image height="100px" width="100px" src={Logo} />
            </div>

            <div className="mx-5">
              <Form onSubmit={(e) => submitHandler(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h3>ورود</h3>
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-3 pe-5 border border-dark text-right"
                    type="text"
                    placeholder="شماره موبایل"
                    value={info.tel}
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
