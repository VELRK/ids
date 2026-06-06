"use client"
import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import logo from "@/assets/img/logo/white-logo.svg"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import our_project_data from "@/data/OurProjectData"
import ImagePopup from "@/modals/ImagePopup"
import DigitalMarketingDetails from "./DigitalMarketingDetails"

const OurProjectDetailsArea = () => {
    const searchParams = useSearchParams();
    const idParam = searchParams.get("id");
    const projectId = idParam ? parseInt(idParam) : 1;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | string | null>(null);

    // Redirect Portal Overlay State
    const [redirectStatus, setRedirectStatus] = useState<{
        destinationName: string;
        url: string;
    } | null>(null);
    const [redirectTimeoutId, setRedirectTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleRedirectClick = (dest: string, url: string) => {
        setRedirectStatus({ destinationName: dest, url });

        const tId = setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
            setRedirectStatus(null);
        }, 2200);
        setRedirectTimeoutId(tId);
    };

    const cancelRedirect = () => {
        if (redirectTimeoutId) {
            clearTimeout(redirectTimeoutId);
            setRedirectTimeoutId(null);
        }
        setRedirectStatus(null);
    };

    // Find the project or fallback to the first one
    const project = our_project_data.find(item => item.id === projectId) || our_project_data[0];

    // Navigation calculation (cycle within same projectType)
    const filteredProjects = our_project_data.filter(item => item.projectType === project.projectType);
    const currentIndex = filteredProjects.findIndex(item => item.id === project.id);
    
    const prevProject = filteredProjects[currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1];
    const nextProject = filteredProjects[currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1];
    
    const prevId = prevProject ? prevProject.id : 1;
    const nextId = nextProject ? nextProject.id : 1;

    // Dynamic app-centric features based on the application project
    const appFeatures = project.coreFeatures || [];

    // Dynamic detailed methodology cards
    const methodologyCards = project.methodologyCards || [];

    if (project.projectType === "digital-marketing") {
        return <DigitalMarketingDetails project={project} prevId={prevId} nextId={nextId} />
    }

    return (
        <section className="project-details-section fix section-padding">
            <div className="container">
                <div className="project-details-wrapper">
                    {/* Hero Grid Section */}
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="app-mockup-container wow fadeInLeft" data-wow-delay=".2s">
                                <div className="glowing-mesh"></div>
                                <div className="clean-mockup">
                                    <div className="clean-content">
                                        <Image
                                            src={project.thumb}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                            className="clean-screenshot"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-details-content wow fadeInRight" data-wow-delay=".4s" style={{ paddingLeft: '15px' }}>
                                <span className="app-badge mb-3">
                                    <i className="fa-solid fa-rocket me-1"></i>
                                    {project.category[0]} Project
                                </span>
                                <h2 className="project-title mb-3">
                                    {project.title}
                                </h2>
                                <p className="project-desc mb-4">
                                    {project.description}
                                </p>
                                <div className="project-meta-pills d-flex flex-wrap gap-2 mb-4">
                                    {project.category.map((cat, i) => (
                                        <span key={i} className="meta-pill">
                                            <i className="fa-solid fa-tag me-2"></i>
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                {/* Dynamic Project Action Buttons */}
                                {(project.projectLink || project.appStoreLink || project.playStoreLink) && (
                                    <div className="project-action-buttons d-flex flex-wrap gap-3 mt-4 mb-4 wow fadeInUp" data-wow-delay=".5s">
                                        {project.projectLink && (
                                            <button
                                                onClick={() => handleRedirectClick("Website", project.projectLink!)}
                                                className="action-btn website-btn"
                                                title="Visit project website"
                                            >
                                                <div className="btn-icon">
                                                    <i className="fa-solid fa-globe"></i>
                                                </div>
                                                <div className="btn-text">
                                                    <span className="btn-subtitle">Live Preview</span>
                                                    <span className="btn-title">Visit Website</span>
                                                </div>
                                                <div className="btn-arrow">
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </div>
                                            </button>
                                        )}
                                        {project.appStoreLink && (
                                            <button
                                                onClick={() => handleRedirectClick("App Store", project.appStoreLink!)}
                                                className="action-btn appstore-btn"
                                                title="Download from App Store"
                                            >
                                                <div className="btn-icon">
                                                    <i className="fa-brands fa-apple"></i>
                                                </div>
                                                <div className="btn-text">
                                                    <span className="btn-subtitle">Download on the</span>
                                                    <span className="btn-title">App Store</span>
                                                </div>
                                                <div className="btn-arrow">
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </div>
                                            </button>
                                        )}
                                        {project.playStoreLink && (
                                            <button
                                                onClick={() => handleRedirectClick("Google Play", project.playStoreLink!)}
                                                className="action-btn playstore-btn"
                                                title="Get it on Google Play"
                                            >
                                                <div className="btn-icon">
                                                    <i className="fa-brands fa-google-play"></i>
                                                </div>
                                                <div className="btn-text">
                                                    <span className="btn-subtitle">Get it on</span>
                                                    <span className="btn-title">Google Play</span>
                                                </div>
                                                <div className="btn-arrow">
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Features and Specs Section */}
                    <div className="row g-4 mt-5">
                        <div className="col-lg-8">
                            <div className="project-details-content">
                                <h3 className="section-subtitle wow fadeInUp" data-wow-delay=".2s">App Development Methodology</h3>
                                <p className="mt-3 wow fadeInUp" data-wow-delay=".3s" style={{ color: '#64748b', fontSize: '15px' }}>
                                    Our development lifecycle prioritizes agility, security, and exceptional performance. We craft architectural frameworks that support frictionless scalability, low network latency, and secure auth layers.
                                </p>

                                {/* Dynamic Methodology Cards Grid */}
                                <div className="row g-4 mt-2">
                                    {methodologyCards.map((mCard, idx) => (
                                        <div key={idx} className="col-md-6 wow fadeInUp" data-wow-delay={`${0.15 * idx}s`}>
                                            <div className="methodology-card">
                                                <div className="m-card-icon-wrapper" style={{ background: mCard.grad, color: mCard.iconColor }}>
                                                    <i className={mCard.icon}></i>
                                                </div>
                                                <div className="m-card-info">
                                                    <h5 className="m-card-title">{mCard.title}</h5>
                                                    <p className="m-card-desc">{mCard.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="section-subtitle mt-5 wow fadeInUp" data-wow-delay=".5s">Core Features & Architecture</h3>
                                <p className="mt-3 wow fadeInUp" data-wow-delay=".6s" style={{ color: '#64748b', fontSize: '15px' }}>
                                    Engineered with the latest technologies to deliver reliability and a high-performance experience under extreme operational loads.
                                </p>

                                {/* Refactored Custom Feature Cards Grid */}
                                <div className="features-card-grid row g-3 mt-2">
                                    {appFeatures.map((feat, idx) => (
                                        <div key={idx} className="col-md-6 wow fadeInUp" data-wow-delay={`${0.08 * idx}s`}>
                                            <div className="feature-item-card">
                                                <div className="feature-check-icon">
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </div>
                                                <span className="feature-text">{feat}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="section-subtitle mt-5 wow fadeInUp" data-wow-delay=".5s">Application Visual Showcase</h3>
                                <p className="mt-3 wow fadeInUp" data-wow-delay=".6s" style={{ color: '#64748b', fontSize: '15px' }}>
                                    Explore the internal dashboards, layout mockups, and client-facing interfaces designed specifically for this project edition.
                                </p>

                                <div className="row g-4 mt-3">
                                    {project.gallery.map((galleryImg, idx) => (
                                        <div key={idx} className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.7 + idx * 0.1}s`}>
                                            <div
                                                className="gallery-card"
                                                onClick={() => {
                                                    setSelectedImage(galleryImg);
                                                    setIsPopupOpen(true);
                                                }}
                                            >
                                                <div className="gallery-img-container">
                                                    <Image
                                                        src={galleryImg}
                                                        alt={`${project.title} Screenshot ${idx + 1}`}
                                                        className="gallery-image"
                                                    />
                                                    <div className="gallery-overlay">
                                                        <div className="gallery-icon">
                                                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                                                        </div>
                                                        <span className="gallery-text">View Screenshot</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Custom Redesigned Next/Prev Slider Controls */}
                                <div className="slider-button d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="1.1s">
                                    <Link href={`/our-project-details?id=${prevId}`} className="d-flex align-items-center gap-3 text-decoration-none hover-theme-color">
                                        <button className="cmn-prev d-center" type="button">
                                            <i className="fas fa-chevron-left"></i>
                                        </button>
                                        <span className="previus-text text-capitalize" style={{ fontWeight: 700, fontSize: '16px' }}>
                                            Prev Project
                                        </span>
                                    </Link>
                                    <div className="icon-grid">
                                        <Link href="/our-projects" title="All Projects" className="icon-grid-link">
                                            <i className="fa-solid fa-table-cells"></i>
                                        </Link>
                                    </div>
                                    <Link href={`/our-project-details?id=${nextId}`} className="d-flex align-items-center gap-3 text-decoration-none hover-theme-color">
                                        <span className="previus-text text-capitalize" style={{ fontWeight: 700, fontSize: '16px' }}>
                                            Next Project
                                        </span>
                                        <button className="cmn-next d-center" type="button">
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Specifications */}
                        <div className="col-lg-4">
                            <div className="project-details-sidebar">
                                <div className="sidebar-widget spec-widget wow fadeInUp" data-wow-delay=".2s">
                                    <div className="sideber-title mb-4">
                                        <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--theme)', margin: 0 }}>
                                            <i className="fa-solid fa-cube text-primary me-2 animate-pulse"></i>
                                            Project Specifications
                                        </h4>
                                    </div>
                                    <ul className="project-infrom" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            { label: "Client", val: project.client, icon: "fa-solid fa-briefcase" },
                                            { label: "Platform", val: project.category[0] || "Web / Mobile App", icon: "fa-solid fa-laptop-code" },
                                            { label: "Location", val: project.location, icon: "fa-solid fa-map-location-dot" },
                                            { label: "Sector", val: project.sector, icon: "fa-solid fa-chart-pie" },
                                            { label: "Release Date", val: project.date, icon: "fa-solid fa-calendar-days" }
                                        ].map((spec, i) => (
                                            <li key={i} className="spec-row">
                                                <div className="spec-label">
                                                    <div className="spec-icon">
                                                        <i className={spec.icon}></i>
                                                    </div>
                                                    <span>{spec.label}</span>
                                                </div>
                                                <span className="spec-value">{spec.val}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Premium Glowing Sidebar CTA Advertisement */}
                                <div className="sidebar-widget-image wow fadeInUp mt-4" data-wow-delay=".4s">
                                    <Image src={project.sidebarThumb} alt="Sidebar decoration" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} className="sidebar-bg-img" />
                                    <div className="gradient-overlay"></div>
                                    <div className="content p-4 text-white d-flex flex-column justify-content-between h-100" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 2 }}>
                                        <div className="white-logo p-1" style={{ width: '90px' }}>
                                            <Image src={logo} alt="Logo" />
                                        </div>
                                        <div style={{ marginTop: '50px' }}>
                                            <h3 className="mb-3 text-white" style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.3 }}>Let’s Bring Digital Ideas to Life.</h3>
                                            <Link href="/contact" className="theme-btn text-white text-decoration-none premium-cta-btn">
                                                <span>Get in touch</span>
                                                <i className="fa-solid fa-arrow-up-right ms-2 animate-bounce-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImagePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                imageSrc={selectedImage}
            />

            {/* Portals Redirecting Overlay */}
            {redirectStatus && (
                <div className="redirect-overlay">
                    <div className="redirect-card">
                        <div className="portal-ring">
                            <div className="portal-core">
                                <i className={
                                    redirectStatus.destinationName === "App Store" ? "fa-brands fa-apple" :
                                        redirectStatus.destinationName === "Google Play" ? "fa-brands fa-google-play" :
                                            "fa-solid fa-globe"
                                }></i>
                            </div>
                            <div className="ring-pulse-1"></div>
                            <div className="ring-pulse-2"></div>
                        </div>
                        <h3>Connecting to {redirectStatus.destinationName}</h3>
                        <p>You are being securely redirected to our official project page.</p>

                        <div className="redirect-loader">
                            <div className="loader-fill"></div>
                        </div>

                        <span className="redirect-url">{redirectStatus.url}</span>

                        <button className="cancel-redirect-btn" onClick={cancelRedirect}>
                            Cancel Redirection
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Embedded CSS overrides for premium interactions */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .project-details-section {
                    background: linear-gradient(180deg, #fafbfe 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                }
                .app-mockup-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px 20px;
                    position: relative;
                }
                
                /* Dynamic Backdrop Mesh Glow */
                .glowing-mesh {
                    position: absolute;
                    width: 320px;
                    height: 320px;
                    background: radial-gradient(circle, rgba(18, 62, 122, 0.25) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(255, 255, 255, 0) 100%);
                    filter: blur(40px);
                    z-index: 1;
                    pointer-events: none;
                    border-radius: 50%;
                    animation: floatGlow 8s infinite ease-in-out;
                }
                @keyframes floatGlow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15px, -15px) scale(1.15); }
                }

                /* Clean Image Mockup CSS */
                .clean-mockup {
                    background: #ffffff;
                    border-radius: 16px;
                    box-shadow: 0 30px 70px -15px rgba(11, 13, 23, 0.2);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    width: 100%;
                    max-width: 580px;
                    margin: 0 auto;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.6s ease;
                    perspective: 1000px;
                    position: relative;
                    z-index: 2;
                    padding: 8px;
                }
                .clean-mockup:hover {
                    transform: translateY(-8px) rotateX(3deg) rotateY(-2deg);
                    box-shadow: 0 45px 85px -20px rgba(18, 62, 122, 0.15);
                }
                
                .clean-content {
                    background: #f8fafc;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                }
                .clean-screenshot {
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
                .clean-mockup:hover .clean-screenshot {
                    transform: scale(1.02);
                }

                /* Text & Pills Styling */
                .app-badge {
                    background: linear-gradient(135deg, rgba(18, 62, 122, 0.08) 0%, rgba(59, 130, 246, 0.12) 100%);
                    color: var(--theme);
                    padding: 8px 18px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid rgba(18, 62, 122, 0.15);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 4px 15px rgba(18, 62, 122, 0.04);
                }
                .project-title {
                    font-weight: 900 !important;
                    font-size: 42px !important;
                    letter-spacing: -0.5px;
                    background: linear-gradient(135deg, #0b0d17 0%, #123e7a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 20px;
                }
                .project-desc {
                    line-height: 1.8;
                    font-size: 16px;
                    color: #475569 !important;
                }
                .meta-pill {
                    background-color: rgba(248, 250, 252, 0.8);
                    color: #4b5563;
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }
                .meta-pill i {
                    color: var(--theme);
                }
                .meta-pill:hover {
                    transform: translateY(-2px);
                    border-color: var(--theme);
                    background-color: #fff;
                    color: var(--theme);
                    box-shadow: 0 8px 20px rgba(18, 62, 122, 0.08);
                }

                /* Subtitle Styling */
                .section-subtitle {
                    font-size: 26px !important;
                    font-weight: 800 !important;
                    color: #0b0d17;
                    position: relative;
                    padding-bottom: 12px;
                    margin-bottom: 20px;
                }
                .section-subtitle::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(to right, var(--theme), #3b82f6);
                    border-radius: 4px;
                }

                /* Methodology Feature Card Grid */
                .methodology-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    gap: 20px;
                    box-shadow: 0 10px 30px rgba(18, 62, 122, 0.02);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                }
                .methodology-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(18, 62, 122, 0.2);
                    box-shadow: 0 20px 40px rgba(18, 62, 122, 0.06);
                }
                .m-card-icon-wrapper {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    flex-shrink: 0;
                    transition: transform 0.4s ease;
                }
                .methodology-card:hover .m-card-icon-wrapper {
                    transform: scale(1.1) rotate(-8deg);
                }
                .m-card-info {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .m-card-title {
                    font-size: 17px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }
                .m-card-desc {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Features Card Grid */
                .feature-item-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    padding: 18px 20px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 4px 15px rgba(18, 62, 122, 0.02);
                    transition: all 0.3s ease;
                }
                .feature-item-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(18, 62, 122, 0.15);
                    box-shadow: 0 12px 28px rgba(18, 62, 122, 0.06);
                    background: linear-gradient(to right, #fff, #f8fafc);
                }
                .feature-check-icon {
                    font-size: 20px;
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .feature-item-card:hover .feature-check-icon {
                    transform: scale(1.18) rotate(6deg);
                }
                .feature-text {
                    font-weight: 600;
                    font-size: 14px;
                    color: #334155;
                }

                /* Visual Showcase Gallery Grid */
                .gallery-img-container {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0f172a;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 8px 24px rgba(18, 62, 122, 0.03);
                }
                .gallery-image {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(18, 62, 122, 0.85);
                    backdrop-filter: blur(4px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    opacity: 0;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .gallery-card {
                    cursor: pointer;
                }
                .gallery-card:hover .gallery-overlay {
                    opacity: 1;
                }
                .gallery-card:hover .gallery-image {
                    transform: scale(1.12);
                }
                .gallery-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #fff;
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transform: translateY(12px);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .gallery-card:hover .gallery-icon {
                    transform: translateY(0);
                }
                .gallery-text {
                    color: #fff;
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                    transform: translateY(18px);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.05s;
                }
                .gallery-card:hover .gallery-text {
                    transform: translateY(0);
                }

                /* Sidebar Spec Widget */
                .spec-widget {
                    background: rgba(255, 255, 255, 0.75) !important;
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 24px !important;
                    padding: 35px 30px !important;
                    box-shadow: 0 20px 40px rgba(18, 62, 122, 0.04) !important;
                }
                .spec-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 18px !important;
                    border-radius: 16px !important;
                    background: rgba(248, 250, 252, 0.6) !important;
                    border: 1px solid #f1f5f9;
                    margin-bottom: 12px !important;
                    transition: all 0.3s ease;
                }
                .spec-row:hover {
                    background: #fff !important;
                    border-color: rgba(18, 62, 122, 0.15);
                    transform: translateX(4px);
                    box-shadow: 0 10px 20px rgba(18, 62, 122, 0.04);
                }
                .spec-label {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                    color: #475569;
                    font-size: 14px;
                }
                .spec-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    background: rgba(18, 62, 122, 0.06);
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                .spec-row:hover .spec-icon {
                    background: var(--theme);
                    color: #fff;
                }
                .spec-value {
                    font-weight: 700;
                    color: #0f172a;
                    font-size: 14px;
                    text-align: right;
                }

                /* Sidebar CTA Promo Widget */
                .sidebar-widget-image {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 45px rgba(11, 13, 23, 0.15);
                }
                .sidebar-bg-img {
                    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .sidebar-widget-image:hover .sidebar-bg-img {
                    transform: scale(1.08);
                }
                .gradient-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(180deg, rgba(11, 13, 23, 0.25) 0%, rgba(18, 62, 122, 0.95) 100%);
                    z-index: 1;
                }
                .premium-cta-btn {
                    background: #fff !important;
                    color: var(--theme) !important;
                    font-weight: 700;
                    padding: 14px 28px !important;
                    border-radius: 50px !important;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                }
                .premium-cta-btn:hover {
                    background: var(--theme) !important;
                    color: #fff !important;
                    box-shadow: 0 15px 30px rgba(18, 62, 122, 0.35);
                    transform: translateY(-2px);
                }

                /* Nav Buttons & Icons styling */
                .slider-button {
                    border-top: 1px solid #e2e8f0 !important;
                    padding-top: 35px !important;
                    margin-top: 50px !important;
                }
                .cmn-prev, .cmn-next {
                    width: 54px !important;
                    height: 54px !important;
                    line-height: 54px;
                    border-radius: 50% !important;
                    border: 1px solid #e2e8f0 !important;
                    background: #fff;
                    color: var(--theme);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .hover-theme-color {
                    color: #475569 !important;
                    transition: all 0.3s ease;
                }
                .hover-theme-color:hover {
                    color: var(--theme) !important;
                }
                .hover-theme-color:hover button {
                    background-color: var(--theme) !important;
                    border-color: var(--theme) !important;
                    color: #fff !important;
                    transform: scale(1.05);
                }
                .icon-grid-link {
                    color: #64748b;
                    font-size: 22px;
                    transition: all 0.3s ease;
                }
                .icon-grid-link:hover {
                    color: var(--theme);
                    transform: scale(1.15) rotate(90deg);
                }

                /* Keyframes & Animations classes */
                .animate-pulse {
                    animation: pulse 2s infinite ease-in-out;
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.08); opacity: 0.85; }
                }
                .animate-bounce-right {
                    animation: bounceRight 1.5s infinite ease-in-out;
                }
                @keyframes bounceRight {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(6px); }
                }

                /* Premium Action Buttons */
                .project-action-buttons {
                    margin-top: 25px;
                    margin-bottom: 25px;
                }
                .action-btn {
                    display: inline-flex;
                    align-items: center;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 10px 20px;
                    gap: 15px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    text-align: left;
                    box-shadow: 0 4px 12px rgba(18, 62, 122, 0.03);
                    position: relative;
                    overflow: hidden;
                }
                .action-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(18, 62, 122, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: 1;
                }
                .action-btn:hover::before {
                    opacity: 1;
                }
                .action-btn:hover {
                    transform: translateY(-4px);
                    border-color: var(--theme);
                    box-shadow: 0 12px 24px rgba(18, 62, 122, 0.08);
                }
                .action-btn .btn-icon {
                    font-size: 24px;
                    color: #475569;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .action-btn:hover .btn-icon {
                    color: var(--theme);
                    transform: scale(1.1);
                }
                .action-btn .btn-text {
                    display: flex;
                    flex-direction: column;
                    z-index: 2;
                }
                .action-btn .btn-subtitle {
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #64748b;
                }
                .action-btn .btn-title {
                    font-size: 15px;
                    font-weight: 800;
                    color: #0f172a;
                }
                .action-btn .btn-arrow {
                    font-size: 14px;
                    color: #94a3b8;
                    transition: all 0.3s ease;
                    z-index: 2;
                }
                .action-btn:hover .btn-arrow {
                    color: var(--theme);
                    transform: translate(2px, -2px);
                }
                
                /* Redirect Overlay */
                .redirect-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(11, 13, 23, 0.6);
                    backdrop-filter: blur(12px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeInOverlay 0.4s ease forwards;
                }
                @keyframes fadeInOverlay {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .redirect-card {
                    background: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    border-radius: 28px;
                    padding: 45px 35px;
                    width: 100%;
                    max-width: 480px;
                    text-align: center;
                    box-shadow: 0 40px 90px -10px rgba(11, 13, 23, 0.35);
                    transform: translateY(20px);
                    animation: slideUpCard 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                    position: relative;
                }
                @keyframes slideUpCard {
                    to { transform: translateY(0); }
                }
                .portal-ring {
                    width: 90px;
                    height: 90px;
                    margin: 0 auto 30px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .portal-core {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, var(--theme) 0%, #3b82f6 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    color: #fff;
                    z-index: 3;
                    box-shadow: 0 8px 25px rgba(18, 62, 122, 0.3);
                }
                .ring-pulse-1, .ring-pulse-2 {
                    position: absolute;
                    top: 5%;
                    left: 5%;
                    width: 90%;
                    height: 90%;
                    border: 2px solid var(--theme);
                    border-radius: 50%;
                    opacity: 0;
                    z-index: 1;
                }
                .ring-pulse-1 {
                    animation: portalPulse 2s infinite linear;
                }
                .ring-pulse-2 {
                    animation: portalPulse 2s infinite linear 1s;
                }
                @keyframes portalPulse {
                    0% { transform: scale(0.6); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: scale(1.4); opacity: 0; }
                }
                .redirect-card h3 {
                    font-size: 22px;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 12px;
                }
                .redirect-card p {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 25px;
                }
                
                /* Redirect Progress Bar */
                .redirect-loader {
                    width: 100%;
                    height: 6px;
                    background: #f1f5f9;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 25px;
                    position: relative;
                }
                .loader-fill {
                    height: 100%;
                    background: linear-gradient(to right, var(--theme), #3b82f6);
                    border-radius: 10px;
                    width: 0%;
                    animation: loadProgress 2.2s linear forwards;
                }
                @keyframes loadProgress {
                    to { width: 100%; }
                }
                
                .redirect-url {
                    display: block;
                    font-size: 12px;
                    color: #94a3b8;
                    font-family: monospace;
                    word-break: break-all;
                    background: #f8fafc;
                    padding: 8px 12px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                    border: 1px solid #e2e8f0;
                }
                .cancel-redirect-btn {
                    background: #f1f5f9;
                    color: #475569;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .cancel-redirect-btn:hover {
                    background: #e2e8f0;
                    color: #0f172a;
                }
            `}} />
        </section>
    )
}

export default OurProjectDetailsArea
