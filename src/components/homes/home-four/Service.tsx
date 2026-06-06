import TitleShape from "@/components/common/TitleShape"
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

const Service = () => {
    return (
        <section className="service-section-4 section-padding fix">
            <div className="container">
                <div className="service-wrapper-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-4">
                            <div className="service-left-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title wow fadeInUp">
                                        <TitleShape />
                                        our security services
                                    </span>
                                    <h2 className="text-anim">
                                        Strengening Your Secu Posture
                                    </h2>
                                </div>
                                <p className="text">
                                    Businesses to thrive in changing digital world. With over a decade.
                                </p>
                                <Link href="/service-details" className="theme-btn">
                                    Know more us <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-4">
                                {service_data.filter((items) => items.page === "home3_2").map((item) => (
                                    <div key={item.id} className="col-lg-6 col-md-6">
                                        <div className="service-card-items-4">
                                            <div className="icon">
                                                <Image src={item.icon} alt="img" />
                                            </div>
                                            <div className="content">
                                                <h3>
                                                    <Link href="/service-details">{item.title}</Link>
                                                </h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
