// import logo from './logo.svg';

import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";     //<Switch> has been replaced by <Routes> and component have been replaced by element 

function App() {
  const [mode, setMode] = useState("light");
  const [mode2, setMode2] = useState("light");
  const [mode3, setMode3] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleBar = () => {
    if (mode === "light") {
      setMode("dark");
      setMode2("dark");
      setMode3("dark");
      document.body.style.backgroundColor = "#2a2a35";
      document.body.style.color = "white";
      document.title = "TextUtility-Dark Mode";
      // showAlert("success", "Dark mode has been enabled");
    } else {
      setMode("light");
      setMode2("light");
      setMode3("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black  ";
      document.title = "TextUtility-Light Mode";
      // showAlert("success", "Light mode has been enabled");
    }
  };
  const toggleBar2 = () => {
    if (mode2 === "light") {
      setMode2("dark");
      setMode("dark");
      setMode3("dark");
      document.body.style.backgroundColor = "#282828";
      document.body.style.color = "white";
      document.title = "TextUtility-Dark Mode";
      // showAlert("success", "Dark mode has been enabled");
    } else {
      setMode2("light");
      setMode("light");
      setMode3("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black  ";
      document.title = "TextUtility-Light Mode";
      // showAlert("success", "Light mode has been enabled");
    }
  };
  const toggleBar3 = () => {
    if (mode2 === "light") {
      setMode3("dark");
      setMode2("dark");
      setMode("dark");
      document.body.style.backgroundColor = "#15202B";
      document.body.style.color = "white";
      document.title = "TextUtility-Dark Mode";
      // showAlert("success", "Dark mode has been enabled");
    } else {
      setMode3("light");
      setMode2("light");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black  ";
      document.title = "TextUtility-Light Mode";
      // showAlert("success", "Light mode has been enabled");
    }
  };
  return (
    // <> is JSX fragment and helps us to return more than one component to our index.js
    <>
      <Router>
        <Navbar
          text="TextUtils"
          about="About Us"
          mode={mode}
          toggleBar={toggleBar}
          mode2={mode2}
          toggleBar2={toggleBar2}
          mode3={mode3}
          toggleBar3={toggleBar3}
        />
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <Form heading="Enter the text to analyze" showAlert={showAlert} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
