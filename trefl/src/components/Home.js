import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ThemeContext from "./context/ThemeContext";
import { AppTheme } from "./Colors";

const Home = () => {
  const [divisions, setDivisions] = useState([]);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const divisionUrl =
    "https://trefle.io//api/v1/divisions?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";

  useEffect(() => {
    axios.get(divisionUrl).then((res) => {
      setDivisions((prevDivisions) => [
        ...prevDivisions,
        ...res.data.data.map((division) => {
          return { id: division.id, name: division.name };
        }),
      ]);
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Home
      </h1>
      {divisions.map((division) => (
        <li key={division.id}>{division.name}</li>
      ))}
    </div>
  );
};

export default Home;
