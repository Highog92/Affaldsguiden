import sortingDetailsStyle from './SortingDetails.module.scss'
import accordionArrow from '../../assets/Images/Layout/check-circle.svg'
export function SortingDetails({bgColor, trashTypeIcon, trashImg, altTxt, title}) {

    return (
        <section style={{ backgroundColor: bgColor }} className={sortingDetailsStyle.SortingDetails}>
            <figure >
                <img src={trashTypeIcon} alt={altTxt} />
                <h2>{title}</h2>
            </figure>
            <img src={accordionArrow} alt="Fold out" />
        </section>
    )
}
