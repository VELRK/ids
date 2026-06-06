import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

const ServiceArea = () => {
    return (
        <section className="service-section-inner bg-white section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {service_data.filter((item) => item.page === "home_1" && item.id !== 7 && item.id !== 6).map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="service-box-item mt-0">
                                <div className="icon">
                                    <Image src={item.icon} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href={`/service-details?id=${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <p>{item.desc}</p>
                                    <Link href={`/service-details?id=${item.id}`} className="theme-btn">
                                        Learn more <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceArea
