import Path from "@components/path/path.jsx";
import {NavLink, useParams} from "react-router-dom";
import testproduct2 from '@assets/castrol.png'
import '@/pages/productPage/product-page.sass'
import { useState } from "react";

function renderInfo(info) {
    let arr = []
    for (let key in info) {
        let val = info[key];
        arr.push(<div className="productPage__spec" key={key}>
            <p className="productPage__key">{key}</p>
            <p className="productPage__val">{val}</p>
        </div>)
    }
    return arr;
}

export default function ProductPage() {
    // let ps = useParams()
    // get data
    const [amount, setAmount] = useState(1);
    const handleAmountIncrease = () => {
        setAmount(amount => {
            if (amount == 1000) return 1000
            return amount + 1
        });
    }
    const handleAmountDecrease = () => {
        setAmount(amount => {
            if (amount == 1) return 1;
            return amount - 1
        });
    }
    let data = {
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2,
        info: {
            "бренд": "PETRONAS",
            "объем": 2,
            "тип масла": "CVT"
        }
    }
    let category = 'ТРАНСМИССИОННЫЕ МАСЛА'
    let categoryId = 7;
    return <div className="productPage container">
        <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to={`/catalog`}>Каталог</NavLink>, <NavLink to={`/catalog/${categoryId}`}>{category}</NavLink>]}></Path>
        <div className="productPage__wrapper">
            <div className="productPage__img__wrapper">
                <img src={data.img} alt="product image" className="productPage__img"/>
            </div>
            <div className="productPage__info">
                <p className="productPage__name">{data.name}</p>
                <div className="productPage__specs">
                    {
                        renderInfo(data.info)
                    }
                </div>
                <div className="productPage__tools">
                    <div className="productPage__costandamount">
                        <p className="productPage__cost">Цена: {data.cost}сом</p>
                        <div className="productPage__amount">
                            <button className="productPage__decrease" onClick={handleAmountDecrease}>-</button>
                            <p className="productPage__amount_view">{amount}</p>
                            <button className="productPage__increase" onClick={handleAmountIncrease}>+</button>
                        </div>
                    </div>
                    <button className="productPage__add">в корзину</button>
                </div>
            </div>
        </div>
        <div className="productPage__description">
            <h1 className="productPage__desch">Описание:</h1>
            <p className="productPage__desc">
                {data.description}
            </p>
        </div>
    </div>
}