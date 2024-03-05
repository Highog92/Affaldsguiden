import sortingStyle from '../Pages/Styles/SortingPageStyle.module.scss'
import { SortingBox } from '../Components/SortingBox/SortingBox'
import { useFetch } from '../Hooks/useFetch'
import { SearchBar } from '../Components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
export function Sorting() {

    const sorting = useFetch(`http://localhost:3000/section`)
    console.log(sorting);
    return (

        <main className={sortingStyle.sorting}>
            <div>
                <h2 style={{ color: 'var(--green)' }}>Din Guide</h2>
                <h2 style={{ color: 'var(--greenBlue)' }}>til en sund affaldssortering</h2>
            </div>

            <SearchBar />


            <section className={sortingStyle.sortingBoxes}>
                {sorting?.map((item) => {
                    return (

                        <Link to={`/sorting/${item.id}`}>
                            <SortingBox
                                key={item.id}
                                bgColor={`#${item.color}`}
                                img={item.filepath}
                                title={item.title}
                                altTxt={item.filename}
                            />
                        </Link>

                    )

                })}
            </section>

        </main>
    )
}
