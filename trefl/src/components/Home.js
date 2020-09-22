import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [divisions, setDivisions] = useState([
    {
      id: null,
      name: null,
    },
  ]);

  const divisionUrl =
    "https://trefle.io//api/v1/divisions?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";

  // useEffect(() => {
  //   axios.get(divisionUrl).then((res) => {
  //     setDivisions([
  //       ...divisions,
  //       {
  //         id: res.data.id,
  //         name: res.data.name,
  //       },
  //     ]);
  //   });
  // }, [divisions]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home</h1>
      {divisions.map((division) => (
        <li key={division.id}>{division.name}</li>
      ))}
    </div>
  );
};

export default Home;
