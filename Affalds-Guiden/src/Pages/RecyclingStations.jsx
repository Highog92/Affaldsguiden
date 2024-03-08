import { StationsCard } from "../Components/StationsCard/StationsCard"
import { useFetch } from "../Hooks/useFetch"
import RecyclingStationsStyle from './Styles/RecyclingStations.module.scss'
import engvej from '../assets/Images/Maps/Engvej.png'
import hjedsbaekvej from '../assets/Images/Maps/Hjedsbaekvej.png'
import moelholmvej from '../assets/Images/Maps/Moelholmvej.png'
import oesteruttrupvej from '../assets/Images/Maps/OesterUttrupVej.png'
import overbaekken from '../assets/Images/Maps/Overbaekken.png'
import skovgaardsvej from '../assets/Images/Maps/Skovgaardsvej.png'
import sheldon from '../assets/Images/Maps/sheldon.png'


export function RecyclingStations() {

    const organisations = useFetch(`http://localhost:3000/orgs?attributes=id,name,address,zipcode,city`)
    console.log(organisations);
    const maps = [oesteruttrupvej, moelholmvej, hjedsbaekvej, overbaekken, engvej, skovgaardsvej, sheldon];
    return (
        <section className={RecyclingStationsStyle.recyclingStations}>

            {organisations?.map((item, index) => {
                return (

                    <StationsCard
                        key={item.id}
                        map={maps[index]}
                        name={item.name}
                        location={item.location}
                        address={item.address}
                        zipcode={item.zipcode}
                        city={item.city}
                    />

                )
            })}
        </section>
    )
}
