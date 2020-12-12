import React from 'react';
import style from './styles.scss';
import SearchInput from './SearchInput';

const SearchBar = (props:any) => {
    return(
        <div className={style.topBar}>
            <div className={style.searchBarContainer}>
                <div>Logo</div>
                <SearchInput onEnter={props.onEnter}/>
            </div>
        </div>
    )
}

export default SearchBar;