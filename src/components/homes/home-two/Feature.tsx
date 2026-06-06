import service_data from "@/data/ServiceData"
import Image from "next/image"

const Feature = () => {
    return (
        <section className="feature-section-2 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {service_data.filter((items) => items.page === "home_2").map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 text-anims">
                            <div className="feature-icon-item-2">
                                <div className="icon">
                                    <Image src={item.icon} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature
