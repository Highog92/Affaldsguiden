import sortingDetailsStyle from './SortingDetailsCard.module.scss'
import { useFetch } from '../../Hooks/useFetch';
import { useState } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export function SortingDetails({ id, imgSrc, bgColor, trashTypeIcon, subTitleImg, subTitleIcon, altTxt, title, subTitle, allowed, notAllowed }) {

    const sortingCategoryDetails = useFetch(`http://localhost:3000/category/details/${id}`)

    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }
    // console.log(id, "ID");
    // console.log(sortingType, "type");
    return (

        <section style={{ backgroundColor: bgColor }} className={sortingDetailsStyle.accordion}>
            <figure className={sortingDetailsStyle.accordiontitle} >
                <img src={trashTypeIcon} alt={altTxt} />
                <h2>{title}</h2>
            </figure>
            {isOpen &&
                <figcaption>
                    <h3>{subTitle}</h3>
                    <img src={subTitleImg} alt="Title image" />
                    <img src={subTitleIcon} alt="Title icon" />
                    <h3>Hvad modtager vi?</h3>
                    <hr />
                    <p>Station: {allowed}</p>
                    <p>Hjemme: {allowed}</p>

                    <h3>Hvad modtager vi ikke?</h3>
                    <hr />
                    <p>Station: {notAllowed}</p>
                    <p>Hjemme: {notAllowed}</p>
                </figcaption>
            }
            <div className={sortingDetailsStyle.accordionarrow}>{isOpen ? < IoIosArrowDropupCircle onClick={toggle} /> : <IoIosArrowDropdownCircle onClick={toggle} />}</div>

        </section>
    )
}
