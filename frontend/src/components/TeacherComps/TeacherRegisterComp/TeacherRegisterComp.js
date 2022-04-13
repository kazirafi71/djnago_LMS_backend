import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Axios from "axios";

const TeacherRegisterComp = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [skills, setSkills] = useState("");
  useEffect(() => {
    document.title = "Teacher Registration";
  }, []);

  const fromDataHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("qualification", qualification);
    formData.append("mobile_no", mobile_no);
    formData.append("skills", skills);

    Axios.post("/api/teachers/", formData)
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
              <h4 className="text-center -py-3">Teacher Registration</h4>
              <Form onSubmit={fromDataHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter phone number"
                    onChange={(e) => setMobile_no(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Qualification"
                    onChange={(e) => setQualification(e.target.value)}
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherRegisterComp;
