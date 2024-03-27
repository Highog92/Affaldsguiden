import slideShowStyle from './SlideShow.module.scss'
import malerspande from '../../assets/Images/Slideshow/malerspande.jpg'
import affaldSkov from '../../assets/Images/Slideshow/affald-skov-1.jpg'
import affaldStrand from '../../assets/Images/Slideshow/affald-strand-2.jpg'
import Carousel from 'react-material-ui-carousel'

// Npm Pakke løsning
export function SlideShow() {


    return (
        <Carousel className={slideShowStyle.slideShow}
            animation='slide'
            indicators={false}
            navButtonsAlwaysInvisible={false}
            navButtonsAlwaysVisible={true}
            
        >
            <img src={affaldSkov} alt="affaldSkov" />
            <img src={affaldStrand} alt="affaldStrand" />
            <img src={malerspande} alt="malerspande" />
        </Carousel>)
}
