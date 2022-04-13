import "./App.css";
import HomeComp from "./components/HomeComp/HomeComp";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherRegisterComp from "./components/TeacherComps/TeacherRegisterComp/TeacherRegisterComp";
import PopularTeachers from "./components/TeacherComps/PopularTeachers/PopularTeachers";
import TeacherLoginComp from "./components/TeacherComps/TeacherLoginComp/TeacherLoginComp";
import TeacherDashBoard from "./components/TeacherComps/TeacherDashBoard/TeacherDashBoard";
import TeacherAddCourse from "./components/TeacherComps/TeacherAddCourse/TeacherAddCourse";
import TeacherMyCourses from "./components/TeacherComps/TeacherMyCourses/TeacherMyCourses";
import TeacherAddChapter from "./components/TeacherComps/TeacherAddChapter/TeacherAddChapter";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/teacher-registration" element={<TeacherRegisterComp />} />
        <Route path="/teacher-login" element={<TeacherLoginComp />} />
        <Route path="/popular-teachers" element={<PopularTeachers />} />
        <Route path="/teacher/dashboard" element={<TeacherDashBoard />} />
        <Route path="/teacher/add-course" element={<TeacherAddCourse />} />
        <Route path="/teacher/my-courses" element={<TeacherMyCourses />} />
        <Route
          path="/teacher/add-chapter/:courseId"
          element={<TeacherAddChapter />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
