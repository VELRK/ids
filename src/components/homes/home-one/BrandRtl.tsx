"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";

import brand_1 from "@/assets/img/home-1/feature/01.png"
import brand_2 from "@/assets/img/home-1/feature/02.png"
import brand_3 from "@/assets/img/home-1/feature/03.png"
import brand_4 from "@/assets/img/home-1/feature/04.png"
import brand_5 from "@/assets/img/home-1/feature/05.png"
import brand_6 from "@/assets/img/home-1/feature/06.png"
import brand_7 from "@/assets/img/home-1/feature/07.png"
import brand_8 from "@/assets/img/home-1/feature/08.png"
import brand_9 from "@/assets/img/home-1/feature/09.png"
import brand_10 from "@/assets/img/home-1/feature/10.png"
import brand_11 from "@/assets/img/home-1/feature/11.png"
import brand_12 from "@/assets/img/home-1/feature/12.png"

const brand_data: StaticImageData[] = [
    brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, brand_9, brand_10, brand_11, brand_12,
    brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, brand_9, brand_10, brand_11, brand_12,
];

const setting = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto' as const,
    spaceBetween: 20,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 6000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

interface RtlStyle {
    rtl?: string;
    dir?: string;
}

const BrandRtl = ({ rtl, dir }: RtlStyle) => {
    return (
        <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
            swiper.wrapperEl.classList.add("slide-transition");
        }} className={`swiper ${rtl ? rtl : "box-slider"}`} dir={dir ? dir : ""}>
            {brand_data.map((brand, i) => (
                <SwiperSlide key={i} className="swiper-slide brand-slide-element">
                    <div className="feature-icon-item">
                        <Image src={brand} alt="" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default BrandRtl
