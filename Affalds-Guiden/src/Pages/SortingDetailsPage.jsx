import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch";
import sortingDetailsStyle from './Styles/SortingDetails.module.scss'
import { SortingDetails } from "../Components/SortingDetails/SortingDetails";

export const SortingDetailsPage = () => {

    const { sortingId } = useParams()

    // -------------------------
    const sortingCategoryDetails = useFetch(`http://localhost:3000/category/details/`)
    console.log(sortingCategoryDetails, "Kategori Detaljer");
    // ---------------------

    const sortingCategory = useFetch(`http://localhost:3000/section/${sortingId}`)
    console.log(sortingCategory);


    return (
        <section className={sortingDetailsStyle.SortingDetails}>

            {sortingCategory?.categories?.map((item) => {

                return (
                    <SortingDetails
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        trashTypeIcon={item.icon_filepath}
                        altTxt={item.image_filename}
                        bgColor={`#${item.color}`}
                    />

                )

            })}

        </section>
    )
}
