import Image from "next/image"
import Link from "next/link"
import FooterMenu from "@/components/common/FooterMenu"

import bg from "@/assets/img/home-4/footer-bg.jpg"
import logo from "@/assets/img/logo/white-logo.svg"

const FooterFour = () => {
    return (
        <footer className="footer-section style-2 fix">
            <div className="footer-area bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
                <div className="container">
                    <div className="footer-widget-wrapper style-4">
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
                                        <h3>Get in touch</h3>
                                    </div>
                                    <div className="contact-content">
                                        <h6>
                                            United States — <br />
                                            350 Fifth Avenue, 21st Floor <br /> New York, NY 10118
                                        </h6>
                                        <h6 className="mt-3 mb-3">
                                            <Link href="tel:+5284567592">+528 456-7592</Link>
                                        </h6>
                                        <h6>Mon-Fri 9:00am - 5:00pm</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-wrapper">
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

export default FooterFour
