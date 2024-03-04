import sortingStyle from './Styles/Sorting.module.scss'
import { SortingBox } from '../Components/SortingBox/SortingBox'
import { useFetch } from '../Hooks/useFetch'
import wave from '../assets/Images/Layout/bg-waves-1.svg'

export function Sorting() {

    const sorting = useFetch(`http://localhost:3000/section`)
    console.log(sorting);
    return (
        <section className={sortingStyle.sorting}>
            {sorting?.map((item) => {
                return (

                    <SortingBox
                        key={item.id}
                        bgColor={`#${item.color}`}
                        img={item.filepath}
                        title={item.title}
                        altTxt={item.filename}
                    />

                )

            })}

        </section>
    )
}
