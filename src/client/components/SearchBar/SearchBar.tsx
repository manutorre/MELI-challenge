import React from 'react';
import style from './Searchbar.scss';
import SearchInput from './SearchInput/SearchInput';

const SearchBar = (props:any) => {
    
    const goHome = () => {
        window.location.href = '/'
    }

    return(
        <div className={style.topBar}>
            <div className={style.searchBarContainer}>
                <img onClick={goHome} className={style.image} src="/static/logo.png"></img>
                <SearchInput onEnter={props.onEnter}/>
            </div>
        </div>
    )
}

export default SearchBar;