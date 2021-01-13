// import React from "react";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import useConfig from "./useConfig";
import { Redirect } from "react-router-dom";

export default function Login() {
  //   const validEmail = "kjdchapman@gmail.com";
  //   const validPassword = "F@rmerC@rn";

  const validEmail = "admin@gmail.com";
  const validPassword = "admin";
  const config = useConfig();

  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    if (email === validEmail && password === validPassword) {
      config.app.IS_AUTHENTICATED = "true";

      setLogged(true);
      setValidated(true);
    } else {
      alert("Failure");

      setLogged(false);
      setValidated(false);
    }
  }

  if (logged === true) {
    return <Redirect to="/dev/home" />;
  }

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
