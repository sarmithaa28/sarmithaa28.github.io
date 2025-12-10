import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./CourseDetails";

// New pages (create them if not already created)
import EnrolledCourses from "./EnrolledCourses";
import Progress from "./Progress";
import Account from "./pages/Accounts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Course details */}
        <Route path="/courses/:id" element={<CourseDetails />} />

        {/* Dashboard sub-pages */}
        <Route path="/enrolled-courses" element={<EnrolledCourses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;   // ✅ Add this line