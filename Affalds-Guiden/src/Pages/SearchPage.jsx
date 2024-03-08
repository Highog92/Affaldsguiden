import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import searchPageStyle from './Styles/SearchPageStyle.module.scss'
import { SearchBar } from "../Components/SearchBar/SearchBar"
import { Accordion } from "../Components/Accordion/Accordion"
export function SearchPage() {

    // Slug 
    const { searchWord } = useParams()
    const searchResult = useFetch(`http://localhost:3000/search/${searchWord}`)
    console.log(searchResult);


    return (

        <section className={searchPageStyle.searchPage}>
            <SearchBar />

            {searchResult && searchResult.data && searchResult.data.map((item) => {
                return (
                    <>
                        <Accordion
                            key={item.id}
                            title={item.title}
                            trashTypeIcon={item.icon_filepath}
                            altTxt={item.icon_filename} />
                        
                    </>

                )
            })}
        </section >
    )

}
