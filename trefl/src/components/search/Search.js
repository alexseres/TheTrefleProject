import React,{useEffect,useState} from 'react';
import axios from 'axios';


export default function Search() {
    const [results, setResults] = useState([])
    const speciesUrl = "https://trefle.io//api/v1/species?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI"
    
    useEffect( () => {
        async function fetchData(){
            const response = await axios.get(speciesUrl)
            // setResults((prevResults) => [
            //     ...prevResults,
            //     ...response.data.data.map((dataBlock) => {
            //         return {}
            //     })
            // ])
            const r = response.data.data;
            setResults(response.data.data);

            
        }
        fetchData();
    },[]);
    
   


    return (
    <p>ok</p>
    )
        
        
    
}
