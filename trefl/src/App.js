import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";

function App() {
  const accessToken = "8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const apiUrl = `https://trefle.io/api/v1/divisions?token=${accessToken}`;

  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
