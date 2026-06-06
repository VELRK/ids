import Link from "next/link";

interface DataType {
    id: number
    title: string;
    price: string;
    desc: string;
    features: string[];
}

const pricing_data: DataType[] = [
    {
        id: 1,
        title: "Starter",
        price: "29",
        desc: "For businesses ready to level up their digital presence with a professional.",
        features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
    },
    {
        id: 2,
        title: "Essential",
        price: "799",
        desc: "For businesses ready to level up their digital presence with a professional.",
        features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
    },
    {
        id: 3,
        title: "Basic",
        price: "2,800",
        desc: "For businesses ready to level up their digital presence with a professional.",
        features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
    },
]

const PricingArea = () => {
    return (
        <section className="pricing-section-2 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {pricing_data.map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 text-anims">
                            <div className="pricing-box-items style-inner mt-0">
                                <div className="nexella-hover-bx hover-bx"></div>
                                <div className="nexella-hover-bx hover-bx2"></div>
                                <div className="nexella-hover-bx hover-bx3"></div>
                                <div className="nexella-hover-bx hover-bx4"></div>
                                <div className="pricing-header">
                                    <span>
                                        {item.title}</span>
                                    <h3>
                                        ${item.price}
                                        <sub>/months</sub>
                                    </h3>
                                    <p><p>{item.desc}</p></p>
                                </div>
                                <Link href="/pricing" className="theme-btn">
                                    Get started today <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                                <div className="pricing-list">
                                    <h5>Includes:</h5>
                                    <ul>
                                        {item.features.map((list, i) => (
                                            <li key={i}>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                                {list}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingArea
