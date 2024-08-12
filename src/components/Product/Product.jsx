import {Link} from "react-router-dom";
import './Product.sass'

export default function Product({ data }) {
    const {name, description, cost, link, img} = data;
    return <Link className="product" to={'/product/'+link}>
        <img src={img} alt="product image" className="product__img" loading="lazy"/>
        <div className="product__info">
            <h1 className="product__heading">
                {name}
            </h1>
            <p className="product__cost">{cost} сом</p>
        </div>
    </Link>
}