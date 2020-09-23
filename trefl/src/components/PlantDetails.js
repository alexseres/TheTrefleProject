import React, { useState, useEffect } from "react";

const PlantDetails = () => {
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        fetch('https://trefle.io/api/v1/plants/183086?token=RHxIcD6YqLzQoeCHuyF3ur8AFaEiGwknPb34ufApQNM')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(plantData => {
                const plantDetail = plantData.data;

                setPlantData(
                    plantData = plantDetail
                );
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>{plantData.common_name}</h1>
            <p>{plantData.scientific_name}</p>
            <p>{plantData.family_common_name}</p>
            <img src={plantData.image_url} alt={plantData.common_name}/>
        </div>
    );
    
};

export default PlantDetails;
