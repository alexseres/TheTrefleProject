﻿import FavoriteListContext from "./FavoritListContext";
import React,{ useContext} from 'react';



const FavoritePlants = () => {
    const [favoritePlants, setFavoritePlants] = useContext(FavoriteListContext);
    if(favoritePlants.length === 0){
        return <div>
            <p>No favorites slected</p>
        </div>
    }
    else if(favoritePlants.length > 0){
        return favoritePlants.map((plant) =>(
            plant
        ));
    }

}

export default  FavoritePlants