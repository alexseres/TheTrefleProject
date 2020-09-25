import React, { useState, useEffect } from "react";
import axios from 'axios'
import AddFavorite from "./favorit/AddFavorite";

const PlantDetails = (props) => {
  const [plantData, setPlantData] = useState([]);
  const [idx, setIdx] = useState(props.location.state.id);
  

  useEffect(() => {

    fetch(
      `https://trefle.io/api/v1/species/${idx}?token=RHxIcD6YqLzQoeCHuyF3ur8AFaEiGwknPb34ufApQNM`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((plantData) => {
        const plantDetail = plantData.data;

        setPlantData((plantData = plantDetail));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{plantData.common_name}</h1>
      <p>{plantData.scientific_name}</p>
      <p>{plantData.family_common_name}</p>
      <img src={plantData.image_url} alt={plantData.common_name} />
      <AddFavorite plant={<div>
          <p>{plantData.common_name}</p>
          <img src={plantData.image_url} alt={plantData.common_name} />
      </div>}/>
    </div>
  );
};

export default PlantDetails;
