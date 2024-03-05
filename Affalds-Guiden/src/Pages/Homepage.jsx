import { SlideShow } from "../Components/SlideShow/SlideShow"
import { Button } from "../Components/Button/Button"
import HomepageStyle from './Styles/HomepageStyle.module.scss'
import { Link } from 'react-router-dom';
import sortingGuide from '../assets/Images/Photos/small/skrald2.jpg'
import orderContainer from '../assets/Images/Photos/small/containers.jpg'
export function Homepage() {


  return (
    <main className={HomepageStyle.homePage}>
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

              />
            </Link>
          </div>
        </figcaption>
      </figure>
      <section>
        <section className={HomepageStyle.sortingGuide}>
          <article>

            <h2>Din guide til sortering</h2>
            <p>
              Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere.
            </p>
            <p>
              Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.
            </p>
            <Button
              text={'Bestil nu'}
              bgColor={'var(--greenBlue)'} />

            <Button
              text={'Bestilt storskrald'}
              bgColor={'var(--white)'}
              txtColor={'var(--green)'}
              borderColor={'var(--fadedWhite)'} />
          </article>

          <img src={sortingGuide} alt="affald" />
        </section>


        <section className={HomepageStyle.sortingGuide}>
          <img src={sortingGuide} alt="affald" />
          <article>

            <h2>Bestil din nye affaldsbeholder</h2>
            <p>
              When an unknown printer took a galley of type and scramble it to
            </p>
            <p>
              make a type specimen book. It has survived not only
            </p>
            <Button
              text={'Bestil nu'}
              bgColor={'var(--greenBlue)'} />
          </article>

        </section>
      </section>
    </main>
  )
}
