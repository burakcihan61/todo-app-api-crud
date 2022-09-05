import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Read from "./components/read/Read";
import Update from "./components/update/Update";
import "./App.css";
import UserLogin from "./components/UserLogin.js/UserLogin";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container App" id={theme}>
        <h2 className="todoAppTitle">To Do App</h2>
        <br />
        <Routes>
          <Route path="/read" element={<Read />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
        <h4>Theme</h4>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
