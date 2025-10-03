import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard"; // Make sure this file exists

function App() {
  return (
    <>
      <h1 className="text-3xl text-blue-700 font-bold">Hello world!</h1>

      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Admin dashboard page */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Catch-all unknown paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
