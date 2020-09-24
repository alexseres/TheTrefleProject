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
import FavoritePlants from "./components/favorit/FavoritePlants";
import FavoriteListContext from "./components/favorit/FavoritListContext";

function App() {
  const themeHook = useState("light");
  const currentTheme = AppTheme[themeHook[0]];
  const favoritePlants = useState([])
  return (
    <ThemeContext.Provider value={themeHook}>
        <FavoriteListContext.Provider value={favoritePlants}>
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
            <Route exact path="/species-detail/:id" component={PlantDetails} />
            <Route exact path="/favorite-plants" component={FavoritePlants} />
          </Switch>
          <Footer />
        </Router>
      </div>
        </FavoriteListContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
