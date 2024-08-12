'use client'

import Path from "@components/path/path.jsx";
import {NavLink, useParams} from "react-router-dom";
import ProductShow from "@components/Product/ProductShow.jsx";

export default function ProductPage() {
    let ps = useParams()
    // get data
    let category = 'Salat'
    let categoryId = 0;
    return <div className="productPage container">
        <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to={`/catalog/${categoryId}`}>{category}</NavLink>]}></Path>
    </div>
}