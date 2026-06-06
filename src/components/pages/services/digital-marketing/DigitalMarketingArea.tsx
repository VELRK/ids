import Link from "next/link"
import TitleShape from "@/components/common/TitleShape"

const marketing_services = [
    {
        id: 1,
        icon: "fa-solid fa-search",
        title: "Search Engine Optimization",
        desc: "Enhance online visibility and drive high-quality organic traffic using data-backed on-page, off-page, and technical SEO strategies.",
        link: "/service-details?id=6"
    },
    {
        id: 2,
        icon: "fa-solid fa-globe",
        title: "Social Media Marketing",
        desc: "Build community engagement and brand loyalty with optimized campaigns across Facebook, Instagram, LinkedIn, and TikTok.",
        link: "/service-details?id=7"
    },
    {
        id: 3,
        icon: "fa-solid fa-rectangle-ad",
        title: "PPC & Search Ads",
        desc: "Maximize immediate leads and ROI with targeted pay-per-click Google Search, Display, and Social Ads matching customer intent.",
        link: "/service-details?id=8"
    },
    {
        id: 4,
        icon: "fa-solid fa-pen-nib",
        title: "Content Marketing",
        desc: "Nurture prospects with high-value blogs, articles, and interactive digital copy designed to convert readers into brand advocates.",
        link: "/service-details?id=9"
    },
    {
        id: 5,
        icon: "fa-solid fa-laptop-code",
        title: "Our Digital Platforms",
        desc: "Establish automated customer nurture paths and personalized drip campaigns to improve customer lifetime value.",
        link: "/service-details?id=10"
    },
    {
        id: 6,
        icon: "fa-solid fa-chart-pie",
        title: "Conversion Optimization",
        desc: "Optimize website landing pages and user funnels using behavioral analytics and A/B testing to turn more traffic into sales.",
        link: "/service-details?id=11"
    },

]

const DigitalMarketingArea = () => {
    return (
        <section className="classic-services-grid">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="sub-title justify-content-center wow fadeInUp">
                        <TitleShape />
                        DIGITAL MARKETING CHANNELS
                    </span>
                    <h2 className="tx-title sec_title wow fadeInUp" data-wow-delay=".3s">
                        <span style={{ color: "#163C6A" }}>Classic Solutions to Scale</span> <br /> <span style={{ color: "#EA7925" }}>Your Online Growth.</span>
                    </h2>
                </div>
                <div className="row g-4">
                    {marketing_services.map((item, index) => (
                        <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                            <div className="classic-service-card">
                                <div className="card-header">
                                    <div className="icon-box">
                                        <i className={item.icon}></i>
                                    </div>
                                    <span className="number">0{item.id}</span>
                                </div>
                                <div className="card-content">
                                    <h3>
                                        <Link href={item.link}>{item.title}</Link>
                                    </h3>
                                    <p>{item.desc}</p>
                                    <Link href={item.link} className="explore-link">
                                        Explore Service <i className="fa-solid fa-arrow-right"></i>
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

export default DigitalMarketingArea
