import '@components/Header/HeaderNavigation.sass'
import {NavLink} from "react-router-dom";

export default function HeaderNavigation() {
    return <nav className="HeaderNavigation container">
        <div className="HeaderNavigation__wrapper">
            <NavLink
                to='/'
                className="HeaderNavigation__link">
                ГЛАВНАЯ
            </NavLink>
            <NavLink
                to='/about'
                className="HeaderNavigation__link">
                О НАС
            </NavLink>
            <NavLink
                to='/service'
                className="HeaderNavigation__link">
                СЕРВИС
            </NavLink>
            <NavLink
                to='/services'
                className="HeaderNavigation__link">
                УСЛУГИ
            </NavLink>
            <NavLink
                to='/partners'
                className="HeaderNavigation__link">
                ПАРТНЕРЫ
            </NavLink>
            <NavLink
                to='/delivery'
                className="HeaderNavigation__link">
                ДОСТАВКА
            </NavLink>
            <NavLink
                to='/news'
                className="HeaderNavigation__link">
                НОВОСТИ
            </NavLink>
            <NavLink
                to='/contact'
                className="HeaderNavigation__link">
                КОНТАКТЫ
            </NavLink>
        </div>
    </nav>
}