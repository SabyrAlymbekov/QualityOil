import '@components/Header/Header.sass'
import HeaderInfo from "@components/Header/HeaderInfo.jsx";
import HeaderSearch from "@components/Header/HeaderSearch.jsx";
import QualityOilLogo from '@assets/qualityOil.png'
import ShoppingCart from "@components/Header/ShoppingCart.jsx";
import HeaderBurger from "@components/Header/HeaderBurger.jsx";
import HeaderNavigation from "@components/Header/HeaderNavigation.jsx";

export default function Header() {
    return <header className="Header">
        <HeaderInfo></HeaderInfo>
        <div className="Header__main container">
            <HeaderBurger></HeaderBurger>
            <img src={QualityOilLogo} alt="Quality oil Logo" className="Header__logo"/>
            <HeaderSearch></HeaderSearch>
            <ShoppingCart></ShoppingCart>
        </div>
        <HeaderNavigation></HeaderNavigation>
    </header>
}