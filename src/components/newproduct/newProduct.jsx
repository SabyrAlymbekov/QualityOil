import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';
import '@components/newproduct/newProduct.sass'
import ProductCard from "@components/newproduct/ProductCard.jsx";
import castrol from "@assets/castrol.png"
import special from "@assets/special.png"

// 1.5h

export default function NewProduct() {
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
    return <div className="newProducts container">
        <h1 className="newProducts__heading">
            Популярное
        </h1>
        <Swiper navigation={true} modules={[Navigation, Autoplay]} className="newProducts__swiper" slidesPerView={'auto'} loop={true} autoplay={{delay: 7000}} centeredSlides={true}>
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