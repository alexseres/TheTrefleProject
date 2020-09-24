import React, { useState, useEffect } from "react";
import axios from "axios";
import { capitalize } from "../util/stringUtil";

const Species = (props) => {
  const speciesUrl =
    "https://trefle.io//api/v1/species?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const searchParams = props.location.search;
  const genusSlug =
    searchParams === ""
      ? null
      : capitalize(props.location.search.match(/=(.*)$/)[1]);

  const [species, setSpecies] = useState([]);
  const [nextPage, setNextPage] = useState(speciesUrl);

  useEffect(() => {
    console.log(species);
    console.log(genusSlug);
    if (nextPage != null && species.length < 40) {
      axios.get(nextPage).then((res) => {
        if (genusSlug != null) {
          setSpecies((prevSpecies) => [
            ...prevSpecies,
            ...res.data.data
              .filter((specie) => specie.genus !== null && specie.genus !== "")
              .filter((specie) => specie.genus === genusSlug)
              .map((specie) => {
                return {
                  id: specie.id,
                  commonName: specie.common_name,
                  scientificName: specie.scientific_name,
                  slug: specie.genus,
                };
              }),
          ]);
        } else {
          setSpecies((prevSpecies) => [
            ...prevSpecies,
            ...res.data.data.map((specie) => {
              return {
                id: specie.id,
                commonName: specie.common_name,
                scientificName: specie.scientific_name,
                slug: specie.genus,
              };
            }),
          ]);
        }
        res.data.links.next == null
          ? setNextPage(null)
          : setNextPage(
              "https://trefle.io/" +
                res.data.links.next +
                "&token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI"
            );
      });
    }
  }, [nextPage]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Species</h2>
      <div
        style={{
          textAlign: "left",
          margin: "15px",
          display: "block",
        }}
      >
        {species.map((specie) => (
          <p key={specie.id}>{specie.scientificName}</p>
        ))}
      </div>
    </div>
  );
};

export default Species;
