import Path from "@components/path/path.jsx";
import {NavLink} from "react-router-dom";
import '@/pages/delivery/deliveryPage.sass'

export default function DeliveryPage() {
    return <div className="delivery">
        <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to='/delivery'>Доставка</NavLink>]}></Path>
        <div className="heading">
            Доставка
        </div>
        <h2 className="delivery__heading2">
            Условия доставки:
        </h2>
        <ul className="delivery__ul">
            <li className="delivery__li">При покупки на 2500 сомов и выше, доставка по городу Бишкек осуществляется
                бесплатно.
            </li>
            <li className="delivery__li">Доставка товара при наличии на складе, доставка заказа осуществляется в течении
                3-4 часов.
            </li>
            <li className="delivery__li">При отсутствии товара на складе, доставка заказа осуществляется в течении 24
                часов.
            </li>
            <li className="delivery__li">Зона обслуживания только в пределах города Бишкек.</li>
        </ul>
        <p>
            Стоимость различных видов доставки по Чуйской области зависит от удаленности от города Бишкек. Рассчитать
            стоимость доставки по Чуйской области вы можете уточнить, позвонив нам.
        </p>
        <p>Заказать товар вы можете непосредственно в центре выдачи заказов «QUALITY АВТОСЕРВИС». Обратиться к
            менеджерам-консультантам, или самостоятельно использовать электронный <a href='/catalog'>каталог</a> товаров
            на нашем веб-сайте. </p>
        <iframe frameBorder="0" className='delivery__address'
                src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1173.8097819649151!2d74.61653623545499!3d42.88524854795865!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794a517e35f%3A0x5c4ebc6cb0de789b!2zMzcxINC_0YDQvtGB0L8uINCW0LjQsdC10Log0JbQvtC70YMsINCR0LjRiNC60LXQuiwg0JrQuNGA0LPQuNC30LjRjw!5e1!3m2!1sru!2sru!4v1505230435041"></iframe>
    </div>
}