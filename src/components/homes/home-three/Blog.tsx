"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import { JSX } from "react";
import TitleShape from "@/components/common/TitleShape";
import Link from "next/link";

import blog_1 from "@/assets/img/home-1/news/07.jpg"
import blog_2 from "@/assets/img/home-1/news/08.jpg"
import blog_3 from "@/assets/img/home-1/news/09.jpg"
import blog_4 from "@/assets/img/home-1/news/10.jpg"

interface DataType {
    id: number;
    thumb: StaticImageData;
    title: JSX.Element;
    date: string;
    category: string;
}

const blog_data: DataType[] = [
    {
        id: 1,
        thumb: blog_1,
        title: (<>The Role of Automation <br /> in Enhancing Customer Support</>),
        date: "November 30, 2025",
        category: "Security"
    },
    {
        id: 2,
        thumb: blog_2,
        title: (<>How Custom IT Solutions <br /> Improve Customer Experience</>),
        date: "November 30, 2025",
        category: "Security"
    },
    {
        id: 3,
        thumb: blog_3,
        title: (<>Why Customer Experience <br /> Is Critical for Modern Businesses</>),
        date: "November 30, 2025",
        category: "Security"
    },
    {
        id: 4,
        thumb: blog_4,
        title: (<>Why Every Business Needs a <br /> Customer-Focused IT Strategy</>),
        date: "November 30, 2025",
        category: "Security"
    },
    {
        id: 5,
        thumb: blog_3,
        title: (<>Why Customer Experience <br /> Is Critical for Modern Businesses</>),
        date: "November 30, 2025",
        category: "Security"
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
    pagination: {
        el: ".dot2",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
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
}

const Blog = () => {
    return (
        <section className="news-section-3 section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        <TitleShape />
                        Explore our blogs
                    </span>
                    <h2 className="text-anim">
                        Strategic Services Ideal <br /> For Businesses.
                    </h2>
                </div>
                <div className="news-wrapper">
                    <Swiper {...setting} modules={[Autoplay, Pagination]} className="swiper news-slider">
                        {blog_data.map((item) => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                                <div className="news-card-items-3">
                                    <div className="news-image">
                                        <Image src={item.thumb} alt="img" />
                                        <Image src={item.thumb} alt="img" />
                                    </div>
                                    <div className="news-content">
                                        <div className="list">
                                            <span className="style-2">Security</span>
                                            <span> November 30, 2025</span>
                                        </div>
                                        <h3>
                                            <Link href="/news-details">{item.title}</Link>
                                        </h3>
                                        <Link href="/news-details" className="theme-btn">
                                            Read More <i className="fa-regular fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-dot">
                    <div className="dot2"></div>
                </div>
            </div>
        </section>
    )
}

export default Blog
