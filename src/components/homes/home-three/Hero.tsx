import Link from "next/link"

import bg_img from "@/assets/img/home-3/hero-bg.jpg"

const Hero = () => {
    return (
        <section className="hero-section hero-3 fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1 className="text-anims">
                                Trusted <br /> protection for
                                bold <span>businesses.</span>
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".3s">
                                Protect your business with advanced cybersecurity solutions designed to modern threats.
                            </p>
                            <div className="hero-btn text-anims">
                                <Link href="/contact" className="theme-btn">
                                    Get started now <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                                <Link href="/contact" className="theme-btn style-2">
                                    Let’s talk <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
