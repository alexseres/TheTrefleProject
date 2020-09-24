import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Genuses = (props) => {
  const genusesUrl =
    "https://trefle.io//api/v1/genus?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const searchParams = props.location.search;
  const familySlug =
    searchParams === "" ? null : props.location.search.match(/=(.*)$/)[1];

  const [genuses, setGenuses] = useState([]);
  const [nextPage, setNextPage] = useState(genusesUrl);

  useEffect(() => {
    if (nextPage != null && genuses.length < 40) {
      axios.get(nextPage).then((res) => {
        if (familySlug != null) {
          setGenuses((prevGenuses) => [
            ...prevGenuses,
            ...res.data.data
              .filter((genus) => genus.family !== null)
              .filter(
                (genus) =>
                  genus.family.slug !== null && genus.family.slug !== ""
              )
              .filter((genus) => genus.family.slug === familySlug)
              .map((genus) => {
                return { id: genus.id, name: genus.name, slug: genus.slug };
              }),
          ]);
        } else {
          setGenuses((prevGenuses) => [
            ...prevGenuses,
            ...res.data.data.map((genus) => {
              return { id: genus.id, name: genus.name, slug: genus.slug };
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
      <h2 style={{ textAlign: "center" }}>Genuses</h2>
      <div
        style={{
          textAlign: "left",
          margin: "15px",
          display: "block",
        }}
      >
        {genuses.map((genus) => (
          <p key={genus.id}>
            <Link to={`/species?genus=${genus.slug}`}>{genus.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Genuses;
