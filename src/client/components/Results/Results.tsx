import React/*, {useEffect, useState}*/ from 'react';
import ItemCard from './ItemCard/ItemCard';
import style from './Results.scss'
import BreadCrumb from '../BreadCrumb/BreadCrumb';

const Results = (props:any) => {
    return(
        <>
            <BreadCrumb path={props.pathFromRoot}/>
            <div className={style.container}>
                <div>
                    {props.items ? props.items.map((result:any, key:number) => {
                        return <ItemCard key={key} item={result}/>
                    }) : <div>No results</div>}
                </div>
            </div>
        </>
    )
}

export default Results;