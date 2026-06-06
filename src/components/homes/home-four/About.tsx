"use client";
import { useRef } from "react";
import TitleShape from "@/components/common/TitleShape";
import Image from "next/image";
import Link from "next/link";
import { useHoverRipple } from "@/hooks/useHoverRipple";

import bg_img from "@/assets/img/home-4/about-bg.jpg";
import about_thumb from "@/assets/img/home-4/about.jpg";

const About = () => {

    const btnRef = useRef<HTMLAnchorElement>(null);
    const circleRef = useRef<HTMLElement>(null);

    useHoverRipple(btnRef, circleRef);

    return (
        <section
            className="about-section-4 section-padding fix bg-cover"
            style={{ backgroundImage: `url(${bg_img.src})` }}
        >
            <div className="container">
                <div className="section-title">
                    <span className="sub-title style-2 text-white">
                        <TitleShape />
                        our security services
                    </span>

                    <h2 className="text-white tx-title">
                        Build Strategic And Creative Digital <br />
                        Experiences That Help Brands Connect, <br />
                        Grow, And Inspire Audiences Across <br />
                        Even For Platform
                    </h2>
                </div>

                <div className="about-wrapper-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-4 col-lg-3">
                            <div className="count-item">
                                <h2>
                                    <span className="count">20</span>
                                    <sup>+</sup>
                                </h2>
                                <h5>
                                    Years of Experience of <br /> AI Industries
                                </h5>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-9">
                            <div className="about-right-item">
                                <div className="about-image">
                                    <Image src={about_thumb} alt="img" />
                                </div>

                                <div className="content">
                                    <p>
                                        We are a results-driven IT consulting team helping
                                        businesses unlock efficiency.
                                    </p>

                                    <Link
                                        ref={btnRef}
                                        href="/about"
                                        className="theme-btn-main hover-text-heading tw-hover-btn"
                                    >
                                        <span className="theme-btn-text">
                                            Know{" "}
                                            <span className="theme-btn-icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                            <br /> More Us
                                        </span>

                                        <i
                                            ref={circleRef}
                                            className="tw-btn-circle-dot"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;