import arrowBlack from '@assets/arrow-black.svg'
import '@components/news/newsCard.sass'
import calendar from '@assets/calendar.svg'
import {Link, NavLink} from "react-router-dom";

// 16min +

export default function NewsCard({ data }) {
    return <div className="newsCard">
        <img src={data.img} alt="news image" className="newsCard__image" width='100%' height='100%'/>
        <div className="newsCard__info">
            <div className="newsCard__date">
                <img src={calendar} alt="mini calendar image" loading="lazy" width='13px' height='14px'/>
                <h3 className="newsCard__date-heading">
                    {data.date}
                </h3>
            </div>
            <h2 className="newsCard__heading">
                {data.title}
            </h2>
            <p className="newsCard__description">
                {data.description}
            </p>
            <Link className="newsCard__readMore" to={data.link}>
                Узнать больше
                <img src={arrowBlack} alt="black arrow"/>
            </Link>
        </div>
    </div>
}