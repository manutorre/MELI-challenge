import React/*, {useEffect, useState}*/ from 'react';
import ItemCard from './ItemCard';
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
                {props.items ? props.items.map((result:any) => {
                    return <ItemCard item={result}/>
                }) : <div>No results</div>}
            </ul>
        </div>
    )
}

export default Results;