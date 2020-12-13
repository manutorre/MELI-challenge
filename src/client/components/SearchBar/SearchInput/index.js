import React from 'react';
import style from './styles.scss'

const SearchInput = (onEnter) => {

    const handleInput = (event) => {
        if (event.key === 'Enter') {
            window.location.replace('/items?search=' + event.target.value)
        }
    }

    return(
        <div className={style.searchInputContainer}>
            <input className={style.searchInput} onKeyDown={handleInput}/>
        </div>
    )
}

export default SearchInput;