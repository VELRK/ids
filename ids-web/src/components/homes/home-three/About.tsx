import Image from "next/image"
import TitleShape from "@/components/common/TitleShape"
import Link from "next/link"

import about_thumb from "@/assets/img/home-3/about.jpg"

const About = () => {
    return (
        <section className="about-section-3 section-padding fix">
            <div className="container">
                <div className="about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image data-speed=".8" src={about_thumb} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title wow fadeInUp">
                                        <TitleShape />
                                        About Our Company
                                    </span>
                                    <h2 className="text-anim">
                                        Driving Innovation With <br /> Smart Solutions.
                                    </h2>
                                </div>
                                <p className="text text-anims">
                                    We are a results-driven IT consulting team helping businesses unlock efficiency, scale operations, and improve customer experience. From strategic planning to full-cycle development
                                </p>
                                <div className="progress-item text-anims">
                                    <div className="pro-items">
                                        <div className="pro-head">
                                            <span className="point">
                                                82%
                                            </span>
                                            <h6 className="title">
                                                Business Problem Solving
                                            </h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value"></div>
                                        </div>
                                    </div>
                                    <div className="pro-items">
                                        <div className="pro-head">
                                            <span className="point">
                                                98%
                                            </span>
                                            <h6 className="title">
                                                Business Problem Solving
                                            </h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value style-two"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-button-item wow fadeInUp" data-wow-delay=".3s">
                                    <div className="about-button">
                                        <Link href="/about" className="theme-btn">
                                            Know more us <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                    <div className="call-button">
                                        <i className="fa-solid fa-phone-volume"></i> Free Call Here!
                                    </div>
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
