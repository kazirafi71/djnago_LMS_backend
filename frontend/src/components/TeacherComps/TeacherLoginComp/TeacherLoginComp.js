import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Axios from "axios";

const TeacherLoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Teacher Registration";
  }, []);

  const fromDataHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    Axios.post("/api/teacher-login/", formData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="mx-auto mt-5" md={6}>
            <Card className="p-4">
              <h4 className="text-center -py-3">Teacher Login</h4>
              <Form onSubmit={fromDataHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherLoginComp;
