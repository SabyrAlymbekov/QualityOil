import catalogIMG from '@assets/cat-2.jpg'
import oilengine from '@assets/oilengine.jpg'
import basketoil from '@assets/basketoil.jpg'
import 'swiper/css';
import '@/pages/Home/Home.sass'
import NewProduct from "@components/newproduct/newProduct.jsx";

// 15min + 15 min + 15min

export default function Home() {
    return <div className="home">
        <div className="home__first">
            <div className="home__first__wrapper container">
                <div className="home__card">
                    <h1 className="home__card__name">Каталог</h1>
                    <img className="home__card__image" alt='catalog image' src={catalogIMG}/>
                </div>
                <div className="home__card">
                    <h1 className="home__card__name">Подбор масла</h1>
                    <img className="home__card__image" alt='catalog image' src={oilengine}/>
                </div>
                <div className="home__card">
                    <h1 className="home__card__name">Купить online</h1>
                    <img className="home__card__image" alt='catalog image' src={basketoil}/>
                </div>
            </div>
        </div>
        <div className="home__second">
            <NewProduct></NewProduct>
        </div>
    </div>
}