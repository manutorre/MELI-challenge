import React from 'react';
import styles from './Detail.scss'

const Detail = ( props: any) => {
    const {detail} = props;
    return(
        <div className={styles.container}>
            <Info detail={detail}/>
            <div className={styles.description}>
                <h2>
                    Descripción del producto
                </h2>
                <p>
                    {detail.description}
                </p>
            </div>
        </div>
    )
}

const Info = (props:any) => {
    const {detail} = props;
    return(
        <div className={styles.info}>
            <img src={detail.picture}/>
            <div>
                <div className={styles.detailInfo}>
                    <span>{detail.condition === 'new' ? 'nuevo' : 'usado'}</span> - <span>{detail.sold_quantity} vendidos</span>
                </div>
                <h2>
                    {detail.title}
                </h2>
                <h1>
                    $ {detail.price.amount}
                </h1>
                <button>
                    Comprar
                </button>
            </div> 
        </div>
    )
}



export default Detail