import Path from "@components/path/path.jsx";
import {Link} from "react-router-dom";
import '@/pages/services/services.sass'
import OnlineOrder from "@components/OnlineOrder/OnlineOrder.jsx";

export default function ServicesPage() {
    return <div className="services">
        <Path path={[<Link to='/'>Главная</Link>, <Link to='/services'>Услуги</Link>]}></Path>
        <h1 className="heading">Наши услуги</h1>
        <ul className="services__list">
            <li className="services__item">Диагностика и ремонт двигателя,мелко срочный ремонт двигателя.</li>
            <li className="services__item">Диагностика и ремонт ходовой части автомобиля.</li>
            <li className="services__item">Замена масла в двигателе</li>
            <li className="services__item">Замена масла в АКПП</li>
            <li className="services__item">Замена масла в МКПП</li>
            <li className="services__item">Замена масла в раздатке и редукторах</li>
            <li className="services__item">Смазка крестовин и карданного вала</li>
            <li className="services__item">Замена масла в ГУР</li>
            <li className="services__item">Замена антифриза</li>
            <li className="services__item">Замена тормозной жидкости</li>
            <li className="services__item">Замена свечей зажигания</li>
            <li className="services__item">Замена топливного фильтра</li>
            <li className="services__item">Замена всех фильтров</li>
            <li className="services__item">Чистка форсунок</li>
        </ul>
        <OnlineOrder></OnlineOrder>
    </div>
}