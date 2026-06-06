import TitleShape from "@/components/common/TitleShape"
import Link from "next/link"

interface DataType {
    id: number
    title: string;
    desc: string;
    features: string[];
}

const pricing_data: DataType[] = [
    {
        id: 1,
        title: "Software solution",
        desc: "Early identification of suspicious activi across your system. Our intelligent monitoring engine constantly scans networks.",
        features: ["Application development", "Mobile app development", "SaaS product development", "Enterprise software", "API development",],
    },
    {
        id: 2,
        title: "Tech solution",
        desc: "Early identification of suspicious activi across your system. Our intelligent monitoring engine constantly scans networks.",
        features: ["Application development", "Mobile app development", "SaaS product development", "Enterprise software", "API development",],
    },
    {
        id: 3,
        title: "IT consulting",
        desc: "Early identification of suspicious activi across your system. Our intelligent monitoring engine constantly scans networks.",
        features: ["Application development", "Mobile app development", "SaaS product development", "Enterprise software", "API development",],
    },
]

const Pricing = () => {
    return (
        <section className="pricing-section-4 section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title mb-0">
                        <span className="sub-title wow fadeInUp">
                            <TitleShape />
                            Our Pricing
                        </span>
                        <h2 className="text-anim">
                            Crafting Web Experiences <br /> With AI Power.
                        </h2>
                    </div>
                    <div className="content">
                        <p className="mb-3">
                            Businesses to thrive in changing digital <br /> world. With over a decade.
                        </p>
                        <Link href="/pricing" className="theme-btn">
                            Know more us <i className="fa-solid fa-arrow-up-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {pricing_data.map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="pricing-card-items-4">
                                <div className="pricing-header">
                                    <h3>Software solution</h3>
                                    <p>
                                        Early identification of suspicious activi across your system. Our intelligent monitoring engine constantly scans networks.
                                    </p>
                                </div>
                                <ul className="pricing-list">
                                    {item.features.map((list, i) => (
                                        <li key={i}>
                                            {list}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/pricing" className="theme-btn">
                                    Get started today <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
