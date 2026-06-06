"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image"
import service_data from "@/data/ServiceData"
import Link from "next/link"
import TitleShape from '@/components/common/TitleShape';

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
            slidesPerView: 5,
        },
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
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
}

const Service = () => {
    return (
        <section className="service-section section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="sub-title style-3 wow fadeInUp">
                            <TitleShape />
                            EXPLORE OUR SERVICES
                        </span>
                        <h2 className="text-anim">
                            Transforming Ideas Into <br /> Scalable Solutions
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                        Businesses to thrive in changing digital <br /> world. With over a decade experience.
                    </p>
                    <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                        <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper service-slider">
                {service_data.filter((items) => items.page === "home_1").map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide" style={{ height: "auto" }}>
                        <div className="service-box-item">
                            <div className="icon">
                                <Image src={item.icon} alt="img" />
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href={`/service-details?id=${item.id}`}>{item.title}</Link>
                                </h3>
                                <p>{item.desc}</p>
                                <Link href={`/service-details?id=${item.id}`} className="theme-btn">
                                    Learn more <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
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

export default Service
