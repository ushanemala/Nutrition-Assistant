import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import BMI from "./pages/BMI";
import WaterTracker from "./pages/WaterTracker";
import Meals from "./pages/Meals";
import Nutrition from "./pages/Nutrition";
import Progress from "./pages/Progress";
import Dietitian from "./pages/Dietitian";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Modules */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/water" element={<WaterTracker />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/dietitian" element={<Dietitian />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;