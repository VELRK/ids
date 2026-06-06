"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import TitleShape from "@/components/common/TitleShape";
import { StaticImageData } from "next/image";

import client_1 from "@/assets/img/home-1/client-1.jpg"
import client_2 from "@/assets/img/home-1/client.jpg"
import logo_1 from "@/assets/img/home-1/brand/brand-3.png"
import logo_2 from "@/assets/img/home-1/brand/brand-5.png"

interface DataType {
    id: number;
    client: StaticImageData;
    logo: StaticImageData;
    desc: string;
    client_name: string;
    designation: string;
}

const testi_data: DataType[] = [
    {
        id: 1,
        client: client_1,
        logo: logo_1,
        desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
        client_name: "Dianne Russell",
        designation: "Brand Manager",
    },
    {
        id: 2,
        client: client_2,
        logo: logo_2,
        desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
        client_name: "Darlene Robertson",
        designation: "Brand Manager",
    },
    {
        id: 3,
        client: client_1,
        logo: logo_1,
        desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
        client_name: "Dianne Russell",
        designation: "Brand Manager",
    },
    {
        id: 4,
        client: client_2,
        logo: logo_2,
        desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
        client_name: "Darlene Robertson",
        designation: "Brand Manager",
    },
    {
        id: 5,
        client: client_1,
        logo: logo_1,
        desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
        client_name: "Dianne Russell",
        designation: "Brand Manager",
    },
    {
        id: 6,
        client: client_2,
        logo: logo_2,
        desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
        client_name: "Darlene Robertson",
        designation: "Brand Manager",
    },
];

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
    pagination: {
        el: ".dot",
        clickable: true,
    },
    breakpoints: {
        1399: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
};

const Testimonial = () => {
    return (
        <section className="testimonial-section-4 section-padding fix pb-0">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        <TitleShape />
                        CLIENT TESTIMONIALS
                    </span>
                    <h2 className="text-anim">
                        Crafting Web Experiences <br /> with AI Power.
                    </h2>
                </div>
            </div>
            <div className="array-button">
                <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper testimonial-slider-4">
                {testi_data.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="testimonial-box-item-4">
                            <div className="info-item">
                                <Image src={item.client} alt="img" />
                                <div className="content">
                                    <h4>{item.client_name}</h4>
                                    <span>{item.designation}</span>
                                </div>
                            </div>
                            <p>{item.desc}</p>
                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-dot">
                    <div className="dot"></div>
                </div>
            </Swiper>
        </section>
    )
}

export default Testimonial
