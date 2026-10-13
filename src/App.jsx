
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import Departments from "./pages/Departments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import ApiEmployees from "./pages/ApiEmployees";
import { useSelector } from "react-redux";
import TaskManager from "./pages/TaskManager";

function App() {

  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <BrowserRouter>
     <div className={darkMode ? "app dark-mode" : "app"}>
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route
              path="/employees/:id"
              element={<EmployeeDetails />}
            />

            <Route path="/departments/*" element={<Departments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api-employees" element={<ApiEmployees />} />
            <Route path="/tasks" element={<TaskManager />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
