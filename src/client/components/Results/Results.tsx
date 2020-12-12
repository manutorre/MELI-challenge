import React/*, {useEffect, useState}*/ from 'react';
//import axios from 'axios';

const Results = (props:any) => {
    //const [results, setResults] = useState([])
    /*useEffect(() => {
            axios.get("http://localhost:3000/api/items?q=etios").then(
                res => {
                    setResults(res.data.results)º
                }
            )
        , []})*/

    return(
        <div>
            <ul>
                {props.items ? props.items.map((result:any, index:any) => {
                    return <li key={index}>{result.title}</li>
                }) : <div>No results</div>}
            </ul>
        </div>
    )
}

export default Results;