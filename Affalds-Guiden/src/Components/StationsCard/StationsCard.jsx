import stationsCardstyle from './StationsCard.module.module.scss'


export function StationsCard({map, location, address, zipcode, city, stars, reveiws }) {

    return (
        <figure className={stationsCardstyle.stationsCard} >
            <img src={map} alt="station location" />
            <address>
                <h3>{location}</h3>
                <p>{address}</p>
                <p>{zipcode}</p>
                <p>{city}</p>
            </address>
        </figure>
    )
}
