'use client'

import {Link, NavLink, useParams} from "react-router-dom";
import Product from "@components/Product/Product.jsx";
import Path from "@components/path/path.jsx";
import '@/pages/catalog/catalog.sass'
import testproduct from '@assets/testprod.jpeg'
import testproduct2 from '@assets/castrol.png'
import ProductShow from "@components/Product/ProductShow.jsx";

const CatalogType = ({name, link, dopClass}) => (<Link className={'catalog__name ' + dopClass} to={'/catalog/'+link}>{name}</Link>)

export default function Catalog() {
    const params = useParams()
    let id = (params.catalogId) ? Number(params.catalogId) : -1;
    const catalog__types = [
        "ФИЛЬТР АКПП",
        "ПРОМЫВОЧНОЕ МАСЛО",
        "ФИЛЬТР-ТОПЛИВНЫЙ",
        "ФИЛЬТР-САЛОННЫЙ",
        "ФИЛЬТР-МАСЛЯНЫЙ",
        "ФИЛЬТР-ВОЗДУШНЫЙ",
        "УСЛУГИ",
        "ТРАНСМИССИОННЫЕ МАСЛА",
        "ТОСОЛ",
        "ТОРМОЗНЫЕ КОЛОДКИ",
        "ТОРМОЗНЫЕ ЖИДКОСТИ",
        "СВЕЧИ",
        "МОТОРНОЕ МАСЛО СИНТЕТИКА ДЛЯ ДИЗЕЛЯ",
        "МОТОРНОЕ МАСЛО СИНТЕТИКА",
        "МОТОРНОЕ МАСЛО ПОЛУСИНТЕТИКА ДЛЯ ДИЗЕЛЯ",
        "МОТОРНОЕ МАСЛО ПОЛУСИНТЕТИКА",
        "МОТОРНОЕ МАСЛО МИНЕРАЛКА ДЛЯ ДИЗЕЛЯ",
        "МОТОРНОЕ МАСЛО МИНЕРАЛКА",
        "ЛАМПОЧКИ",
        "АКСЕССУАРЫ",
        "ОСВЕЖИТЕЛИ",
        "АККУМУЛЯТОРЫ",
        "АВТОХИМИЯ",
        "АНТИФРИЗ"
    ];
    //fetch by Id
    let allprodcuts = [{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Масло моторное PETRONAS Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },{
        name: 'Syntium 7000 0w40 4л',
        cost: 3700,
        description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet',
        link: 'product1',
        img: testproduct2
    },]
    return (<div className="catalog">
        <div className="container">
            <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to='/catalog'>Каталог</NavLink>]}></Path>
            <div className="heading">
                Каталог
            </div>
        </div>
        <div className="catalog__wrapper container">
            <div className="catalog__choose">
                {catalog__types.map((type, index) => <CatalogType name={type} link={index} key={index} dopClass={(index === id && 'catalog__name-active')}></CatalogType>)}
            </div>

            <ProductShow data={allprodcuts} limit={20}></ProductShow>

        </div>
    </div>)
}