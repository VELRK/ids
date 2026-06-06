"use client"

import Image from "next/image"
import List from "../../services/service-details/List"
import logo from "@/assets/img/logo/white-logo.svg"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import project_data from "@/data/ProjectData"

import project_thumb3 from "@/assets/img/inner-page/project-details-03.jpg"
import project_thumb4 from "@/assets/img/inner-page/project-details-06.png"
import project_thumb5 from "@/assets/img/inner-page/service-details-2.jpg"
import project_thumb6 from "@/assets/img/inner-page/project-details-05.png"

const ProjectDetailsArea = () => {
    const searchParams = useSearchParams()
    const idParam = searchParams.get("id")
    const pageParam = searchParams.get("page") || "home_1"
    const projectId = idParam ? parseInt(idParam) : 1

    // Find current project
    const project = project_data.find(item => item.id === projectId && item.page === pageParam) || project_data[0]

    // Navigation calculation (cycle within all project_data items)
    const currentIndex = project_data.findIndex(item => item.id === project.id && item.page === project.page)
    const prevProject = project_data[currentIndex === 0 ? project_data.length - 1 : currentIndex - 1]
    const nextProject = project_data[currentIndex === project_data.length - 1 ? 0 : currentIndex + 1]

    // Dynamic content generator based on category/title
    const getProjectContent = (title: string, categories: string[]) => {
        const titleLower = title.toLowerCase()
        const categoriesLower = categories.map(cat => cat.toLowerCase())

        // Creative Design & Branding
        if (titleLower.includes("design") || categoriesLower.includes("graphic design") || categoriesLower.includes("video editing") || categoriesLower.includes("branding")) {
            return {
                heading: "Crafting Outstanding Visual Identities & Design Excellence",
                p1: "We help brands stand out through creative graphic design, compelling logo creation, dynamic social media branding, and stunning UI/UX design. Our creative solutions capture attention and build memorable brand connections.",
                p2: "Visual communication is the core of customer trust. We build comprehensive brand assets, custom typography layouts, eye-catching motion graphics, and professional video editing that align with your business story.",
                servicesTitle: "Our Creative & Design Services",
                servicesDesc: "Our design workflows blend strategic branding with artistic execution. From user experience blueprints to digital marketing collateral, we provide assets that deliver strong engagement and conversion rates.",
                features: [
                    "Graphic Design & Branding",
                    "Logo & Brand Identity",
                    "Social Media Creatives",
                    "UI/UX Interface Design",
                    "Motion Graphics & Animation",
                    "Professional Video Editing",
                    "Content Writing & Strategy",
                    "Collateral & Print Design"
                ],
                focus: "Creative Design & Branding"
            }
        }

        // Digital Marketing
        if (titleLower.includes("marketing") || categoriesLower.includes("search engine optimization") || categoriesLower.includes("social media marketing")) {
            return {
                heading: "Driving Measurable Growth Through Advanced Digital Marketing",
                p1: "We help businesses reach the right audience at the right time. Our data-driven approach ensures maximum online visibility, high search rankings, and scalable growth for your brand across search engines and social platforms.",
                p2: "By leveraging high-impact SEO, target-audience demographic search filters, pay-per-click advertising, and professional content creation, we build systems that generate quality leads and increase online conversions.",
                servicesTitle: "Our Digital Marketing Services",
                servicesDesc: "Our comprehensive digital marketing campaigns ensure your brand's growth and engagement remain constant. We focus on conversion optimization, branding, search rankings, and campaign performance monitoring.",
                features: [
                    "Search Engine Optimization",
                    "Social Media Marketing",
                    "Pay-Per-Click Advertising",
                    "Content Strategy & Copywriting",
                    "Conversion Rate Optimization",
                    "Email Marketing Campaigns",
                    "Analytics & Performance Audits",
                    "Brand Growth Strategy"
                ],
                focus: "Digital Marketing"
            }
        }

        // Software Development (Default)
        return {
            heading: "Transforming Businesses Through Innovative Software Solutions",
            p1: "We help businesses grow through intelligent mobile apps, modern web development, cloud solutions, and seamless digital connectivity. Our software solutions are designed to improve operations, increase customer engagement, and support long-term business growth.",
            p2: "From startups to established companies, we build scalable, secure, and performance-driven digital products tailored to business needs. Our development approach focuses on clean design, smooth user experience, reliable architecture, and future-ready technology.",
            servicesTitle: "Our Software Development Services",
            servicesDesc: "We provide end-to-end software development services including custom web applications, Android and iOS mobile apps, cloud integration, API development, UI/UX design, business automation, and ongoing technical support.",
            features: [
                "Custom Software Development",
                "Web Application Development",
                "Android App Development",
                "iOS App Development",
                "UI/UX Design Solutions",
                "Cloud Integration Services",
                "API Development & Integration",
                "Enterprise Software Solutions"
            ],
            focus: "Software Development"
        }
    }

    const content = getProjectContent(project.title, project.category)

    return (
        <section className="project-details-section fix section-padding">
            <div className="container">
                <div className="project-details-wrapper">
                    <div className="details-top-img fix">
                        <Image data-speed=".8" src={project.thumb} alt={project.title} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="project-details-content">
                                <h2>{content.heading}</h2>

                                <p className="mt-3">
                                    {content.p1}
                                </p>

                                <p className="mt-4">
                                    {content.p2}
                                </p>

                                <h3>{content.servicesTitle}</h3>

                                <p className="mt-3">
                                    {content.servicesDesc}
                                </p>

                                <div className="project-list-items">
                                    <List features={content.features} />
                                </div>

                                <h3>Smart Digital Solutions</h3>

                                <p className="mt-3">
                                    Our solutions are built to connect people, platforms, and processes.
                                    Whether you need a business website, mobile application, admin panel,
                                    CRM system, or cloud-based platform, we deliver digital products that
                                    are practical, scalable, and easy to manage.
                                </p>

                                <div className="details-image-2 fix">
                                    <Image data-speed=".8" src={project_thumb6} alt="Smart Project" />
                                </div>

                                <div className="row g-4">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="details-img-3">
                                            <Image src={project_thumb3} alt="Web Development Layout" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="details-img-3">
                                            <Image src={project_thumb4} alt="Mobile App Layout" />
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-button d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay=".9s">
                                    <Link href={`/project-details?id=${prevProject.id}&page=${prevProject.page}`} className="d-flex align-items-center gap-xxl-4 gap-3 gap-2 text-decoration-none">
                                        <button className="cmn-prev cmn-border d-center" type="button">
                                            <i className="fas fa-chevron-left"></i>
                                        </button>
                                        <span className="previus-text text-capitalize">
                                            Preview
                                        </span>
                                    </Link>

                                    <Link href="/project" className="icon-gird text-decoration-none">
                                        <i className="fa-solid fa-grid"></i>
                                    </Link>

                                    <Link href={`/project-details?id=${nextProject.id}&page=${nextProject.page}`} className="d-flex align-items-center gap-xxl-4 gap-3 gap-2 text-decoration-none">
                                        <span className="previus-text text-capitalize">
                                            Next
                                        </span>
                                        <button className="cmn-next cmn-border d-center" type="button">
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="project-details-sidebar">
                                <div className="sidebar-widget">
                                    <div className="sideber-title">
                                        <h4 className="wow fadeInUp" data-wow-delay=".2s">
                                            <i className="fa-solid fa-chart-line"></i>
                                            Project Highlights
                                        </h4>
                                    </div>

                                    <ul className="project-infrom wow fadeInUp" data-wow-delay=".4s">
                                        <li>
                                            <span>Client Focus:</span>
                                            IntellectWorks Solutions
                                        </li>
                                        <li>
                                            <span>Category:</span>
                                            {project.category.join(", ")}
                                        </li>
                                        <li>
                                            <span>Service Sector:</span>
                                            {content.focus}
                                        </li>
                                        <li>
                                            <span>Platform Focus:</span>
                                            {project.category[0] || "Custom"}
                                        </li>
                                        <li>
                                            <span>Release Date:</span>
                                            18 Nov 2025
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-widget-image wow fadeInUp" data-wow-delay=".5s">
                                    <Image src={project_thumb5} alt="Digital Solution" />

                                    <div className="content">
                                        <h3>Let’s Build Your Next Digital Solution.</h3>
                                        <Link href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                            Get in touch <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>

                                    <div className="white-logo">
                                        <Image src={logo} alt="Logo" />
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

export default ProjectDetailsArea