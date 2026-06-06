"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";

import brand_1 from "@/assets/img/home-1/brand/brand-1.png"
import brand_2 from "@/assets/img/home-1/brand/brand-2.png"
import brand_3 from "@/assets/img/home-1/brand/brand-3.png"
import brand_4 from "@/assets/img/home-1/brand/brand-4.png"
import brand_5 from "@/assets/img/home-1/brand/brand-5.png"
import brand_6 from "@/assets/img/home-1/brand/brand-6.png"
import brand_7 from "@/assets/img/home-1/brand/brand-7.png"
import brand_8 from "@/assets/img/home-1/brand/brand-8.png"
import brand_9 from "@/assets/img/home-1/brand/brand-9.png"
import brand_10 from "@/assets/img/home-1/brand/brand-10.png"
import brand_11 from "@/assets/img/home-1/brand/brand-11.png"
import brand_12 from "@/assets/img/home-1/brand/brand-12.png"
import brand_13 from "@/assets/img/home-1/brand/brand-13.png"



const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, brand_9, brand_10, brand_11, brand_12, brand_13];

const setting = {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-next",
        prevEl: ".array-prev",
    },
    breakpoints: {
        1399: {
            slidesPerView: 6,
        },
        1199: {
            slidesPerView: 5.5,
        },
        991: {
            slidesPerView: 4.5,
        },
        767: {
            slidesPerView: 3.3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.3,
        },
    },
};

interface BrandType {
    style?: boolean
}

const BrandCommon = ({ style }: BrandType) => {
    return (
        <Swiper {...setting} modules={[Autoplay]} className={`swiper brand-slider ${style ? "style-2" : ""}`}>
            {brand_data.map((brand, i) => (
                <SwiperSlide key={i} className="swiper-slide"><div className="brand-box-1">
                    <span className="brand-img-1">
                        <Image src={brand} alt="" />
                    </span>
                    <span className="brand-img-1">
                        <Image src={brand} alt="" />
                    </span>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default BrandCommon
