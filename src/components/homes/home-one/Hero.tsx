"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'
import Link from 'next/link'
import TitleShape from '@/components/common/TitleShape'
import useHeroParallax from '@/hooks/useHeroParallax'
import dynamic from 'next/dynamic'

const VideoPopup = dynamic(() => import('@/modals/VideoPopup'), { ssr: false });

import rating from "@/assets/img/home-1/hero/rating.png"
// import hero_img2 from "@/assets/img/home-1/hero/hero-1.jpg"
import client_1 from "@/assets/img/home-1/hero/client-1.png"
import client_2 from "@/assets/img/home-1/hero/client-2.png"
import client_3 from "@/assets/img/home-1/hero/client-3.png"
import text from "@/assets/img/home-1/hero/text.png"
import bg_img from "@/assets/img/home-1/hero/hero-bg.jpg"

const Hero = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useHeroParallax(heroRef);

    return (
        <>
            <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
                <div className="container custom-container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h6>
                                    <TitleShape />
                                    NO.1 IT SOLUTION COMPANY
                                </h6>
                                <h1 className="text-anims text-4xl md:text-5xl lg:text-6xl font-bold">
                                    Transforming Ideas Into Powerful Digital Success
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    We build high-performance software, mobile apps, websites, and data-driven marketing strategies that accelerate business growth.                                </p>
                                <div className="hero-btn text-anims">
                                    <Link href="/contact" className="theme-btn">
                                        Get started now <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                    {/* <Link href="/contact" className="theme-btn style-2">
                                        Let’s talk <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link> */}
                                </div>
                            </div>
                            {/* <div className="ratting-image wow fadeInUp" data-wow-delay=".7s">
                                <Image src={rating} alt="img" />
                            </div> */}
                        </div>
                        <div className="col-lg-6">
                            <div ref={heroRef} className="hero-image">
                                {/* <Image src={hero_img2} alt="img" /> */}
                                <div className="box float-bob-y" style={{ display: "none" }}>
                                    <div className="group-image-item">
                                        <div className="group-image" style={{ display: "none" }}>
                                            <Image src={client_1} alt="img" />
                                        </div>
                                        <div className="group-image style-2" style={{ display: "none" }}>
                                            <Image src={client_2} alt="img" />
                                        </div>
                                        <div className="group-image style-2">
                                            <Image src={client_3} alt="img" priority />
                                        </div>
                                        <div className="icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <h4>
                                        Our clients ambitious <br /> businesses.
                                    </h4>
                                </div>
                                <div className="video-circle">
                                    <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn ripple video-popup">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <div className="text-circle">
                                        <Image src={text} alt="img" priority />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Hero
