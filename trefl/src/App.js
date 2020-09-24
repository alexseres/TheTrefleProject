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
import Classes from "./components/Classes";
import Divisions from "./components/Divisions";
import Orders from "./components/Orders";
import Families from "./components/Families";
import Genuses from "./components/Genuses";
import Species from "./components/Species";

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
            <Route exact path="/search" component={Search} />
            <Route exact path="/plant-details" component={PlantDetails} />
            <Route path="/divisions" component={Divisions} />
            <Route path="/classes" component={Classes} />
            <Route path="/orders" component={Orders} />
            <Route path="/families" component={Families} />
            <Route path="/genuses" component={Genuses} />
            <Route path="/species" component={Species} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
