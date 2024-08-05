import React, { lazy, Suspense } from 'react';
import catalogIMG from '@assets/cat-2.jpg';
import oilengine from '@assets/oilengine.jpg';
import basketoil from '@assets/basketoil.jpg';
import 'swiper/css';
import '@/pages/Home/Home.sass';

const NewProduct = lazy(() => import("@components/newproduct/newProduct.jsx"));
const TopProduct = lazy(() => import("@components/TopProduct/TopProduct.jsx"));
const News = lazy(() => import("@components/news/news.jsx"));

const Card = ({ name, imgSrc, altText }) => (
    <div className="home__card">
        <h1 className="home__card__name">{name}</h1>
        <img className="home__card__image" alt={altText} src={imgSrc} loading='lazy' width='100%' height='100%' />
    </div>
);

export default function Home() {
    return (
        <div className="home">
            <div className="home__first">
                <div className="home__first__wrapper container">
                    <Card name="Каталог" imgSrc={catalogIMG} altText="catalog image" />
                    <Card name="Подбор масла" imgSrc={oilengine} altText="oil engine image" />
                    <Card name="Купить online" imgSrc={basketoil} altText="basket oil image" />
                </div>
            </div>
            <div className="home__second">
                <Suspense fallback={<div>Loading New Products...</div>}>
                    <NewProduct />
                </Suspense>
            </div>
            <div className="home__third">
                <Suspense fallback={<div>Loading Top Products...</div>}>
                    <TopProduct />
                </Suspense>
            </div>
            <div className="home__fourth">
                <Suspense fallback={<div>Loading News...</div>}>
                    <News />
                </Suspense>
            </div>
        </div>
    );
}
