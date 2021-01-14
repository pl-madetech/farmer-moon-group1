import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import useConfig from "./useConfig";
import { Redirect, useLocation } from "react-router-dom";
import { RouteProps } from "../Routes/RouteProps";

interface stateType {
  from: { pathname: string };
}

export default function Login() {
  const validEmail = "kjdchapman@gmail.com";
  const validPassword = "admin";
  const config = useConfig();
  const { state } = useLocation<stateType>();

  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    event.target.className += " invalid";

    if (email === validEmail && password === validPassword) {
      config.app.IS_AUTHENTICATED = true;

      setLogged(true);
      setValidated(true);
    } else {
      alert("Failure");

      setLogged(false);
      setValidated(false);
    }
  }

  if (logged || config.app.IS_AUTHENTICATED) {
    return <Redirect to={state?.from || RouteProps.HOME_URL} />;
  }

  console.log("Before render HTML");

  return (
    <Container>
      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

