import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import ThemeContext from "./components/context/ThemeContext";
// import Header from "./components/Header";
// import Main from "./components/Main";
import AppTheme from "./components/Colors";
import "./App.css";

function App() {
  // const accessToken = "8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  // const apiUrl = `https://trefle.io/api/v1/divisions?token=${accessToken}`;

  const themeHook = useState("light");
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[themeHook[0]];

  return (
    <ThemeContext.Provider value={themeHook}>
      <div
        className="App"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        {/* <Header />
        <Main /> */}
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
