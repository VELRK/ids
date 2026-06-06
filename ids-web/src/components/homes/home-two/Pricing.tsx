"use client"
import TitleShape from "@/components/common/TitleShape"
import { useState } from "react";
import pricing_data from "@/data/PricingData";
import Link from "next/link";

import bg_img from "@/assets/img/home-2/pricing-bg.jpg"

const tab_title: string[] = ["Monthly", "yearly"]

const Pricing = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section className="pricing-section-2 section-padding fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="sub-title style-2 text-white wow fadeInUp">
                            <TitleShape />
                            Our Pricing Plans
                        </span>
                        <h2 className="text-white text-anim">
                            Affordable Pricing Packages
                        </h2>
                    </div>
                    <ul className="nav wow fadeInUp" data-wow-delay=".3s">
                        {tab_title.map((tab, index) => (
                            <li key={index} className="nav-item" role="presentation">
                                <button onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tab-content">
                    {pricing_data.filter((items) => items.page === "home_2").map((item, index) => (
                        <div key={item.id} id="mounth" className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}>
                            <div className="row">
                                {item.pricing_details.map((item) => (
                                    <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-box-items">
                                            <div className="nexella-hover-bx hover-bx"></div>
                                            <div className="nexella-hover-bx hover-bx2"></div>
                                            <div className="nexella-hover-bx hover-bx3"></div>
                                            <div className="nexella-hover-bx hover-bx4"></div>
                                            <div className="pricing-header">
                                                <span>Starter</span>
                                                <h3>
                                                    ${item.price}
                                                    <sub>/months</sub>
                                                </h3>
                                                <p>{item.desc}</p>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
