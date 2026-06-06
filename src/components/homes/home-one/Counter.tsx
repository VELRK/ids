"use client"
import { useState } from "react"
import counter_data from "@/data/CounterData"
import VideoPopup from "@/modals/VideoPopup"
import Image from "next/image"
import BrandRtl from "./BrandRtl"
import TitleShape from '@/components/common/TitleShape'
import Link from "next/link"

import bg_img from "@/assets/img/home-1/bg.jpg"
import img_2 from "@/assets/img/home-1/hero/text.png"

const Counter = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="counter-section section-padding fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="row g-4">
                            <div className="col-xl-6 col-lg-7">
                                <div className="row g-4">
                                    {counter_data.filter((items) => items.page === "home_1").map((item) => (
                                        <div key={item.id} className="col-lg-6 col-md-6 text-anims">
                                            <div className="counter-box-item">
                                                <div className="counter-top-item">
                                                    <h2><span className="count">{item.count}</span>{item.count_text}</h2>
                                                    <div className="top-right">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="counter-content">
                                    <div className="section-title mb-0">
                                        <span className="sub-title style-2 text-white wow fadeInUp">
                                            <TitleShape />
                                            IT SOLUTIONS COMPANY
                                        </span>
                                        <h2 className="text-white text-anim">
                                            Transforming Ideas <br /> Into Digital Success
                                        </h2>
                                    </div>
                                    <p className="text">
                                        We build robust, scalable solutions that drive real business impact.
                                    </p>
                                    <div className="video-circle">
                                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn ripple video-popup">
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                        <div className="text-circle">
                                            <Image src={img_2} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-top-item">
                    <div className="container">
                        <div className="section-title-area">
                            <div className="section-title mb-0">
                                <span className="sub-title style-2 text-white mb-0">
                                    <TitleShape />
                                    Business Growth
                                </span>
                            </div>
                            <div className="section-right">
                                <div className="section-title mb-0">
                                    <h2 className="text-white">
                                        Technologies & Frameworks We Use
                                    </h2>
                                    <p className="mt-3">
                                        Businesses to thrive in changing digital  world. With over a decade.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <BrandRtl />
                    <BrandRtl rtl="box-slider-2 mt-3" dir="rtl" />
                </div>
            </section>
            <VideoPopup
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="Otim2mDjsYM"
            />
        </>
    )
}

export default Counter
