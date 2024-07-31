import './HeaderBurger.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function HeaderBurger() {
    const [st, useSt] = useState("")
    return <div className="HeaderBurger">
        <button className="HeaderBurger__burger">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label className="burger" htmlFor="burger-checkbox"></label>
        </button>
        <div className="HeaderBurger__menu">
            <div className="HeaderBurger__close_wrapper">

            </div>
            <div className="HeaderBurger__wrapper">
                <NavLink
                    to='/'
                    className="HeaderBurger__link">
                    ГЛАВНАЯ
                </NavLink>
                <NavLink
                    to='/about'
                    className="HeaderBurger__link">
                    О НАС
                </NavLink>
                <NavLink
                    to='/service'
                    className="HeaderBurger__link">
                    СЕРВИС
                </NavLink>
                <NavLink
                    to='/services'
                    className="HeaderBurger__link">
                    УСЛУГИ
                </NavLink>
                <NavLink
                    to='/partners'
                    className="HeaderBurger__link">
                    ПАРТНЕРЫ
                </NavLink>
                <NavLink
                    to='/delivery'
                    className="HeaderBurger__link">
                    ДОСТАВКА
                </NavLink>
                <NavLink
                    to='/news'
                    className="HeaderBurger__link">
                    НОВОСТИ
                </NavLink>
                <NavLink
                    to='/contacts'
                    className="HeaderBurger__link">
                    КОНТАКТЫ
                </NavLink>
            </div>
        </div>
    </div>
}