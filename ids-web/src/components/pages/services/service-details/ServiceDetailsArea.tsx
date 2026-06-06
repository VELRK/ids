"use client"
import Image from "next/image"
import List from "./List"
import WidgetList from "./WidgetList"
import Link from "next/link"
import Faq from "./Faq"
import { useSearchParams } from "next/navigation"
import service_details_data from "@/data/ServiceDetailsData"

import logo from "@/assets/img/logo/white-logo.svg"
import service_thumb2 from "@/assets/img/inner-page/service-details-2.jpg"

const ServiceDetailsArea = () => {
    const searchParams = useSearchParams();
    const idParam = searchParams.get("id");
    const serviceId = idParam ? parseInt(idParam) : 1;

    const service = service_details_data.find(item => item.id === serviceId) || service_details_data[0];

    return (
        <section className="service-details-section fix section-padding">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="service-top-img fix">
                        <Image suppressHydrationWarning data-speed=".8" src={service.bannerImage} alt={service.title} />
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <h2>{service.title}</h2>
                                <p className="mt-3">
                                    {service.introText1}
                                </p>
                                <p className="mt-4">
                                    {service.introText2}
                                </p>
                                <div className="service-list-items">
                                    <List features={service.featuresList} />
                                </div>
                                <h3>{service.processTitle}</h3>
                                <p className="mt-3">
                                    {service.processDesc}
                                </p>
                                <div className="service-box-area">
                                    <div className="row g-4">
                                        {service.processSteps.map((step, index) => (
                                            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="service-box-items">
                                                    <span className="number">{step.number}</span>
                                                    <h5>{step.title}</h5>
                                                    <p>{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="faq-items mt-5">
                                    <Faq faqs={service.faqs} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-details-sidebar">
                                <WidgetList activeId={service.id} />
                                <div className="sidebar-widget-image wow fadeInUp" data-wow-delay=".5s">
                                    <Image suppressHydrationWarning data-speed=".8" src={service_thumb2} alt="img" />
                                    <div className="content">
                                        <h3>Let’s Bring Digital Ideas to Life.</h3>
                                        <Link href="/contact" className="theme-btn">
                                            Get in touch <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                    <div className="white-logo">
                                        <Image suppressHydrationWarning data-speed=".8" src={logo} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetailsArea
