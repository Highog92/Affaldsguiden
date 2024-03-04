import footerStyle from './Footer.module.scss'
import { Button } from '../Button/Button'
import arrowUpIcon from '../../assets/Svgs/ArrowUp.svg'
import logoWhite from '../../assets/Svgs/Logo-White.svg'

export function Footer() {

    return (
        <footer className={footerStyle.footer}>

            <div>
                <img src={logoWhite} alt="logo" />
                <h3>AffaldsGuiden</h3>
            </div>

            <p>Vi arbejder for at informere om korrekt affaldssortering.</p>
            <p>Ved at sortere hjælper du os, men også klimaet.</p>


            <ul>
                <p>©2023 Affaldsguiden. </p>
                <li>
                    <Button
                        text={"Back to top"}
                        bgColor={"var(--greenBlue)"}
                        txtColor={"var (--fadedWhite)"}

                    />
                    <img src={arrowUpIcon} alt="back to top" />
                </li>
            </ul>


        </footer>
    )
}
