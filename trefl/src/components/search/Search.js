import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
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
            
            <StyledColumnContainer class="row equal">
                {results.map((result) => (
            
                    <StyledCard key={result.id} >
                        <Image src={result.image_url}/>
                        <Container clas="container">
                            <p>{result.common_name}</p>
                            <Link to={{pathname:`/species-detail/${result.id}`, state:{id:result.id}}}> Go to Details</Link>
                        </Container>
                    </StyledCard>

                ))} 
            </StyledColumnContainer>       
        </div>
        )
    }



    const Image = styled.img`
        margin-left:auto;
        margin-right:auto;
        border-radius: 5px 5px 0 0;
        display: block;
        max-width: 120px;
        max-height: 120px;
        object-fit:cover;
        width: auto;
        height: auto;
    `

    const StyledCard = styled.div`

        background-size:cover;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 90%;
        border-radius: 5px;
        &hover{
            box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);
        };
        font-size: 100%;



    `
    const StyledColumnContainer = styled.div`
        display:grid;
        grid-template-columns: auto auto auto;
        
    `


    const Container = styled.div`
        padding: 2px 16px;
    `