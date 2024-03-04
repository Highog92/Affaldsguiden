import navStyle from './Navigation.module.scss'
import { Link } from 'react-router-dom';
import logo from '../../assets/Svgs/Logo.svg'
import loginIcon from '../../assets/Svgs/LoginIcon.svg'
export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                {/* Link er bare et <a> tag */}
                <Link to='/homepage'><img src={logo} alt="Det utrolige teater" /><li>Affaldsguiden</li></Link>
                <ul>
                    <Link to='/homepage'><li>Forside</li></Link>
                    <Link to='/sorting'><li>Sortering</li></Link>
                    <Link to='/recyclingstations'><li>Genbrugsstationer</li></Link>
                    <Link to='/ordercontainer'><li>Bestil beholder</li></Link>
                </ul>
                    <Link to='/login'><img src={loginIcon} alt="Login ikon" /></Link>
            </nav>
        </section>
    )
}