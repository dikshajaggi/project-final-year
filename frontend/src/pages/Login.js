import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarCart from "../components/NavbarCart";
import "../styles/Login.css";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMsg from "../components/ErrorMsg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault(); //prevents loading of the page again and again

    //whenever we are making an api that requires JSON data we need to provide headers
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/users/login",
        {
          email,
          password,
        },
        config
      );
      //storing email and pass in local storage
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarCart />

      <div className="loginWrapper">
        {error && <ErrorMsg variant="danger"> {error} </ErrorMsg>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              //whenever we are changing our email this onChange func will be called
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User ?{" "}
            <Link className="login-reg-link" to="/register">
              Register Here
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
