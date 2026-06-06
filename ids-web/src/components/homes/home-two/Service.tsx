"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TitleShape from "@/components/common/TitleShape"
import Link from "next/link"
import Image, { StaticImageData } from 'next/image';

import bg_img from "@/assets/img/home-2/service-bg.jpg"
import brand_1 from "@/assets/img/home-1/brand/b-1.png"
import brand_2 from "@/assets/img/home-1/brand/b-2.png"
import brand_3 from "@/assets/img/home-1/brand/b-3.png"
import brand_4 from "@/assets/img/home-1/brand/b-4.png"
import brand_5 from "@/assets/img/home-1/brand/b-5.png"
import brand_6 from "@/assets/img/home-1/brand/b-6.png"

interface DataType {
    id: number;
    title: string;
    desc: string;
    class?: string;
}

const service_data: DataType[] = [
    {
        id: 1,
        title: "Software solution",
        desc: "We are a results-driven IT consulting team helping businesses unlock development",
        class: "style-2",
    },
    {
        id: 2,
        title: "Tech solution",
        desc: "We are a results-driven IT consulting team helping businesses unlock development"
    },
    {
        id: 3,
        title: "IT consulting",
        desc: "We are a results-driven IT consulting team helping businesses unlock development"
    },
    {
        id: 4,
        title: "Cyber security",
        desc: "We are a results-driven IT consulting team helping businesses unlock development"
    },
];

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_3, brand_4,];

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

const Service = () => {
    return (
        <section className="service-section-2 section-padding fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="sub-title text-white style-2 wow fadeInUp">
                            <TitleShape />
                            Service We Provide
                        </span>
                        <h2 className="text-white text-anim">
                            Transforming Ideas Into <br /> Scalable Solutions.
                        </h2>
                    </div>
                    <Link href="/service" className="theme-btn">
                        Explore more <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                </div>
                {service_data.map((item) => (
                    <div key={item.id} className="global-service-box text-anims">
                        <div className="global-content">
                            <div className="content">
                                <span className="number">0{item.id}.</span>
                                <h3><Link href="/service-details">{item.title}</Link></h3>
                            </div>
                        </div>
                        <p className="text">
                            {item.desc}
                        </p>
                        <Link href="/service-details" className="icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </Link>
                    </div>
                ))}
            </div>
            <Swiper {...setting} modules={[Autoplay]} className="swiper brand-slider style-2 ">
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
        </section>
    )
}

export default Service
