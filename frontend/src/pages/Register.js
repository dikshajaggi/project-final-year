import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarCart from "../components/NavbarCart";
import "../styles/Register.css";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMsg from "../components/ErrorMsg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //provided this default pic link- if user dosen't provide, this will be used
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null); //if user types wrong password, then this msg will be displayed
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "/users",
          {
            name,
            email,
            password,
          },
          config
        );

        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <NavbarCart />
      <div className="registerWrapper">
        {error && <ErrorMsg variant="danger">{error}</ErrorMsg>}
        {message && <ErrorMsg variant="danger">{message}</ErrorMsg>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group as={Row} controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="mb-3">
          <Col>
            Have an Account ?{" "}
            <Link to="/login" className="login-reg-link">
              Login
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Register;
