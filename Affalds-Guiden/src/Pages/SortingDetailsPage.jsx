import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch";
import sortingDetailsStyle from './Styles/SortingDetails.module.scss'
import { SortingDetails } from "../Components/SortingDetails/SortingDetails";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
export const SortingDetailsPage = () => {

    const { sortingId } = useParams()
    console.log(sortingId);

    const sorting = useFetch(`http://localhost:3000/section/${sortingId}`)
    console.log(sorting);


    return (
        <section className={sortingDetailsStyle.SortingDetails}>

            {sorting?.categories?.map((item) => {

                return (
                    <SortingDetails
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
