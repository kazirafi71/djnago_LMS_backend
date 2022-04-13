import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const TeacherMyCourses = () => {
  const [courses, setCourses] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`/api/teacher-course/${8}`)
      .then((result) => {
        setCourses(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(courses);
  if (!courses) {
    return <>Loading..</>;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <TeacherSidebar />
          </Col>
          <Col md={9}>
            <h4>My Courses</h4>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course Img</th>
                  <th>Total Enroll</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses &&
                  courses?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>
                          <img
                            style={{ width: "100px", height: "50px" }}
                            src={item.courseImg}
                            alt=""
                          />
                        </td>
                        <td>1233</td>
                        <td>
                          <Button
                            onClick={() =>
                              navigate(`/teacher/add-chapter/${item.id}`)
                            }
                            className="btn btn-primary"
                          >
                            Add Chapter
                          </Button>
                          <Button className="btn btn-danger">Delete</Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherMyCourses;
