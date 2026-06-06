"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import TitleShape from "@/components/common/TitleShape";

import client_1 from "@/assets/img/home-1/client-1.jpg"
import client_2 from "@/assets/img/home-1/client.jpg"

interface DataType {
    id: number;
    client: StaticImageData;
    desc: string;
    client_name: string;
    designation: string;
}

export const testi_data: DataType[] = [
    {
        id: 1,
        client: client_1,
        desc: "“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",
        client_name: "Dianne Russell",
        designation: "Brand Manager",
    },
    {
        id: 2,
        client: client_2,
        desc: "“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",
        client_name: "Darlene Robertson",
        designation: "Brand Manager",
    },
    {
        id: 3,
        client: client_1,
        desc: "“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",
        client_name: "Dianne Russell",
        designation: "Brand Manager",
    },
    {
        id: 4,
        client: client_2,
        desc: "“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",
        client_name: "Darlene Robertson",
        designation: "Brand Manager",
    },
];

const setting = {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
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
        1199: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
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
        <section className="testimonial-section-2 section-padding fix">
            <div className="array-button">
                <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        <TitleShape />
                        Customer Feedbacks
                    </span>
                    <h2 className="text-anim">
                        Hear from Our Happy Customers
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper testimonial-slider-2">
                            {testi_data.map((item) => (
                                <SwiperSlide key={item.id} className="swiper-slide">
                                    <div className="testimonial-content">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <p>{item.desc}</p>
                                        <div className="client-image">
                                            <Image src={item.client} alt="img" />
                                        </div>
                                        <h4>{item.client_name}</h4>
                                        <span>{item.designation}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="swiper-dot">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
