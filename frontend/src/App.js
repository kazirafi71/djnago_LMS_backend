import "./App.css";
import HomeComp from "./components/HomeComp/HomeComp";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherRegisterComp from "./components/TeacherComps/TeacherRegisterComp/TeacherRegisterComp";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/teacher-registration" element={<TeacherRegisterComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
