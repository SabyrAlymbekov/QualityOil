import {NavLink} from "react-router-dom";
import Path from "@components/path/path.jsx";
import '@/pages/partners/partners.sass'
import ToyotaLogo from "@assets/ToyotaLogo.png"
import PerekrestokLogo from "@assets/perekrestok.jpeg"
import BMWLogo from "@assets/BMW.jpeg"
import PartnerCard from "@components/partners/partner.jsx";

export default function PartnersPage() {
    let partners = [
        {
            logo: ToyotaLogo,
            name: "Тойота Центр Бишкек",
            phone: "+996 (312) 510855",
            website: "https://toyota-bishkek.kg/",
        }, {
            logo: PerekrestokLogo,
            name: "Автоцентр «Перекресток»",
            phone: "+996 (312) 510855",
            website: "https://toyota-bishkek.kg/",
        }, {
            logo: BMWLogo,
            name: "«Автоцентр эстокада»\n" +
                "Официальный импортер BMW",
            phone: "+996 (312) 37 67 70",
            website: "https://www.bmw.kg/",
        }, {
            logo: BMWLogo,
            name: "Сеть магазинов «7 ДНЕЙ»",
            phone: " +996 (312) 678750",
            website: "https://www.bmw.kg/",
        }, {
            logo: BMWLogo,
            name: "Супермаркет арзан, 7 дней",
            phone: "+996 (312) 678750",
            website: "http://7days.kg/superarzan",
        },
    ]
    return <div className="partners">
        <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to='/partners'>Партнеры</NavLink>]}></Path>
        <h1 className="heading">
            Партнеры
        </h1>
        <h1 className="partners__h1">Компания «QUALITY АВТОСЕРВИС»</h1>
        <h2 className="partners__h2">Мы всегда открыты и рады новому сотрудничеству.</h2>
        <div className="partners__cards">
            {partners.map(({logo, name, phone, website}, index) => (<PartnerCard Logo={logo} name={name} website={website} phone={phone} key={index}></PartnerCard>))}
        </div>
    </div>
}