import stationsCardstyle from './StationsCard.module.module.scss'


export function StationsCard({map, location, address, zipcode, city, name }) {

    return (
        <figure className={stationsCardstyle.stationsCard} >
            <img src={map} alt="station location" />
            <address>
                <h3>{name}</h3>
                <p>{location}</p>
                <p>{address}</p>
                <p>{zipcode}</p>
                <p>{city}</p>
            </address>
        </figure>
    )
}
