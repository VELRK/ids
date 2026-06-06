"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image"
import TitleShape from "@/components/common/TitleShape";
import { testi_data } from '../home-two/Testimonial';

import testi_thumb from "@/assets/img/home-3/testimonial.jpg"

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
        <section className="testimonial-section-3 section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        <TitleShape />
                        CLIETS TESTIMONIALS
                    </span>
                    <h2 className="text-anim">
                        Building Strong Relationships <br /> Through Results
                    </h2>
                </div>
                <div className="testimonial-wrapper-3">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="testimonial-thumb">
                                <Image data-speed=".8" src={testi_thumb} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-box-3">
                                <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper testimonial-slider-2">
                                    {testi_data.map((item) => (
                                        <SwiperSlide key={item.id} className="swiper-slide">
                                            <div className="testimonial-content-3">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                                                </div>
                                                <p>{item.desc}</p>
                                                <div className="info-item">
                                                    <Image src={item.client} alt="img" />
                                                    <div className="content">
                                                        <h4>{item.client_name}</h4>
                                                        <span>{item.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    <div className="swiper-dot">
                                        <div className="dot"></div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
