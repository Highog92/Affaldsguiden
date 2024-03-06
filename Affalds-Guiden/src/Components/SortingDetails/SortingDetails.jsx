import sortingDetailsStyle from './SortingDetails.module.scss'
import accordionArrow from '../../assets/Images/Layout/check-circle.svg'
import { useFetch } from '../../Hooks/useFetch';

export function SortingDetails({ id, bgColor, trashTypeIcon, trashImg, altTxt, title, allowed, notAllowed }) {

    const sortingCategoryDetails = useFetch(`http://localhost:3000/category/details/${id}`)
    console.log(id, "ID");
    console.log(title, "titel");
    return (
        <section style={{ backgroundColor: bgColor }} className={sortingDetailsStyle.SortingDetails}>
            <figure >
                <img src={trashTypeIcon} alt={altTxt} />
                <h2>{title}</h2>
            </figure>
            <figcaption>
                <h3>Hvad modtager vi?</h3>
                <hr />
                <p>Station {allowed}</p>
                <p>Hjemme {allowed}</p>

                <h3>Hvad modtager vi ikke?</h3>
                <hr />
                <p>Station {notAllowed}</p>
                <p>Hjemme {notAllowed}</p>
            </figcaption>


            {/* <img src={accordionArrow} alt="Fold out" /> */}
        </section>
    )
}
