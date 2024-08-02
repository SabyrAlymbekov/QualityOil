import ToyotaLogo from "@assets/ToyotaLogo.png";
import '@components/partners/partnersCard.sass'

export default function PartnerCard({Logo, name, phone, website}) {
    return <div className="partnerCard">
        <img src={Logo} alt="toyota logo" className="partnerCard__logo" loading="lazy"/>
        <div className="partnerCard__info">
            <h2 className="partnerCard__name">
                {name}
            </h2>
            <h3 className="partnerCard__phone">
                {phone}
            </h3>
            <a href={website} target="_blank"
               className="partnerCard__link">{website}</a>
        </div>
    </div>
}