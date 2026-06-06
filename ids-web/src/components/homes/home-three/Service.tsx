"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TitleShape from "@/components/common/TitleShape"
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

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
};

const Service = () => {
    
    return (
        <section className="service-section-3 section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="sub-title wow fadeInUp">
                            <TitleShape />
                            Our Services
                        </span>
                        <h2 className="text-anim">
                            Transforming Ideas Into <br /> Digital Solutions
                        </h2>
                    </div>
                    <p className="text-anims">
                        Businesses to thrive in changing digital <br /> world. With over a decade.
                    </p>
                    <div className="array-button text-anims">
                        <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Pagination, Navigation]} className="swiper service-slider-3">
                {service_data.filter((items) => items.page === "home_3").map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="service-card-items-3">
                            <div className="service-image">
                                <Image src={item.icon} alt="img" />
                            </div>
                            <div className="service-content">
                                <h3>
                                    <Link href="/service-details">{item.title}</Link>
                                </h3>
                                <p>
                                    {item.desc}
                                </p>
                                <Link href="/service-details" className="theme-btn">
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
