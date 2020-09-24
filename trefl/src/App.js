import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import ThemeContext from "./components/context/ThemeContext";
import { AppTheme } from "./components/Colors";
import "./App.css";
import PlantDetails from "./components/PlantDetails";
import Search from "./components/search/Search";


function App() {
  const themeHook = useState("light");
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
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search}/>
            <Route exact path="/plant-details" component={PlantDetails} />
          
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
