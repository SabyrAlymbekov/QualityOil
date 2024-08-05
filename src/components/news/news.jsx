import TotalNews from '@assets/TotalNews.jpeg'
import NewsCard from "@components/news/NewsCard.jsx";
import './news.sass'

// 15min + 15min

export default function News() {
    let news = [
        {
            img: TotalNews,
            title: "Начало продаж продукции TOTAL!",
            date: '2018/05/21',
            description: `Официальный сервис центр компании "TOTAL" в Кыргызстане "QUALITY АВТОСЕРВИС"
                сообщает о продаже продукции TOTAL - 2018!
                Весь ассортимент продукции TOTAL является оригиналом...`,
            link: '/news'
        },{
            img: TotalNews,
            title: "Начало продаж продукции TOTAL!",
            date: '2018/05/21',
            description: `Официальный сервис центр компании "TOTAL" в Кыргызстане "QUALITY АВТОСЕРВИС"
                сообщает о продаже продукции TOTAL - 2018!
                Весь ассортимент продукции TOTAL является оригиналом...`,
            link: '/news'
        },{
            img: TotalNews,
            title: "Начало продаж продукции TOTAL!",
            date: '2018/05/21',
            description: `Официальный сервис центр компании "TOTAL" в Кыргызстане "QUALITY АВТОСЕРВИС"
                сообщает о продаже продукции TOTAL - 2018!
                Весь ассортимент продукции TOTAL является оригиналом...`,
            link: '/news'
        },{
            img: TotalNews,
            title: "Начало продаж продукции TOTAL!",
            date: '2018/05/21',
            description: `Официальный сервис центр компании "TOTAL" в Кыргызстане "QUALITY АВТОСЕРВИС"
                сообщает о продаже продукции TOTAL - 2018!
                Весь ассортимент продукции TOTAL является оригиналом...`,
            link: '/news'
        },
    ]
    return <div className="newsComp container">
        <h1 className='newsComp__heading'>Новости</h1>
        <div className="newsComp__wrapper">
            {
                news.map((item, index) => (
                    <NewsCard data={item} key={index}></NewsCard>
                ))
            }
        </div>
    </div>
}