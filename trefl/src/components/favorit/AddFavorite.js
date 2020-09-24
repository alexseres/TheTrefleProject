﻿import React,{useContext} from 'react'
import FavoriteListContext from './FavoritListContext'



const AddFavorite = (props) => {
    const [favoritePlants, setFavoritePlants] = useContext(FavoriteListContext);

    const checkAndAdd = () =>{
        if(favoritePlants.includes(props.plant)){
            debugger;
            alert("It's already in the list.")
        }else{
            setFavoritePlants([...favoritePlants, props.plant])
        }

    }

    return (
        <div>
            <button onClick={checkAndAdd} value="catch">Add to favoritrs</button>
        </div>
    )
    
}

export default AddFavorite;
 