import sortingBoxStyle from './SortingBox.module.scss'


export function SortingBox({img, title, altTxt, bgColor}) {

    return (
        <section className={sortingBoxStyle.sortingBox} >
            <img src={img} alt={altTxt} />

            <div style={{backgroundColor: bgColor}}>{title}</div>
      </section>
    )
}