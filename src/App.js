import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.scss";
import Container from "./components/Container/Container";
import User from "./components/User/User";
import Update from "./components/Update/Update";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/todo-app" exact element={<Container />} />
          <Route path="/update" exact element={<Update />} />
        </Routes>
        <div className="themeSwitch">
          <h4>Theme</h4>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
