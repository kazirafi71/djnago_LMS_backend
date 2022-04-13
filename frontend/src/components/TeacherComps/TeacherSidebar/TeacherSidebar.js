import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeacherSidebar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/teacher/dashboard">Dashboard</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/teacher/add-course">Add Course</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/teacher/my-courses">My Courses</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/teacher-dashboard">Dashboard</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/teacher-dashboard">Dashboard</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TeacherSidebar;
