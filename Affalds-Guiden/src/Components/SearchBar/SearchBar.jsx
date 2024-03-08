import { useState } from "react"
import searchIcon from '../../assets/Images/Layout/icon-search.svg'
import searchBarStyle from './SearchBar.module.scss'
import { Link } from 'react-router-dom'
export function SearchBar() {
    
    const [searchResult, setSearchResult] = useState([])

    return (
        <section>
            <search className={searchBarStyle.searchBar}>
                <input type="search" placeholder='Søg på affald' onChange={(events) => setSearchResult(events.target.value)} />
                <Link to={`/searchPage/${searchResult}`}>

                    <img src={searchIcon} alt="Seek" />

                </Link>
            </search>
        </section>
    )
}
