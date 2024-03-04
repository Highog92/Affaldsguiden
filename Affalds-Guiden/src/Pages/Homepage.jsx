import { SlideShow } from "../Components/SlideShow/SlideShow"
import { Button } from "../Components/Button/Button"
import HomepageStyle from './Styles/HomepageStyle.module.scss'

export function Homepage() {


  return (
    <section className={HomepageStyle.homePage}>
      <SlideShow />

      <div className={HomepageStyle.findStations}>
        <div>
          <p>Find og anmeld genbrugsstationer</p>
          <div>

            <Button
              text="Find station"
              bgColor="var(--darkGreen)"
              sizeW={"120px"}
              sizeH={"50px"}

            />

            <Button
              text="Log ind"
              bgColor="var(--darkGreen)"
              sizeW={"120px"}
              sizeH={"50px"}
            />
          </div>
        </div>
      </div>




    </section>
  )
}
