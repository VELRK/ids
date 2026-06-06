"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import TitleShape from "@/components/common/TitleShape";



import logo_1 from "@/assets/img/home-1/brand/brand-3.png"
import logo_2 from "@/assets/img/home-1/brand/brand-5.png"
import logo_3 from "@/assets/img/home-1/brand/brand-6.png"
import logo_4 from "@/assets/img/home-1/brand/brand-1.png"

interface DataType {
    id: number;
    logo: StaticImageData;
    desc: string;
    client_name: string;
    designation: string;
}

export const testi_data: DataType[] = [
    {
        id: 1,
        logo: logo_1,
        desc: "Intellectworks Digital Solutions has been incredible for Indian Ladies Fashion! They built our beautiful new website and handled all of our SEO and digital marketing. Our online presence has never been stronger. They are so friendly and easy to work with!",
        client_name: "Kousalya",
        designation: "Founder, INDIAN LADIES FASHION",
    },
    {
        id: 2,
        logo: logo_2,
        desc: "Working with Intellectworks Digital Solutions from Malaysia has been a fantastic experience for 2Deal. They developed our iOS and Android mobile apps, along with a flawless web platform. Their team is incredibly friendly and professional, delivering everything exactly as we envisioned.",
        client_name: "Dilip",
        designation: "Founder, 2Deal",
    },
    {
        id: 3,
        logo: logo_3,
        desc: "We couldn't be happier with Intellectworks Digital Solutions. They created an amazing real estate app for Dream Villa Makers on both Android and iOS, plus a fully functional web platform and CRM system. To top it off, their digital marketing and video editing services are top-notch!",
        client_name: "Karthik",
        designation: "CEO, Dream Villa Makers",
    },
    {
        id: 4,
        logo: logo_4,
        desc: "The team at Intellectworks Digital Solutions really knows their stuff! For MakeMyHomes, they developed outstanding Android, iOS, and web applications, along with a powerful CRM. Their video editing and digital marketing services are fantastic, and they're such a friendly team to work with!",
        client_name: "Thayalan",
        designation: "CEO, MakeMyHomes",
    },
    // {
    //     id: 5,
    //     logo: logo_1,
    //     desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
    //     client_name: "Dianne Russell",
    //     designation: "Brand Manager",
    // },
    // {
    //     id: 6,
    //     logo: logo_2,
    //     desc: "“Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting. Businesses to thrive in changing digital world. With over a decade systems that drive.”",
    //     client_name: "Darlene Robertson",
    //     designation: "Brand Manager",
    // },
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
        1199: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
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

interface StyleType {
    style?: boolean;
}

const Testimonial = ({ style }: StyleType) => {
    return (
        <section className={`testimonial-section section-padding fix ${style ? "pb-0" : ""}`}>
            <div className="container">
                <div className="array-button">
                    <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                    <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        <TitleShape />
                        CLIENT TESTIMONIALS
                    </span>
                    <h2 className="text-anim">
                        Client Experiences Inspire <br />
                        Business Trust.
                    </h2>
                </div>
                <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper testimonial-slider">
                    {testi_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="testimonial-box-item">
                                <i className="fa-solid fa-quote-right quote-icon"></i>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>{item.desc} </p>
                                <div className="client-info-item">
                                    <div className="content">
                                        <h4>{item.client_name}</h4>
                                        <span>{item.designation}</span>
                                    </div>
                                    <div className="logo-image">
                                        <Image src={item.logo} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-dot">
                    <div className="dot"></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
