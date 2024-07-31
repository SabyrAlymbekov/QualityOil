import lorry_img from "@assets/truck-delivery.svg"
import phone_img from "@assets/phone.svg"
import FacebookLogo from "@assets/socials/Facebook.svg"
import InstagramLogo from "@assets/socials/Instagram.svg"
import OdnoklassnikiLogo from "@assets/socials/Odnoklassniki.svg"
import OnlineOrder from "./OnlineOrder.jsx";
import './HeaderInfo.sass'

export default function HeaderInfo() {
    return <div className="HeaderInfo container">
        <div className="HeaderInfo__infos">
            <div className="HeaderInfo__address">
                <img src={lorry_img} alt="lorry" loading="lazy" className="HeaderInfo__lorry HeaderInfo__img"/>
                <h1 className="HeaderInfo__point">371 просп. Жибек Жолу</h1>
            </div>
            <div className="HeaderInfo__phones">
                <img src={phone_img} alt="lorry" loading="lazy" className="HeaderInfo__phone HeaderInfo__img"/>
                <div className="HeaderInfo__numbers">
                    <h1 className="HeaderInfo__number">+996 312 466371</h1>
                    <h1 className="HeaderInfo__number">+996 707 466371</h1>
                    <h1 className="HeaderInfo__number">+996 777 466371</h1>
                    <h1 className="HeaderInfo__number">+996 555 466371</h1>
                </div>
            </div>
        </div>
        <div className="HeaderInfo__funcs">
            <div className="HeaderInfo__socials">
                <a href="#" className="HeaderInfo__social-link"><img src={FacebookLogo} alt="Facebook quality oil"
                                                                     className="HeaderInfo__img"/></a>
                <a href="#" className="HeaderInfo__social-link"><img src={InstagramLogo} alt="Instagram quality oil"
                                                                     className="HeaderInfo__img"/></a>
                <a href="#" className="HeaderInfo__social-link"><img src={OdnoklassnikiLogo}
                                                                     alt="Odnoklassniki quality oil"
                                                                     className="HeaderInfo__img"/></a>
            </div>
            <OnlineOrder/>
        </div>
        <div className="HeaderInfo__socials HeaderInfo__socials2">
            <a href="#" className="HeaderInfo__social-link"><img src={FacebookLogo} alt="Facebook quality oil"
                                                                 className="HeaderInfo__img"/></a>
            <a href="#" className="HeaderInfo__social-link"><img src={InstagramLogo} alt="Instagram quality oil"
                                                                 className="HeaderInfo__img"/></a>
            <a href="#" className="HeaderInfo__social-link"><img src={OdnoklassnikiLogo} alt="Odnoklassniki quality oil"
                                                                 className="HeaderInfo__img"/></a>
        </div>
        <div className="HeaderInfo__phones HeaderInfo__phones2">
            <img src={phone_img} alt="lorry" loading="lazy" className="HeaderInfo__phone HeaderInfo__img"/>
            <div className="HeaderInfo__numbers HeaderInfo__numbers2">
                <h1 className="HeaderInfo__number">+996 312 466371</h1>
                <h1 className="HeaderInfo__number">+996 707 466371</h1>
                <h1 className="HeaderInfo__number">+996 777 466371</h1>
                <h1 className="HeaderInfo__number">+996 555 466371</h1>
            </div>
        </div>
    </div>
}