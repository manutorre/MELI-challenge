import React from 'react';
import styles from './BreadCrumb.scss';

const BreadCrumb = ( props: any) => {
    const {path} = props;
    return(
        <div className={styles.container}>
            {path.map((step:any, index:number) => {
                return step.name + (index < path.length -1 ? ' > ' : '')
            })}
        </div>
    )
}

export default BreadCrumb;