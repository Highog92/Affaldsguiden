import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch";
import sortingDetailsStyle from './Styles/SortingDetails.module.scss'
import { SortingDetails } from "../Components/SortingDetails/SortingDetails";
import { Accordion } from "../Components/Accordion/Accordion";
import { SearchBar } from "../Components/SearchBar/SearchBar";
export const SortingDetailsPage = () => {

    const { sortingId } = useParams()

    const sortingCategory = useFetch(`http://localhost:3000/section/${sortingId}`)
    // console.log(sortingCategory);

    // ---------------------------
    const sortingType = useFetch(`http://localhost:3000/category/details/2`)
    // ----------------------------
    console.log(sortingType, "Type");


    return (
        <section className={sortingDetailsStyle.SortingDetails}>
            <SearchBar/>
            {sortingCategory?.categories?.map((item) => {

                return (
                    <SortingDetails
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        trashTypeIcon={item.icon_filepath}
                        altTxt={item.image_filename}
                        bgColor={`#${item.color}`}
                    />
                )
            })}

            {sortingType?.types.map((item) => {
                //   Destrukturet kodet der er lavet om til sin egen værdi. Det gør det nemmere at få fat på værdierne 
                const { id, is_home, is_station } = item.rules;


                return (
                    
                    <Accordion
                        key={id}
                        title={item.title}
                        subTitleImg={item.image_filepath}
                        subTitleIcon={item.icon_filepath}
                        allowed={is_home ? <span style={{ backgroundColor: 'var(--lightGreen)' }}>Ja tak</span> : <span style={{ backgroundColor: 'var(--lightRed)' }}>Nej tak</span>}
                        notAllowed={is_station ? <span style={{ backgroundColor: 'var(--lightGreen)' }}>Ja tak</span> : <span style={{ backgroundColor: 'var(--lightRed)' }}>Nej tak</span>}
                    />

                )

            })}

        </section>
    )
}
