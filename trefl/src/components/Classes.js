import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Classes = (props) => {
  const classesUrl =
    "https://trefle.io//api/v1/division_classes?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const searchParams = props.location.search;
  const divisionSlug =
    searchParams === "" ? null : props.location.search.match(/=(.*)$/)[1];

  const [classes, setClasses] = useState([]);
  const [nextPage, setNextPage] = useState(classesUrl);

  useEffect(() => {
    if (nextPage != null) {
      axios.get(nextPage).then((res) => {
        if (divisionSlug != null) {
          setClasses((prevClasses) => [
            ...prevClasses,
            ...res.data.data
              .filter((clazz) => clazz.division !== null)
              .filter(
                (clazz) =>
                  clazz.division.slug !== null && clazz.division.slug !== ""
              )
              .filter((clazz) => clazz.division.slug === divisionSlug)
              .map((clazz) => {
                return { id: clazz.id, name: clazz.name, slug: clazz.slug };
              }),
          ]);
        } else {
          setClasses((prevClasses) => [
            ...prevClasses,
            ...res.data.data.map((clazz) => {
              return { id: clazz.id, name: clazz.name, slug: clazz.slug };
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
      <h2 style={{ textAlign: "center" }}>Classes</h2>
      <div
        style={{
          textAlign: "left",
          margin: "15px",
          display: "block",
        }}
      >
        {classes.map((clazz) => (
          <p key={clazz.id}>
            <Link to={`/orders?class=${clazz.slug}`}>{clazz.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Classes);
