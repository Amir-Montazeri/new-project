import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import { setIsLoading } from "../../store/actions";
import Image from "../../components/image/image";
import Link from "../../components/Link/mLink";
import Logo from "assets/Images/logo.svg";
import { Grid, Typography } from "@mui/material";

function Register({ isLoading, user, setIsLoading }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    otp: "",
    pass: "",
    confirmedPass: "",
  });
  const [status, setStatus] = useState({ customer: true, marketer: false });
  const [error, setError] = useState({});
  const [statusLevel, setStatusLevel] = useState(1);
  const [resendCodeTimeout, setResendCodeTimeout] = useState(0);
  const [submited, setSubmited] = useState(false);
  let shopper = status.customer;
  let salesman = status.marketer;

  console.log(statusLevel);

  useEffect(() => {
    if (resendCodeTimeout > 0) {
      const intervalID = setInterval(() => {
        setResendCodeTimeout((prevState) => prevState - 1);
      }, 1000);
      return () => clearInterval(intervalID);
    }
  }, [resendCodeTimeout]);

  async function submitHandler(e) {
    e.preventDefault();
    console.log("starting...");
    console.log("statusLevel: ", statusLevel);
    setIsLoading(true);
    if (statusLevel === 1) {
      axios
        .post("http://192.168.1.171:8088/auth/send_otp/", {
          username: info.username,
        })
        .then((res) => {
          setIsLoading(false);
          if (res.status === 200) {
            setStatusLevel((prevState) => prevState + 1);
            setResendCodeTimeout(60);
          }
          console.log("suc! ", res);
        })
        .catch((err) => {
          setIsLoading(false);
          let error = JSON.parse(err.request.responseText);
          console.log("err! ", err);
          setError(error);
        });
    } else if (statusLevel === 2) {
      axios
        .post("http://192.168.1.171:8088/auth/verify/", {
          username: info.username,
          otp: info.otp,
        })
        .then((res) => {
          setIsLoading(false);
          if (res.data.code === 1) {
            setStatusLevel((prevState) => prevState + 1);
          }
          console.log("suc! ", res);
        })
        .catch((err) => {
          setIsLoading(false);
          let error = JSON.parse(err.request.responseText);
          console.log("err! ", err);
          setError(error);
        });
    } else if (statusLevel === 3 && info.pass === info.confirmedPass) {
      axios
        .post("http://192.168.1.171:8088/auth/register/", {
          username: info.username,
          password: info.pass,
          password2: info.confirmedPass,
        })
        .then((res) => {
          setIsLoading(false);
          console.log("suc! ", res);
          if (res.statusText === "Created") {
            navigate("/login");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          let error = JSON.parse(err.request.responseText);
          console.log("err! ", err);
          setError(error);
        });
    }
  }

  function statusHandler(buyer, seller) {
    if (seller) {
      setStatus({ customer: false, marketer: true });
    } else {
      setStatus({ customer: true, marketer: false });
    }
  }

  function usernameHandler(e) {
    let numbers = /^[0-9]+$/;
    if (e.target.value.match(numbers)) {
      setInfo({ ...info, username: e.target.value.trim() });
    }
    // else {
    //   if (info.tel.length === 1) {
    //     setInfo({ ...info, tel: "" });
    //   } else {
    //     setInfo({ ...info, tel: info.tel });
    //   }
    // }
  }

  const otpHandler = (e) => {
    setInfo({ ...info, otp: e.target.value });
  };

  function confirmedPassHandler(e) {
    setInfo({
      ...info,
      confirmedPass: e.target.value.toLowerCase().trim(),
    });
  }

  function passHandler(e) {
    setInfo({ ...info, pass: e.target.value.toLowerCase().trim() });
  }

  const handleResendCode = () => {
    setResendCodeTimeout(60);
    axios
      .post("http://192.168.1.171:8088/auth/send_otp/", {
        username: info.username,
      })
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        let error = JSON.parse(err.request.responseText);
        console.log("err! ", err);
        setError(error);
      });
  };

  return user?.username ? (
    <Navigate to="/" />
  ) : (
    <div className="min-vh-100 py-3 bg-primary d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={10} md={8} lg={5} className="bg-white mx-auto rounded">
            <div className="d-flex justify-content-center">
              <Image height="80px" width="80px" src={Logo} />
            </div>

            <div className="mx-5">
              <Form onSubmit={(e) => submitHandler(e)}>
                <h3 style={{ textAlign: "center" }}>ثبت‌نام</h3>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-3 pe-5 border border-dark align-right"
                    type="text"
                    placeholder="شماره موبایل"
                    disabled={statusLevel > 1}
                    value={info.username}
                    onChange={(e) => usernameHandler(e)}
                    required
                  />
                </Form.Group>
                <div>{error.mobile_phone_number}</div>

                {statusLevel === 2 && (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      size="lg"
                      className="radius-4 p-3 pe-5 border border-dark align-right"
                      type="password"
                      placeholder="کد تایید"
                      value={info.otp}
                      onChange={(e) => otpHandler(e)}
                      required
                    />
                  </Form.Group>
                )}

                {statusLevel === 3 && (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      size="lg"
                      className="radius-4 p-3 pe-5 border border-dark align-right"
                      type="password"
                      placeholder="رمز ورود"
                      value={info.pass}
                      onChange={(e) => passHandler(e)}
                      required
                    />
                  </Form.Group>
                )}

                {statusLevel === 3 && (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      size="lg"
                      className="radius-4 p-3 pe-5 border border-dark align-right"
                      type="password"
                      placeholder="تایید رمز ورود"
                      value={info.confirmedPass}
                      onChange={(e) => confirmedPassHandler(e)}
                      required
                    />
                  </Form.Group>
                )}

                <Col xs={10} md={8} lg={5} className="mx-auto mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="rounded-pill w-100 text-light"
                  >
                    {statusLevel === 1
                      ? "ارسال کد"
                      : statusLevel === 2
                      ? "تایید کد"
                      : "تایید"}
                  </Button>
                </Col>
              </Form>
            </div>

            {statusLevel === 2 && resendCodeTimeout > 0 && (
              <Grid
                container
                justifyContent="center"
                sx={{ marginTop: "10px" }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{
                      padding: "15px",
                      borderRadius: "50%",
                      border: "1px solid #000",
                    }}
                  >
                    {resendCodeTimeout}
                  </Typography>
                </Grid>
              </Grid>
            )}

            {statusLevel === 2 && (
              <Grid
                container
                justifyContent="center"
                sx={{ marginTop: "10px" }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{ cursor: "pointer" }}
                    onClick={handleResendCode}
                  >
                    ارسال مجدد کد
                  </Typography>
                </Grid>
              </Grid>
            )}

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

export default connect(mapStateToProps, { setIsLoading })(Register);
