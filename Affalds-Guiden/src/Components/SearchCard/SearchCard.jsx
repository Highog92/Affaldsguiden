import searchCardstyle from "./SearchCard.module.scss";
import downArrow from '../../assets/Images/Layout/check-circle.svg'
export const SearchCard = ({ trashTypeIcon, trashImg, altTxt, title, }) => {


    return (
        <section className={searchCardstyle.searchCard}>
            <figure>
                <img src={trashTypeIcon} alt={altTxt} />
                <h2>{title}</h2>
            </figure>
            <img src={downArrow} alt="" />
        </section>
    );
};
