import React/*, {useEffect, useState}*/ from 'react';
import ItemCard from './ItemCard/ItemCard';
import style from './Results.scss'
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
        <div className={style.container}>
            <div>
                {props.items ? props.items.map((result:any, key:number) => {
                    return <ItemCard key={key} item={result}/>
                }) : <div>No results</div>}
            </div>
        </div>
    )
}

export default Results;