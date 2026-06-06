"use client"
import Image from "next/image"
import Link from "next/link"
import FooterMenu from "@/components/common/FooterMenu"

import bg_img from "@/assets/img/home-3/footer-bg.png"
import logo from "@/assets/img/logo/black-logo.svg"

const FooterThree = () => {
    return (
        <footer className="footer-section-3 fix">
            <div className="bottom-shape">
                <Image src={bg_img} alt="img" />
            </div>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-widget-wrapper style-wrapper-3">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="footer-widget-items">
                                    <div className="widget-head">
                                        <Link href="/" className="footer-logo">
                                            <Image src={logo} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting.
                                        </p>
                                        <div className="social-icon">
                                            <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FooterMenu />
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="footer-widget-items">
                                    <div className="widget-head">
                                        <h3>Subscribe Newsletter</h3>
                                    </div>
                                    <div className="contact-item">
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <input type="email" placeholder="Email address" />
                                        </form>
                                        <button type="submit" className="theme-btn w-100">
                                            Subscribe now <i className="fa-solid fa-arrow-up-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-wrapper style-3">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            Copyright <span>Intellectworks Digital Solutions.</span> All rights reserved.
                        </p>
                        <ul className="footer-list wow fadeInUp" data-wow-delay=".7s">
                            <li>
                                <Link href="/contact">Privacy policy</Link>
                            </li>
                            <li>।</li>
                            <li>
                                <Link href="/contact">Terms & conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterThree
