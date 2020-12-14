import React from 'react';
import style from './ItemCard.scss'

const redirectToItem = (id:string) => {
    window.location.replace('/items/' + id)
}

const Item = (props:any) => {
    return(
        <div onClick={() => redirectToItem(props.item.id)} className={style.container}>
            <img className={style.image} src={props.item.picture}></img>
            <div className={style.details}>
                <h1>$ {props.item.price.amount}</h1>
                <h2>{props.item.title}</h2>
            </div>
            <span className={style.location}>Capital federal</span>
        </div>
    )
}

export default Item;