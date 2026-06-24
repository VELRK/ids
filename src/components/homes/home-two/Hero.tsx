"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Count from "@/components/common/Count";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import bg_img from "@/assets/img/home-1/hero/hero-bg-2.jpg";
import client_1 from "@/assets/img/home-1/hero/client-1.png";
import client_2 from "@/assets/img/home-1/hero/client-2.png";
import client_3 from "@/assets/img/home-1/hero/client-3.png";
import main_img from "@/assets/img/home-1/hero/man-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const wrapper = document.querySelector(".full-img-wrap3");
        const pinEl = document.querySelector(".full-img3");

        if (!wrapper || !pinEl) return;

        const mm = gsap.matchMedia();
        const triggers: ScrollTrigger[] = [];

        mm.add("(min-width: 1400px)", () => {
            const st = ScrollTrigger.create({
                trigger: wrapper,
                start: "top 0",
                end: "bottom 0%",
                pin: pinEl,
                pinSpacing: false,
            });

            triggers.push(st);
        });

        return () => {
            mm.revert();
            triggers.forEach((st) => st.kill());
        };
    }, []);

    return (
        <section
            className="hero-section hero-2 fix bg-cover"
            style={{ backgroundImage: `url(${bg_img.src})` }}
        >
            <div className="hero-box">
                <div className="top-item">
                    <div className="group-image-item">
                        <div className="group-image">
                            <Image src={client_1} alt="img" />
                        </div>
                        <div className="group-image style-2">
                            <Image src={client_2} alt="img" />
                        </div>
                        <div className="group-image style-2">
                            <Image src={client_3} alt="img" />
                        </div>
                        <div className="icon">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <h2>
                        <span className="count">
                            <Count number={3} />
                        </span>
                        k+
                    </h2>
                </div>

                <h3>We support companies that aim higher and move faster.</h3>

                <Link href="/contact" className="theme-btn">
                    Get started now <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
            </div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1>Business driven innovation.</h1>
                            <p>
                                Your growth is our mission. Intellectworks Digital Solutions helps startup and enterprise
                                unlock their full potential.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid full-img-wrap3">
                <div className="hero-imagee full-img3">
                    <Image src={main_img} alt="img" priority />
                </div>
            </div>
        </section>
    );
};

export default Hero;