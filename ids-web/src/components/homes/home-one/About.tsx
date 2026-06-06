"use client";

import Image from "next/image"
import Link from "next/link"
import Count from "@/components/common/Count"

import TitleShape from '@/components/common/TitleShape'
import about_img2 from "@/assets/img/home-1/about.jpg"

const About = () => {

    return (
        <section className="about-section section-padding fix">
            <div className="container">
                <div className="section-title-premium-row row align-items-center g-4">
                    <div className="col-lg-3">
                        <span className="sub-title-badge">
                            <TitleShape />
                            ABOUT OUR COMPANY
                        </span>
                    </div>
                    <div className="col-lg-9">
                        <h2 className="section-title-premium tx-title sec_title text-anims">
                            Empowering businesses with innovative <span className="gradient-text">web development</span>, <span className="gradient-text">mobile apps</span>, and <span className="gradient-text">digital marketing solutions</span> to grow, connect, and succeed in the modern digital world.
                        </h2>
                    </div>
                </div>
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-5">
                            <div className="classic-image-container text-anims">
                                <div className="about-image-wrapper">
                                    <Image src={about_img2} alt="img" style={{ width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="classic-about-content">
                                <div className="intro-text-box text-anims">
                                    <p>
                                        We specialize in <span>web and app development</span>, building robust solutions that empower businesses to thrive in a fast-changing digital world. Our team combines technology, strategy, and creativity to drive growth and efficiency.
                                    </p>
                                    <p>
                                        Through strategic <span>digital and marketing</span> services, we amplify your brand&apos;s reach and impact. From custom applications to targeted campaigns, we build systems that connect you with your audience and accelerate success.
                                    </p>
                                </div>

                                <div className="stats-grid-row row g-4">
                                    <div className="col-sm-6 text-anims">
                                        <div className="classic-stat-card">
                                            <div className="stat-icon-box">
                                                <i className="fa-solid fa-chart-line"></i>
                                            </div>
                                            <div className="stat-number-box">
                                                <h3>
                                                    <span className="count">
                                                        <Count number={40} />
                                                    </span>
                                                    <sup>+</sup>
                                                </h3>
                                            </div>
                                            <div className="stat-info-box">
                                                <h5>Digital Solutions</h5>
                                                <p>Personalization at ultimate scale</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 text-anims">
                                        <div className="classic-stat-card">
                                            <div className="stat-icon-box">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </div>
                                            <div className="stat-number-box">
                                                <h3>
                                                    <span className="count">
                                                        <Count number={100} />
                                                    </span>
                                                    <sup>%</sup>
                                                </h3>
                                            </div>
                                            <div className="stat-info-box">
                                                <h5>Project Delivery</h5>
                                                <p>Guaranteed success and support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-anims">
                                    <Link href="/about" className="theme-btn">
                                        Know more us <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
