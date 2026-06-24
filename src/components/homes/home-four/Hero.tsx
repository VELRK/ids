import Image from "next/image"
import Link from "next/link"

import shape from "@/assets/img/home-4/hero/shape.png"
import icon from "@/assets/img/home-4/hero/star.png"

const Hero = () => {
    return (
        <section className="hero-section hero-4 fix">
            <div className="hero-shape">
                <Image src={shape} alt="img" priority />
            </div>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                        <div className="hero-content">
                            <span className="sub">
                                <Image src={icon} alt="img" priority />
                                our security services
                            </span>
                            <h1>
                                Transforming ideas into <span>intelligent</span> <b>product</b>
                            </h1>
                            <p>
                                Unlock the power of artificial intelligence to accelerate innovation.Our systems analyze, adapt, and deliver results that truly matter.
                            </p>
                            <div className="hero-button">
                                <Link href="/contact" className="theme-btn">
                                    Get started now <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                                <Link href="/contact" className="theme-btn style-btn">
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
