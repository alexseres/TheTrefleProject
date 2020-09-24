import React,{useEffect,useState} from 'react';
import search from './searchUtils';
import styled from 'styled-components';


export default function Search() {
    const [results, setResults] = useState([])
    const [input,setInput] = useState("");
    const [loading, setLoading] = useState(false);
    //const speciesUrl = `https://trefle.io//api/v1/species/search?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI&q=${input}`
    const [filteredResults, setFilteredResults] = useState([]);


    const handleChange = (e) => {
        async function fetchData(){
            let value;
            let response;
            setLoading(true);
            if(e.target.value == ""){
                value = ''
                setResults([]);
            }else{
                value ='&q=' +e.target.value;
                response = await search(`https://trefle.io//api/v1/species/search?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI${value}`);
                setResults(response); 
            }      
            //const response = await search(`https://trefle.io//api/v1/species/search?token=8RYlIatUUjxLOhPVAz22a6pVEYhePGXdjwiwToaJKDI${value}`);
            setLoading(false);
        }     
        fetchData();
        e.preventDefault();
        setInput(e.target.value);  
    };   

    
    if(loading){
        return<p>Loading data...</p>;
    }
    

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search data"
                //onChange={e => onChangeHandler(e)}
                
                onChange={handleChange}
                value={input}
                autoFocus/>
            {results.map((result) => (
            <div key={result.id}>
                <Image src={result.image_url}></Image>
                 {result.common_name}</div>))}    
            </div>
        )
    }

    const Image = styled.img`
        display: block;
        max-width: 50px;
        max-height: 50px;
        width: auto;
        height: auto;
    `