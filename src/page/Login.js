import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

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

        <ButtonGroup>
          <Button aria-label="First_Group" variant="primary">
            로그인
          </Button>
          <ButtonGroup aria-label="Second group" className="Id_pass">
            <Button variant="primary">아이디 찾기</Button>
            <Button className="Pass" variant="primary">
              비밀번호 찾기
            </Button>
          </ButtonGroup>
          <Button
            aria-label="Third group"
            className="SighUp"
            variant="primary"
            onClick={goToSignUp}
          >
            회원가입
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default Login;
