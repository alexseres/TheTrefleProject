import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [divisions, setDivisions] = useState([]);

  const divisionUrl =
    "https://trefle.io//api/v1/divisions?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";

  useEffect(() => {
    axios.get(divisionUrl).then((res) => {
      setDivisions((prevDivisions) => [
        ...prevDivisions,
        ...res.data.data.map((division) => {
          return { id: division.id, name: division.name, slug: division.slug };
        }),
      ]);
    });
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Home
      </h1>
      <h2 style={{ textAlign: "center" }}>Divisions</h2>
      <div
        style={{
          textAlign: "left",
          margin: "15px",
          display: "block",
        }}
      >
        {divisions.map((division) => (
          <p key={division.id}>
            <Link to={`/divisions?name=${division.slug}`}>{division.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
