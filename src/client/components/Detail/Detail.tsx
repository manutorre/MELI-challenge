import React from 'react';
import styles from './Detail.scss'
import {Container, Row, Col, Button} from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

const formatAmount = (amount:number, decimal: number) => {
    let integerPart = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    let decimalFormatted = decimal.toString().length > 2 ? decimal.toString().slice(0,2) : decimal.toString();
    let decimalPart = decimalFormatted !== "0" ? (',' + decimalFormatted) : '';
    return integerPart + decimalPart;
}

const Detail = ( props: any) => {
    const {detail, path} = props;
    return(
        <>
        <BreadCrumb path={path}/>
        <Container className={styles.container}>
            <Row className={styles.details}>
                <Info detail={detail}/>
            </Row>
            <Row>
            <Col xl="8" className={styles.description}>
                <h2>Descripción del producto</h2>
                <p>{detail.description}</p>
            </Col>
            </Row>
        </Container>
        </>
    )
}

const Info = (props:any) => {
    const {detail} = props;
    return(
        <>
            <Col xl="6">
                <img className={styles.productImage} src={detail.picture}/>
            </Col>
            <Col xl="2">
            </Col>
            <Col xl="4" className={styles.productDetails}>
                <>
                    <div>
                        <span>{detail.condition === 'new' ? 'nuevo' : 'usado'}</span> - <span>{detail.sold_quantity} vendidos</span>
                    </div>
                    <h2 className={styles.title}>
                        {detail.title}
                    </h2>
                    <h1 className={styles.amount}>
                        $ {formatAmount(detail.price.amount, detail.price.decimal)}
                    </h1>
                    <Button size="lg" className={styles.button} variant="primary">Comprar</Button>
                </>
            </Col>
        </> 
    )
}



export default Detail