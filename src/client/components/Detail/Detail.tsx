import React from 'react';
import styles from './Detail.scss'

const Detail = ( props: { detalle: string}) => {
    console.log("manu")
    return(
        <div className={styles.container}>
            <h1>
                {props.detalle}
            </h1>
            <p>
                this is an example paragraph
            </p>
        </div>
    )
}

export default Detail