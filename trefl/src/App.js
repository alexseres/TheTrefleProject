import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import Search from "./components/search/Search";


function App() {
  const accessToken = "8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const apiUrl = `https://trefle.io/api/v1/divisions?token=${accessToken}`;

  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search}/>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
