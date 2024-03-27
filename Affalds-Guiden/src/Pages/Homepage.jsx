import { SlideShow } from "../Components/SlideShow/SlideShow"
import { Button } from "../Components/Button/Button"
import HomepageStyle from './Styles/Homepage.module.scss'
import { Link } from 'react-router-dom';
import sortingGuide from '../assets/Images/Photos/small/skrald2.jpg'
import orderContainer from '../assets/Images/Photos/small/containers.jpg'

export function Homepage() {


  return (
    <main className={HomepageStyle.homepage}>
      <SlideShow />

      <figure className={HomepageStyle.findStations}>
        <figcaption>
          <h2>Find og anmeld genbrugsstationer</h2>
          <div>
            <Link to='/recyclingstations'>
              <Button
                text="Find station"
                bgColor="var(--greenBlue)"
                sizeW={"120px"}
                sizeH={"50px"}
              />
            </Link>
            <Link to='/login'>
              <Button
                text="Log ind"
                bgColor="var(--greenBlue)"
                sizeW={"120px"}
                sizeH={"50px"}
              />
            </Link>
          </div>
        </figcaption>
      </figure>


      <section className={HomepageStyle.sortingGuide}>
        <article>

          <h2>Din guide til sortering</h2>
          <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere.</p>
          <p>Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
          <div>
            <Link to="/sorting">
              <Button
                text={'Se affaldsguide'}
                bgColor={'var(--greenBlue)'} />
            </Link>

            <Link to="/ordercontainer">
              <Button
                text={'Bestilt storskrald'}
                bgColor={'var(--white)'}
                txtColor={'var(--green)'}
                border={'1px solid'} />
            </Link>

          </div>
        </article>
        <img src={sortingGuide} alt="affald" />
      </section>


      <section className={HomepageStyle.sortingGuide}>
        <img src={orderContainer} alt="affald" />
        <article>
          <h2>Bestil din nye affaldsbeholder</h2>
          <p>Mangler du en affalds container eller har du altid mere restaffald, end der kan være i din container?</p>
          <p>Her kan du skifte størrelse eller tilføje en ekstra container til restaffald.</p>
          <Link to="/ordercontainer">
            <Button
              text={'Bestil nu'}
              bgColor={'var(--greenBlue)'} />
          </Link>
        </article>
      </section>
    </main>
  )
}
