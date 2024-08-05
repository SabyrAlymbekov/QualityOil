import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';
import '@components/TopProduct/TopProduct.sass';
import ProductCard from "@components/newproduct/ProductCard.jsx";
import castrol from "@assets/castrol.png"
import special from "@assets/special.png"

// 10min +

export default function TopProduct() {
    let data = [
        {
            img: castrol,
            cost: 1560,
            name: "Castrol"
        },
        {
            img: special,
            cost: 1260,
            name: "mitsubishi"
        },{
            img: castrol,
            cost: 1560,
            name: "Castrol"
        },
        {
            img: special,
            cost: 1260,
            name: "mitsubishi"
        },{
            img: castrol,
            cost: 1560,
            name: "Castrol"
        }, {
            img: special,
            cost: 1260,
            name: "mitsubishi"
        },{
            img: castrol,
            cost: 1560,
            name: "Castrol"
        }, {
            img: special,
            cost: 1260,
            name: "mitsubishi"
        },
    ]
    return <div className="topProducts container">
        <h1 className="topProducts__heading">
            Популярное
        </h1>
        <Swiper navigation={true} modules={[Navigation, Autoplay]} className="topProducts__swiper" slidesPerView={'auto'} loop={true} autoplay={{delay: 7000}} centeredSlides={true}>
            {
                data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={item}></ProductCard>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
}