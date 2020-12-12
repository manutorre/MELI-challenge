import React from 'react';
import style from './styles.scss'

const SearchInput = (onEnter) => {
    console.log(onEnter)
    return(
        <div className={style.searchInputContainer}>
            <input className={style.searchInput}/>
        </div>
    )
}

export default SearchInput;