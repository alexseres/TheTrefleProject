import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Families = (props) => {
  const familiesUrl =
    "https://trefle.io//api/v1/families?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const searchParams = props.location.search;
  const orderSlug =
    searchParams === "" ? null : props.location.search.match(/=(.*)$/)[1];

  const [families, setFamilies] = useState([]);
  const [nextPage, setNextPage] = useState(familiesUrl);

  useEffect(() => {
    if (nextPage != null) {
      axios.get(nextPage).then((res) => {
        if (orderSlug != null) {
          setFamilies((prevFamilies) => [
            ...prevFamilies,
            ...res.data.data
              .filter((family) => family.division_order !== null)
              .filter(
                (family) =>
                  family.division_order.slug !== null &&
                  family.division_order.slug !== ""
              )
              .filter((family) => family.division_order.slug === orderSlug)
              .map((family) => {
                return { id: family.id, name: family.name, slug: family.slug };
              }),
          ]);
        } else {
          setFamilies((prevFamilies) => [
            ...prevFamilies,
            ...res.data.data.map((family) => {
              return { id: family.id, name: family.name, slug: family.slug };
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
      <h2 style={{ textAlign: "center" }}>Families</h2>
      <div
        style={{
          textAlign: "left",
          margin: "15px",
          display: "block",
        }}
      >
        {families.map((family) => (
          <p key={family.id}>
            <Link to={`/genuses?family=${family.slug}`}>{family.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Families);
