import React, {useEffect, useState} from 'react';
import styles from './SearchInput.scss'

const SearchInput = (onEnter) => {

    const [inputText, changeText] = useState('')

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const search = params.get('search');
        changeText(search)
    }, [])

    const handleInput = (event) => {
        changeText(event.target.value)
        if ((event.key === 'Enter' || event.type === 'click') && inputText && inputText !== '') {
            window.location.href = '/items?search=' + inputText
        }
    }
    
    return(
        <div className={styles.searchInputContainer}>
            <input data-testid="search-input" defaultValue={inputText} placeholder="Nunca dejes de buscar" className={styles.searchInput} onKeyUp={handleInput}/>
            <div onClick={handleInput} className={styles.searchButtonContainer}>
                <img className={styles.searchButton} src="/static/search.png"/>
            </div>
        </div>
    )
}

export default SearchInput;