import { Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";

function App() {
  return (
    <GoogleOAuthProvider clientId="887535015691-j3a0vmpiofcfmsadh9d66031sv61vpva.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />              
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />                         
        <Route path="/admin-dashboard" element={<AdminDashboard />} />      
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
