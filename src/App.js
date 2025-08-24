import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";   
import Profile from "./pages/Profile";       
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', Arial, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 14px",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: darkMode ? "#818cf8" : "#667eea",
          color: "#fff",
          border: "none",
          zIndex: 1000,
          outline: "none",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* Add other routes here */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
