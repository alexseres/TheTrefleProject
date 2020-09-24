import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ThemeContext from "./context/ThemeContext";
import { AppTheme } from "./Colors";

const Divisions = () => {
  const [divisions, setDivisions] = useState([]);

  // const currentTheme = AppTheme[themeHook[0]];

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
    <ThemeContext.Consumer>
      {(theme) => (
        <React.Fragment>
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
                <Link
                  to={`/classes?division=${division.slug}`}
                  // style={{
                  //   color: `${AppTheme[theme[0]].linkColor}`,
                  //   visited: `${AppTheme[theme[0]].linkVisitedColor}`,
                  // }}
                >
                  {division.name}
                </Link>
              </p>
            ))}
          </div>
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
};

export default Divisions;
