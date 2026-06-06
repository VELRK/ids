import Image from "next/image"
import Link from "next/link"

import img from "@/assets/img/404.png"

const ErrorArea = () => {
    return (
        <section className="error-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="error-items">
                            <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                                <Image src={img} alt="img" />
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                Link broken or outdated
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".3s">
                                Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted.
                            </p>
                            <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                Back to home <i className="fa-solid fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorArea
