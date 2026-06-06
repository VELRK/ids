"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DataType } from "@/data/OurProjectData"
import { clientCompaniesWork, CompanyDeliverableImage } from "@/data/DigitalMarketingData"
import ReactPlayer from "react-player"

interface Props {
    project: DataType;
    prevId: number;
    nextId: number;
}

const DigitalMarketingDetails = ({ project, prevId, nextId }: Props) => {
    // Current active client company state (defaults to Make My Homes)
    const [activeCompanyId, setActiveCompanyId] = useState<string>(
        clientCompaniesWork.some(c => c.id === project.client) ? project.client : "make-my-homes"
    )

    // Sub-tab selection state: "videos" | "images" | "brochures"
    const [activeTab, setActiveTab] = useState<"videos" | "images" | "brochures">("videos")

    // Lightbox states for video and image zoom
    const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)
    const [activeVideoTitle, setActiveVideoTitle] = useState<string>("")
    const [zoomedImage, setZoomedImage] = useState<CompanyDeliverableImage | null>(null)

    // Brochure download notification state
    const [downloadNotification, setDownloadNotification] = useState<string | null>(null)

    // Find active company details
    const activeCompany = clientCompaniesWork.find(c => c.id === activeCompanyId) || clientCompaniesWork[0]
    const videos = activeCompany.videos || []
    const images = activeCompany.images || []
    const brochures = activeCompany.brochures || []

    // Trigger brochure download feedback
    const handleDownload = (title: string) => {
        setDownloadNotification(`Preparing to download: ${title}...`)
        setTimeout(() => {
            setDownloadNotification(`Success! ${title} downloaded.`)
            setTimeout(() => {
                setDownloadNotification(null)
            }, 3000)
        }, 1200)
    }

    return (
        <section className="client-showcase-section fix section-padding">
            <div className="container">
                {/* Hero Header Area */}
                <div className="showcase-hero text-center mb-5 wow fadeInUp" data-wow-delay=".2s">
                    <span className="showcase-badge mb-3">
                        <i className="fa-solid fa-bullhorn me-1"></i>
                        {project.category[0]} Project
                    </span>
                    <h1 className="showcase-hero-title mb-3">
                        Client <span className="highlight-gradient">Deliverables Hub</span>
                    </h1>
                    <p className="showcase-hero-desc mx-auto">
                        Explore the actual websites, mobile apps, social media ads, brochures, graphic designs, and video reels we created for our clients. Click on any brand below to see our work.
                    </p>
                </div>



                {/* Main Client Details & Showcase Card */}
                <div className="active-company-card mb-5 wow fadeInUp" data-wow-delay=".4s">
                    <div className="row g-4 align-items-center mb-4">
                        {/* Company Logo and Text */}
                        <div className="col-lg-7">
                            <div className="company-header d-flex align-items-center gap-3 mb-3">
                                <div className="company-logo-badge">
                                    <Image
                                        src={activeCompany.logo}
                                        alt={activeCompany.name}
                                        className="company-logo-main"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div>
                                    <h2 className="company-main-title">{activeCompany.name}</h2>
                                    <span className="company-tagline">{activeCompany.tagline}</span>
                                </div>
                            </div>
                            <p className="company-description-text mb-4">
                                {activeCompany.description}
                            </p>

                            {/* Rendered Services Tags */}
                            <div className="services-tags-container d-flex flex-wrap gap-2">
                                {activeCompany.services.map((service, idx) => (
                                    <span key={idx} className="service-tag-pill">
                                        <i className="fa-solid fa-circle-check text-green me-1"></i>
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Portal Links for Websites/Apps */}
                        <div className="col-lg-5 text-lg-end">
                            <div className="company-links-panel d-flex flex-column gap-3 justify-content-lg-end align-items-lg-end">
                                <span className="links-panel-title">Launch Deliverables:</span>
                                <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                                    {activeCompany.websiteUrl && (
                                        <a
                                            href={activeCompany.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="launch-btn web-btn"
                                        >
                                            <i className="fa-solid fa-globe"></i>
                                            <span>Visit Website</span>
                                        </a>
                                    )}
                                    {activeCompany.appStoreUrl && (
                                        <a
                                            href={activeCompany.appStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="launch-btn app-btn"
                                        >
                                            <i className="fa-brands fa-apple"></i>
                                            <span>App Store</span>
                                        </a>
                                    )}
                                    {activeCompany.playStoreUrl && (
                                        <a
                                            href={activeCompany.playStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="launch-btn play-btn"
                                        >
                                            <i className="fa-brands fa-google-play"></i>
                                            <span>Google Play</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="divider mb-4" />

                    {/* Sub-Tabs Selector for Videos, Graphics, and Brochures */}
                    <div className="showcase-tabs-bar mb-4">
                        {videos.length > 0 && (
                            <button
                                className={`showcase-tab-item ${activeTab === "videos" ? "active" : ""}`}
                                onClick={() => setActiveTab("videos")}
                            >
                                <i className="fa-solid fa-play me-2"></i>
                                Video Reels & Promos ({videos.length})
                            </button>
                        )}
                        {images.length > 0 && (
                            <button
                                className={`showcase-tab-item ${activeTab === "images" ? "active" : ""}`}
                                onClick={() => setActiveTab("images")}
                            >
                                <i className="fa-solid fa-image me-2"></i>
                                Graphic Design & Ads ({images.length})
                            </button>
                        )}
                        {brochures.length > 0 && (
                            <button
                                className={`showcase-tab-item ${activeTab === "brochures" ? "active" : ""}`}
                                onClick={() => setActiveTab("brochures")}
                            >
                                <i className="fa-solid fa-file-pdf me-2"></i>
                                Print Brochures ({brochures.length})
                            </button>
                        )}
                    </div>

                    {/* Tab Panels Contents */}
                    <div className="showcase-content-wrapper">
                        {/* Videos Panel */}
                        {activeTab === "videos" && videos.length > 0 && (
                            <div className="row g-4 animation-fade-in">
                                {videos.map((video, idx) => (
                                    <div key={idx} className="col-md-6 col-lg-4">
                                        <div
                                            className="video-showcase-card"
                                            onClick={() => {
                                                setActiveVideoUrl(video.videoUrl)
                                                setActiveVideoTitle(video.title)
                                            }}
                                        >
                                            <div className="video-card-preview">
                                                <ReactPlayer
                                                    src={video.videoUrl}
                                                    width="100%"
                                                    height="100%"
                                                    style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}


                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                    }}
                                                />
                                                {/* Backdrop overlay decoration mimicking a phone screen / player */}
                                                <div className="video-glow-effect"></div>
                                                {/* <div className="video-play-overlay">
                                                    <div className="play-ring">
                                                        <i className="fa-solid fa-play"></i>
                                                    </div>
                                                </div> */}
                                                <div className="video-duration-tag">{video.duration || "Reel"}</div>
                                            </div>
                                            <div className="video-card-meta">
                                                <h4 className="video-card-title">{video.title}</h4>
                                                <p className="video-card-desc">{video.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Graphic Design Panel */}
                        {activeTab === "images" && images.length > 0 && (
                            <div className="row g-4 animation-fade-in">
                                {images.map((image, idx) => (
                                    <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
                                        <div
                                            className="graphic-showcase-card"
                                            onClick={() => setZoomedImage(image)}
                                        >
                                            <div className="graphic-img-container">
                                                <Image
                                                    src={image.img}
                                                    alt={image.title}
                                                    className="graphic-main-img"
                                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                                />
                                                <div className="graphic-overlay">
                                                    <span className="graphic-overlay-category">{image.category}</span>
                                                    <div className="graphic-zoom-icon">
                                                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="graphic-meta">
                                                <span className="graphic-category-badge">{image.category}</span>
                                                <h4 className="graphic-title">{image.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Print Brochure Panel */}
                        {activeTab === "brochures" && brochures.length > 0 && (
                            <div className="row g-4 justify-content-center animation-fade-in">
                                {brochures.map((brochure, idx) => (
                                    <div key={idx} className="col-md-8 col-lg-6">
                                        <div className="brochure-showcase-card d-flex flex-column flex-sm-row">
                                            <div className="brochure-left-preview">
                                                <Image
                                                    src={brochure.previewImg}
                                                    alt={brochure.title}
                                                    className="brochure-preview-img"
                                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                                />
                                                <div className="pdf-corner-tag">PDF</div>
                                            </div>
                                            <div className="brochure-right-details d-flex flex-column justify-content-between p-4">
                                                <div>
                                                    <div className="pdf-icon-meta mb-2">
                                                        <i className="fa-solid fa-file-pdf text-red"></i>
                                                        <span>DOCUMENT COLLATERAL</span>
                                                    </div>
                                                    <h4 className="brochure-card-title mb-2">{brochure.title}</h4>
                                                    <p className="brochure-card-desc mb-3">{brochure.description}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleDownload(brochure.title)}
                                                    className="brochure-download-btn"
                                                >
                                                    <i className="fa-solid fa-download me-2"></i>
                                                    Download Brochure
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Company Selector Tab Bar */}
                <div className="company-selector-container mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <div className="company-selector-scroll">
                        {clientCompaniesWork.map((company) => {
                            const isActive = company.id === activeCompanyId
                            return (
                                <button
                                    key={company.id}
                                    className={`company-tab-btn ${isActive ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveCompanyId(company.id)
                                        // Auto-adjust default active tab if company doesn't have videos
                                        if ((company.videos || []).length > 0) {
                                            setActiveTab("videos")
                                        } else if ((company.images || []).length > 0) {
                                            setActiveTab("images")
                                        } else {
                                            setActiveTab("brochures")
                                        }
                                    }}
                                >
                                    <div className="company-tab-logo-wrapper">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            className="company-tab-logo-img"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <span className="company-tab-name">{company.name}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Navigation Slider Controls */}
                <div className="slider-button d-flex align-items-center justify-content-between wow fadeInUp mt-5 pt-4" data-wow-delay=".2s">
                    <Link href={`/our-project-details?id=${prevId}`} className="d-flex align-items-center gap-3 text-decoration-none hover-theme-color">
                        <button className="cmn-prev d-center" type="button">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <span className="previus-text text-capitalize" style={{ fontWeight: 700, fontSize: "16px" }}>
                            Prev Project
                        </span>
                    </Link>
                    <div className="icon-grid">
                        <Link href="/our-projects" title="All Projects" className="icon-grid-link">
                            <i className="fa-solid fa-table-cells"></i>
                        </Link>
                    </div>
                    <Link href={`/our-project-details?id=${nextId}`} className="d-flex align-items-center gap-3 text-decoration-none hover-theme-color">
                        <span className="previus-text text-capitalize" style={{ fontWeight: 700, fontSize: "16px" }}>
                            Next Project
                        </span>
                        <button className="cmn-next d-center" type="button">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Custom Playable Video Lightbox Modal */}
            {activeVideoUrl && (
                <div className="showcase-video-lightbox" onClick={() => setActiveVideoUrl(null)}>
                    <div className="lightbox-backdrop-blur"></div>
                    <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="video-lightbox-header d-flex justify-content-between align-items-center p-3">
                            <span className="video-lightbox-title">
                                <i className="fa-solid fa-circle-play text-blue me-2"></i>
                                {activeVideoTitle}
                            </span>
                            <button className="lightbox-close-btn" onClick={() => setActiveVideoUrl(null)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="video-player-wrapper">
                            <ReactPlayer
                                src={activeVideoUrl}
                                controls
                                playing
                                width="100%"
                                height="100%"
                                className="lightbox-video-element"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Zoom Image Lightbox Modal */}
            {zoomedImage && (
                <div className="showcase-image-lightbox" onClick={() => setZoomedImage(null)}>
                    <div className="lightbox-backdrop-blur"></div>
                    <div className="image-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close-btn top-right-close" onClick={() => setZoomedImage(null)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div className="zoomed-image-wrapper">
                            <Image
                                src={zoomedImage.img}
                                alt={zoomedImage.title}
                                className="zoomed-img-element"
                            />
                        </div>
                        <div className="image-lightbox-footer p-3 text-center">
                            <span className="image-lightbox-category">{zoomedImage.category}</span>
                            <h4 className="image-lightbox-caption text-white">{zoomedImage.title}</h4>
                        </div>
                    </div>
                </div>
            )}



            {/* Interactive Download Success Notification banner */}
            {downloadNotification && (
                <div className="download-toast-notification">
                    <div className="toast-icon">
                        <i className="fa-solid fa-circle-check animate-pulse"></i>
                    </div>
                    <span className="toast-message">{downloadNotification}</span>
                </div>
            )}

            {/* Embedded Premium Aesthetics and Transitions Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .client-showcase-section {
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                    padding-bottom: 80px;
                }

                .showcase-badge {
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(0, 210, 159, 0.12) 100%);
                    color: #1e3a8a;
                    padding: 8px 18px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .showcase-hero-title {
                    font-size: 48px;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1.2;
                    letter-spacing: -1px;
                }

                .highlight-gradient {
                    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .showcase-hero-desc {
                    max-width: 760px;
                    font-size: 16px;
                    line-height: 1.7;
                    color: #475569;
                }

                /* Horizontal Company Tab Selector */
                .company-selector-container {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
                }

                .company-selector-scroll {
                    display: flex;
                    gap: 12px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                    scroll-behavior: smooth;
                    padding-bottom: 4px;
                }

                .company-selector-scroll::-webkit-scrollbar {
                    height: 5px;
                }
                .company-selector-scroll::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }

                .company-tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: transparent;
                    border: 1px solid transparent;
                    padding: 10px 20px;
                    border-radius: 14px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    flex-shrink: 0;
                }

                .company-tab-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }

                .company-tab-btn.active {
                    background: linear-gradient(135deg, #f0f5ff 0%, #e0eaff 100%);
                    border-color: rgba(37, 99, 235, 0.25);
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.05);
                }

                .company-tab-logo-wrapper {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px;
                    transition: transform 0.3s ease;
                }

                .company-tab-btn.active .company-tab-logo-wrapper {
                    transform: scale(1.1);
                    border-color: #2563eb;
                }

                .company-tab-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .company-tab-name {
                    font-size: 14px;
                    font-weight: 700;
                    color: #475569;
                    transition: color 0.3s ease;
                }

                .company-tab-btn.active .company-tab-name {
                    color: #1e3a8a;
                }

                /* Active Company Showcase Card */
                .active-company-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(18, 62, 122, 0.03);
                }

                .company-logo-badge {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    background: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                }

                .company-logo-main {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .company-main-title {
                    font-size: 28px;
                    font-weight: 800;
                    color: #0f172a;
                    margin: 0 0 4px 0;
                }

                .company-tagline {
                    font-size: 14px;
                    color: #64748b;
                    font-weight: 600;
                }

                .company-description-text {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #475569;
                }

                .service-tag-pill {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #334155;
                    font-size: 12px;
                    font-weight: 700;
                    padding: 6px 14px;
                    border-radius: 50px;
                    display: inline-flex;
                    align-items: center;
                }

                .text-green {
                    color: #10b981;
                }

                .divider {
                    border: 0;
                    border-top: 1px solid #e2e8f0;
                    margin: 0;
                }

                /* Portal launch links */
                .company-links-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .links-panel-title {
                    font-size: 12px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .launch-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 18px;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .web-btn {
                    background: #2563eb;
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
                }
                .web-btn:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                .app-btn {
                    background: #0f172a;
                    color: #ffffff;
                }
                .app-btn:hover {
                    background: #1e293b;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                .play-btn {
                    background: #10b981;
                    color: #ffffff;
                }
                .play-btn:hover {
                    background: #059669;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                /* Sub-Tabs selector inside active company */
                .showcase-tabs-bar {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 12px;
                }

                .showcase-tab-item {
                    background: transparent;
                    border: none;
                    font-weight: 700;
                    font-size: 14px;
                    color: #64748b;
                    padding: 8px 16px;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .showcase-tab-item:hover {
                    color: #1e3a8a;
                }

                .showcase-tab-item.active {
                    color: #2563eb;
                }

                .showcase-tab-item.active::after {
                    content: "";
                    position: absolute;
                    bottom: -14px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #2563eb;
                }

                /* Video Showcase layouts */
                .video-showcase-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                }

                .video-showcase-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.2);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.03);
                }

                .video-card-preview {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 aspect ratio */
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    overflow: hidden;
                }

                .video-glow-effect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
                }

                .video-play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                }

                .play-ring {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563eb;
                    font-size: 16px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .play-ring i {
                    margin-left: 3px;
                }

                .video-showcase-card:hover .play-ring {
                    transform: scale(1.15);
                    background: #2563eb;
                    color: #ffffff;
                }

                .video-duration-tag {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    background: rgba(15, 23, 42, 0.75);
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .video-card-meta {
                    padding: 15px;
                }

                .video-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 6px;
                }

                .video-card-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Graphic Showcase layouts */
                .graphic-showcase-card {
                    background: #ffffff;
                    border: 1px solid #f1f5f9;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
                }

                .graphic-showcase-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.15);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.04);
                }

                .graphic-img-container {
                    position: relative;
                    padding-top: 100%; /* Square 1:1 */
                    background: #f8fafc;
                    overflow: hidden;
                }

                .graphic-main-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .graphic-showcase-card:hover .graphic-main-img {
                    transform: scale(1.06);
                }

                .graphic-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.7);
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 15px;
                    transition: opacity 0.3s ease;
                }

                .graphic-showcase-card:hover .graphic-overlay {
                    opacity: 1;
                }

                .graphic-overlay-category {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                .graphic-zoom-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: #2563eb;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    align-self: center;
                    transform: scale(0.8);
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .graphic-showcase-card:hover .graphic-zoom-icon {
                    transform: scale(1);
                }

                .graphic-meta {
                    padding: 12px;
                }

                .graphic-category-badge {
                    font-size: 10px;
                    font-weight: 800;
                    color: #2563eb;
                    background: rgba(37, 99, 235, 0.05);
                    padding: 2px 8px;
                    border-radius: 4px;
                    display: inline-block;
                    margin-bottom: 6px;
                    text-transform: uppercase;
                }

                .graphic-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Print Brochure Layout */
                .brochure-showcase-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.015);
                    transition: all 0.3s ease;
                }

                .brochure-showcase-card:hover {
                    border-color: rgba(37, 99, 235, 0.18);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
                }

                .brochure-left-preview {
                    width: 100%;
                    max-width: 180px;
                    min-height: 200px;
                    position: relative;
                    background: #f8fafc;
                }

                @media (max-width: 575px) {
                    .brochure-left-preview {
                        max-width: 100%;
                        height: 200px;
                    }
                }

                .brochure-preview-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .pdf-corner-tag {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: #ef4444;
                    color: #ffffff;
                    font-size: 10px;
                    font-weight: 800;
                    padding: 2px 6px;
                    border-radius: 4px;
                }

                .pdf-icon-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 0.5px;
                }

                .text-red {
                    color: #ef4444;
                }

                .brochure-card-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0f172a;
                }

                .brochure-card-desc {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #64748b;
                }

                .brochure-download-btn {
                    background: #f8fafc;
                    border: 1px solid #cbd5e1;
                    color: #334155;
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .brochure-download-btn:hover {
                    background: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
                }

                /* Video Lightbox */
                .showcase-video-lightbox, .showcase-image-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .lightbox-backdrop-blur {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(8px);
                }

                .video-lightbox-content {
                    position: relative;
                    width: 100%;
                    max-width: 800px;
                    background: #0f172a;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    z-index: 2;
                }

                .video-lightbox-header {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .video-lightbox-title {
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 15px;
                }

                .text-blue {
                    color: #3b82f6;
                }

                .lightbox-close-btn {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    font-size: 20px;
                    cursor: pointer;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .lightbox-close-btn:hover {
                    color: #ffffff;
                    transform: rotate(90deg);
                }

                .video-player-wrapper {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 */
                    background: #000000;
                }

                .lightbox-video-element {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                /* Image Lightbox */
                .image-lightbox-content {
                    position: relative;
                    z-index: 2;
                    max-width: 90%;
                    max-height: 85vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .top-right-close {
                    position: absolute;
                    top: -45px;
                    right: 0;
                    color: #ffffff;
                    font-size: 24px;
                }

                .zoomed-image-wrapper {
                    background: #ffffff;
                    padding: 8px;
                    border-radius: 12px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .zoomed-img-element {
                    max-width: 100%;
                    max-height: 70vh;
                    height: auto;
                    width: auto;
                    object-fit: contain;
                    border-radius: 6px;
                }

                .image-lightbox-footer {
                    margin-top: 15px;
                }

                .image-lightbox-category {
                    color: #3b82f6;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 4px;
                }

                .image-lightbox-caption {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0;
                }

                /* Toast notification */
                .download-toast-notification {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #0f172a;
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 14px 24px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
                    z-index: 99999;
                    animation: toastSlideIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .toast-icon {
                    color: #10b981;
                    font-size: 18px;
                }

                .toast-message {
                    font-size: 13px;
                    font-weight: 700;
                }

                /* Animation Keyframes */
                @keyframes toastSlideIn {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animation-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive helpers */
                @media (max-width: 991px) {
                    .showcase-hero-title {
                        font-size: 38px;
                    }
                    .active-company-card {
                        padding: 30px 20px;
                    }
                }
                `
            }} />
        </section>
    )
}

export default DigitalMarketingDetails
