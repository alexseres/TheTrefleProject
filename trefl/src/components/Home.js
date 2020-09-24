import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Home
      </h1>
      <h3 style={{ textAlign: "center" }}>
        <Link to="/divisions">Vascular Plants</Link>
      </h3>
    </div>
  );
};

export default Home;
