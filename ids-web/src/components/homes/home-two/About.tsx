import Image from "next/image"
import TitleShape from "@/components/common/TitleShape"
import Link from "next/link"

import about_img from "@/assets/img/home-2/about-2.jpg"

const About = () => {
    return (
        <section className="about-section-2 section-padding fix pt-0">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image data-speed=".8" src={about_img} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title wow fadeInUp">
                                        <TitleShape />
                                        ABOUT OUR COMPANY
                                    </span>
                                    <h2 className="text-anim">
                                        We Are More Than a <br /> Digital Agency
                                    </h2>
                                </div>
                                <p className="text wow fadeInUp" data-wow-delay=".3s">
                                    We are a results-driven IT consulting team helping businesses unlock efficiency,
                                    scale operations, and improve customer experience. From strategic planning to
                                    full-cycle development
                                </p>
                                <ul className="about-list wow fadeInUp" data-wow-delay=".5s">
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Friendly & Customer-Focused
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Innovative & Tech-Heavy
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Corporate & Strong
                                    </li>
                                </ul>
                                <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                    Know more us <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
