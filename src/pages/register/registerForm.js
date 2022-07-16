import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setIsLoading, setUser } from '../../store/actions'
import Image from "../../components/image/image";
import Link from "../../components/Link/mLink";
import Logo from "../../logo.svg";
import { Navigate } from "react-router-dom";

function Register({ isLoading, user, setUser, setIsLoading }) {
  const [info, setInfo] = useState({ email: "", tel: "", pass: "" });
  const [status, setStatus] = useState({ customer: true, marketer: false });
  const [error, setError] = useState({})
  const [submited, setSubmited] = useState(false);
  let shopper = status.customer;
  let salesman = status.marketer;


  async function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true)
    await fetch('http://127.0.0.1:8081/User/', {
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST",
      body:JSON.stringify({
        email: info.email,
        mobile_phone_number: info.tel,
        password: info.pass
      })
      
    }).then(res => {
      setIsLoading(false);
      if (res.statusText === 'Created') {
        setUser(res.data);
      }
    }).catch(err => {
      setIsLoading(false);
      let error = JSON.parse(err.request.responseText);
      setError(error)
    })
  }

  function statusHandler(buyer, seller) {
    if (seller) {
      setStatus({ customer: false, marketer: true });
    } else {
      setStatus({ customer: true, marketer: false });
    }
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

  function emailHandler(e) {
    setInfo({ ...info, email: e.target.value.toLowerCase().trim() });
  }

  function passHandler(e) {
    setInfo({ ...info, pass: e.target.value.toLowerCase().trim() });
  }

  return user?.email ? <Navigate to='/' /> : (
    <div className="min-vh-100 py-3 bg-primary d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={10} md={8} lg={5} className="bg-white mx-auto rounded">
            <div className="d-flex justify-content-center">
              <Image height="100px" width="100px" src={Logo} />
            </div>

            <div className="mx-5">
              <Form onSubmit={e => submitHandler(e)}>
                <h3>ثبت‌نام</h3>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-3 pe-5 border border-dark"
                    type="text"
                    placeholder="شماره موبایل"
                    value={info.tel}
                    onChange={(e) => numhandler(e)}
                    required
                  />
                </Form.Group>
                <div>{error.mobile_phone_number}</div>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-2 pe-5 border border-dark"
                    type="text"
                    placeholder="ایمیل"
                    value={info.email}
                    onChange={(e) => emailHandler(e)}
                    required
                  />
                  <div>{error.email}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    size="lg"
                    className="radius-4 p-3 pe-5 border border-dark"
                    type="password"
                    placeholder="رمز ورود"
                    value={info.pass}
                    onChange={(e) => passHandler(e)}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mt-3">
                  <Form.Check
                    type="radio"
                    label="فروشگاه دارم"
                    checked={status.marketer}
                    onChange={(marketer, customer) =>
                      statusHandler(salesman, shopper)
                    }
                  />
                  <Form.Check
                    type="radio"
                    label="مشتری هستم"
                    checked={status.customer}
                    onChange={(marketer, customer) =>
                      statusHandler(salesman, shopper)
                    }
                  />
                </div>

                <Col xs={10} md={8} lg={5} className="mx-auto mt-4">

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="rounded-pill w-100 text-light"
                  >
                    ثبت‌نام
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

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  user: state.user,
})

export default connect(mapStateToProps, { setIsLoading, setUser })(Register);
