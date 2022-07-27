// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";

function App() {
  const [mode, setmode] = useState("light");

  const toggle = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#2a2844";
    }
  };
  const afterLogin=()=>{
    
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar navbarTitel="TextUtills" toggleMode={toggle} ThemeMode={mode} />
        <div className="container mt-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Textarea
                  heading="Enter text to analysis below"
                  ThemeMode={mode}
                />
              }
            >
              {/* <Route index element={<Textarea heading="Enter text to analysis below" ThemeMode={mode} />} /> */}
            </Route>
            <Route path="about" element={<About ThemeMode={mode} />} />
            <Route path="contact" element={<Contact ThemeMode={mode} />} />
            <Route path="signin" element={<Signin ThemeMode={mode} redirectDashboard={afterLogin} />} />
            <Route path="signup" element={<Signup ThemeMode={mode} />} />
            <Route path="dashboard" element={<Dashboard ThemeMode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
