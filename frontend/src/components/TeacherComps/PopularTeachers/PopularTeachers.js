import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Axios from "axios";

const PopularTeachers = () => {
  const [teacherData, setTeacherData] = useState("");
  useEffect(() => {
    Axios.get("/api/teachers/")
      .then((result) => {
        console.log(result.data);
        setTeacherData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {teacherData
            ? teacherData.map((item) => {
                return (
                  <Col className="py-3" md={4}>
                    <Card>
                      <Card.Img
                        className="img-fluid"
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4s7leOCCfW8hcBbcpWAhpNo8VqEyRJCTtw&usqp=CAU"
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : "loading.."}
        </Row>
      </Container>
    </div>
  );
};

export default PopularTeachers;
