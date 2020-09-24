import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = (props) => {
  const ordersUrl =
    "https://trefle.io//api/v1/division_orders?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI";
  const searchParams = props.location.search;
  const classSlug =
    searchParams === "" ? null : props.location.search.match(/=(.*)$/)[1];

  const [orders, setOrders] = useState([]);
  const [nextPage, setNextPage] = useState(ordersUrl);

  useEffect(() => {
    if (nextPage != null) {
      axios.get(nextPage).then((res) => {
        if (classSlug != null) {
          setOrders((prevOrders) => [
            ...prevOrders,
            ...res.data.data
              .filter((order) => order.division_class !== null)
              .filter(
                (order) =>
                  order.division_class.slug !== null &&
                  order.division_class.slug !== ""
              )
              .filter((order) => order.division_class.slug === classSlug)
              .map((order) => {
                return { id: order.id, name: order.name, slug: order.slug };
              }),
          ]);
        } else {
          setOrders((prevOrders) => [
            ...prevOrders,
            ...res.data.data.map((order) => {
              return { id: order.id, name: order.name, slug: order.slug };
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
      <h2 style={{ textAlign: "center" }}>Orders</h2>
      <div
        style={{
          textAlign: "left",
          margin: "15px",
          display: "block",
        }}
      >
        {orders.map((order) => (
          <p key={order.id}>
            <Link to={`/families?order=${order.slug}`}>{order.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Orders);
