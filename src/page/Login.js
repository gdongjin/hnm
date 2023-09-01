import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = ({ setAuthenticate, to }) => {
  console.log("tototo", to);
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  const goToSignUp = (event) => {
    event.preventDefault();
    setAuthenticate(false);
    navigate("/SighUp");
  };
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control type="id" placeholder="id" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="login" variant="danger" type="submit">
          로그인
        </Button>
        <span>
          <Button className="Id" variant="danger" type="submit">
            아이디 찾기
          </Button>
          <Button className="PassWord" variant="danger" type="submit">
            비번 찾기
          </Button>
        </span>
        <span>
          <Button className="SighUp" variant="danger" onClick={goToSignUp}>
            회원가입
          </Button>
        </span>
      </Form>
    </Container>
  );
};

export default Login;
