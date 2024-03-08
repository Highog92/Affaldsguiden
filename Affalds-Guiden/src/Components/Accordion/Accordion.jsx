import { useState } from 'react';
import sortingDetailsStyle from './Accordion.module.scss'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";


// Accordion modtaget og lavet af Kamilla. Har selv lavet modifikationer

export const Accordion = ({ id, bgColor, trashTypeIcon, subTitleImg, subTitleIcon, altTxt, title, subTitle, allowed, notAllowed }) => {
    //https://github.com/Eon4/CodeChallenge/blob/main/code/src/Components/Accordion/Accordion.jsx
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <section style={{ backgroundColor: bgColor }} className={sortingDetailsStyle.accordion}>
            <figure className={sortingDetailsStyle.accordiontitle} >
                <img src={trashTypeIcon} alt={altTxt} />
                <h2>{title}</h2>
            </figure>
            {isOpen &&
                <figcaption>
                    <h3>{subTitle}</h3>
                    {/* <img src={subTitleImg} alt="Title image" /> */}
                    {/*  <img src={subTitleIcon} alt="Title icon" /> */}
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