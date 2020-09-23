import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import { MyThemeProvider } from "./components/ThemeContext";

function App() {
  const accessToken = "8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const apiUrl = `https://trefle.io/api/v1/divisions?token=${accessToken}`;

  return (
    <MyThemeProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </MyThemeProvider>
  );
}

export default App;
