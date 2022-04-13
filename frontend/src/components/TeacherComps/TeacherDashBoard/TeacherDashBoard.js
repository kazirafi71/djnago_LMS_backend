import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";

const TeacherDashBoard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <TeacherSidebar />
          </Col>
          <Col md={9}>
            <h4>Welcome to the Teacher Dashboard</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherDashBoard;
