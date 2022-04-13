import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";
import Axios from "axios";

const TeacherAddChapter = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [courseImg, setCourseImg] = useState("");
  const [Remarks, setRemarks] = useState("");

  const courseDataHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("Remarks", Remarks);
    formData.append("courseImg", courseImg);

    formData.append("teacher", 8);
    Axios.post("/api/course/", formData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container className="">
        <Row>
          <Col md={3}>
            <TeacherSidebar />
          </Col>
          <Col md={9}>
            <Card className="p-4">
              <h4>Add Chapter</h4>

              <Form onSubmit={courseDataHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Course Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder=""
                    onChange={(e) => setCourseImg(e.target.files[0])}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Remarks"
                    rows={3}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter description"
                    rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Add Course
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherAddChapter;
