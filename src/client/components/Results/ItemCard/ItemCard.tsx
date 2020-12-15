import React from 'react';
import style from './ItemCard.scss'
import {Container, Row, Col} from 'react-bootstrap';

const redirectToItem = (id:string) => {
    window.location.href = ('/items/' + id)
}

const formatAmount = (amount:number, decimal: number) => {
    let integerPart = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    let decimalFormatted = decimal.toString().length > 2 ? decimal.toString().slice(0,2) : decimal.toString();
    let decimalPart = decimalFormatted !== "0" ? (',' + decimalFormatted) : '';
    return integerPart + decimalPart;
}

const Item = (props:any) => {
    return(
        <Container fluid className="p-0">
            <div onClick={() => redirectToItem(props.item.id)} className={style.container}>
                <Row>
                    <Col md="11" xs="12" sm="12">
                        {props.item.picture && <img className={style.image} src={props.item.picture}></img>}
                        <div className={style.details}>
                            <h1>$ {formatAmount(props.item.price.amount, props.item.price.decimal)}</h1>
                            <h2>{props.item.title}</h2>
                        </div>
                    </Col>
                    <Col md="1" xs="auto" sm="auto">
                        <span className={style.location}>{props.item.location}</span>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Item;