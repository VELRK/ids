import TitleShape from "@/components/common/TitleShape"
import service_data from "@/data/ServiceData"
import Image from "next/image"

const Feature = () => {
    return (
        <section className="feature-section-3 section-padding fix pt-0">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title mb-0">
                        <span className="sub-title wow fadeInUp">
                            <TitleShape />
                            Our Key Features
                        </span>
                        <h2 className="text-anim">
                            Elevating Your Business <br /> With Next-Level Features
                        </h2>
                    </div>
                    <p className="text-anims">
                        We are a results-driven IT consulting team helping businesses unlock efficiency, scale operations, and improve customer experience. From strategic planning to full-cycle development
                    </p>
                </div>
                <div className="row">
                    {service_data.filter((items) => items.page === "home3_2").map((item) => (
                        <div key={item.id} className="col-lg-6 col-md-6 text-anims">
                            <div className="feature-card-items-3">
                                <div className="icon">
                                    <Image src={item.icon} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
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
