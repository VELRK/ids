"use client"
import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import TitleShape from "@/components/common/TitleShape"
import our_project_data from "@/data/OurProjectData"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const setting = {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".project-next",
        prevEl: ".project-prev",
    },
    pagination: {
        el: ".project-slider-dot",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 1.5,
        },
        0: {
            slidesPerView: 1,
        },
    },
};

const OurProjects = () => {
    const [activeTab, setActiveTab] = useState<'development' | 'digital-marketing'>('development');

    // Filter projects based on activeTab
    const filteredProjects = our_project_data.filter(item => item.projectType === activeTab);
    // Show top 5 projects of active category
    const topProjects = filteredProjects.slice(0, 5);

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

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <section className="news-section section-padding fix">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title mb-0">
                            <span className="sub-title wow fadeInUp">
                                <TitleShape />
                                Our Portfolio
                            </span>
                            <h2 className="text-anim">
                                Portfolio Overview
                            </h2>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <div className="array-button d-none d-md-flex">
                                <button className="project-prev array-prev">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button className="project-next array-next">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                            <Link href="/our-projects" className="theme-btn">
                                More projects <i className="fa-solid fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Premium Tab Switcher */}
                    <div className="portfolio-tabs-wrapper d-flex justify-content-center mt-5 mb-2 wow fadeInUp" data-wow-delay=".2s">
                        <div className="portfolio-tabs">
                            <button
                                className={`portfolio-tab-btn ${activeTab === 'development' ? 'active' : ''}`}
                                onClick={() => setActiveTab('development')}
                            >
                                <i className="fa-solid fa-code me-2"></i>
                                Development
                            </button>
                            <button
                                className={`portfolio-tab-btn ${activeTab === 'digital-marketing' ? 'active' : ''}`}
                                onClick={() => setActiveTab('digital-marketing')}
                            >
                                <i className="fa-solid fa-bullhorn me-2"></i>
                                Digital Marketing
                            </button>
                        </div>
                    </div>

                    <div className="swiper-container-wrapper p-relative mt-4">
                        <Swiper
                            key={activeTab}
                            {...setting}
                            loop={topProjects.length > 2}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="swiper project-slider"
                        >
                            {topProjects.map((item) => (
                                <SwiperSlide key={item.id} className="swiper-slide">
                                    <div className="portfolio-premium-card" style={{
                                        '--hover-shadow-bg': item.cardBg || "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
                                        '--brand-color': item.cardLogoBg || "var(--theme)",
                                        marginBottom: "15px"
                                    } as React.CSSProperties}>
                                        <div className="premium-card-header">
                                            <div className="premium-card-logo" style={{ background: item.cardLogoBg || (item.logo ? "transparent" : "var(--theme)") }}>
                                                {item.logo ? (
                                                    <Image src={item.logo} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} />
                                                ) : (
                                                    item.cardLogoText || "PR"
                                                )}
                                            </div>
                                            <div className="premium-card-badge">
                                                {item.badgeText || item.category[0]}
                                            </div>
                                        </div>

                                        <div className="premium-card-body">
                                            <div className="premium-card-quote-section">
                                                <span className="premium-card-quote-icon">“</span>
                                                <blockquote className="premium-card-testimony">
                                                    "{item.testimony || item.description.slice(0, 150) + "..."}"
                                                </blockquote>
                                                <cite className="premium-card-author">
                                                    — <Link href={`/our-project-details?id=${item.id}`}>{item.client || item.title}</Link>
                                                </cite>
                                                <p className="premium-card-tagline">{item.tagline}</p>
                                            </div>

                                            <div className="premium-card-image-wrapper">
                                                <Link href={`/our-project-details?id=${item.id}`} style={{ display: "block", width: "100%", height: "100%", borderRadius: "20px", overflow: "hidden" }}>
                                                    <Image
                                                        src={item.thumb}
                                                        alt={item.title}
                                                        className="premium-card-img"
                                                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center right", borderRadius: "20px" }}
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="premium-card-buttons">
                                            {item.playStoreLink && (
                                                <button
                                                    onClick={() => handleRedirectClick("Google Play", item.playStoreLink!)}
                                                    className="store-btn google-play"
                                                    title="Get it on Google Play"
                                                >
                                                    <i className="fa-brands fa-google-play"></i>
                                                    <div className="btn-label">
                                                        <span className="btn-subtext">GET IT ON</span>
                                                        <strong className="btn-maintext">Google Play</strong>
                                                    </div>
                                                </button>
                                            )}
                                            {item.appStoreLink && (
                                                <button
                                                    onClick={() => handleRedirectClick("App Store", item.appStoreLink!)}
                                                    className="store-btn app-store"
                                                    title="Download on the App Store"
                                                >
                                                    <i className="fa-brands fa-apple"></i>
                                                    <div className="btn-label">
                                                        <span className="btn-subtext">DOWNLOAD ON THE</span>
                                                        <strong className="btn-maintext">App Store</strong>
                                                    </div>
                                                </button>
                                            )}
                                            {!item.playStoreLink && !item.appStoreLink && item.projectLink && (
                                                <button
                                                    onClick={() => handleRedirectClick("Website", item.projectLink!)}
                                                    className="store-btn website-btn"
                                                    title="Visit Website"
                                                >
                                                    <i className="fa-solid fa-globe"></i>
                                                    <div className="btn-label">
                                                        <span className="btn-subtext">VISIT OFFICIAL</span>
                                                        <strong className="btn-maintext">Website</strong>
                                                    </div>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-dot">
                            <div className="project-slider-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portals Redirecting Overlay */}
            {mounted && redirectStatus && createPortal(
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
                </div>,
                document.body
            )}

            {/* Custom style block for card icons and redirect overlay */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&display=swap');
                @keyframes cardEntrance {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Premium Card Layout */
                .portfolio-premium-card {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 420px;
                    height: auto;
                    border-radius: 20px;
                    padding: 35px;
                    position: relative;
                    box-sizing: border-box;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    border: 1px solid rgba(0, 0, 0, 0.03);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.02);
                    background: #ffffff;
                    z-index: 1;
                    animation: cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                
                .portfolio-premium-card::after {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    background: var(--hover-shadow-bg, rgba(0,0,0,0.1));
                    z-index: -1;
                    filter: blur(25px);
                    opacity: 0;
                    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    border-radius: 28px;
                }
                
                .portfolio-premium-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(0,0,0,0.06);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
                }
                
                .portfolio-premium-card:hover::after {
                    opacity: 0.75;
                }
                
                .premium-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 44px;
                    margin-bottom: 15px;
                }
                
                .premium-card-body {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: stretch;
                    flex: 1;
                    min-height: 0;
                    margin-bottom: 15px;
                    gap: 15px;
                }
                
                .premium-card-image-wrapper {
                    flex: 0 0 180px;
                    width: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: visible;
                }
                
                .premium-card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain !important;
                    object-position: center right !important;
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    border-radius: 20px;
                }
                
                .portfolio-premium-card:hover .premium-card-img {
                    transform: scale(1.08) translateY(-6px) rotate(1deg);
                }
                
                /* Header style inside Card */
                .premium-card-logo {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 800;
                    text-transform: uppercase;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .portfolio-premium-card:hover .premium-card-logo {
                    transform: scale(1.08) rotate(-3deg);
                }
                
                .premium-card-badge {
                    background: rgba(15, 23, 42, 0.03);
                    border: 1px solid rgba(15, 23, 42, 0.05);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #475569;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .portfolio-premium-card:hover .premium-card-badge {
                    background: #ffffff;
                    border-color: var(--brand-color, var(--theme));
                    color: var(--brand-color, var(--theme));
                    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
                }
                
                /* Testimony section styles */
                .premium-card-quote-section {
                    position: relative;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                }
                
                .premium-card-quote-icon {
                    position: absolute;
                    top: -10px;
                    left: -15px;
                    font-size: 70px;
                    font-family: Georgia, serif;
                    color: rgba(148, 163, 184, 0.15);
                    line-height: 1;
                    pointer-events: none;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 0;
                }
                
                .portfolio-premium-card:hover .premium-card-quote-icon {
                    transform: translateY(-8px) scale(1.15) rotate(-3deg);
                    color: var(--brand-color, var(--theme));
                    opacity: 0.25;
                }
                
                .premium-card-testimony {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-style: italic;
                    font-size: 15.5px;
                    line-height: 1.6;
                    color: #1e293b;
                    margin: 0 0 10px 0;
                    font-weight: 500;
                    position: relative;
                    z-index: 1;
                }
                
                .premium-card-author {
                    font-size: 13px;
                    font-weight: 700;
                    color: #0f172a;
                    display: block;
                    margin-bottom: 3px;
                }
                
                .premium-card-author a {
                    color: #0f172a;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
 
                .premium-card-author a:hover {
                    color: var(--theme);
                }
 
                .premium-card-tagline {
                    font-size: 11.5px;
                    color: #64748b;
                    margin: 0;
                    line-height: 1.4;
                }
                
                /* Button style adjustments */
                .premium-card-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: auto;
                    height: auto;
                    min-height: 44px;
                }
                
                .store-btn {
                    border: none;
                    padding: 8px 18px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #ffffff;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    text-align: left;
                    height: 44px;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }

                .store-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(255, 255, 255, 0.12);
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: -1;
                }
                
                .store-btn:hover::before {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                
                .store-btn:hover {
                    transform: translateY(-3px);
                }
                
                .store-btn i {
                    font-size: 18px;
                    transition: transform 0.3s ease;
                }

                .store-btn:hover i {
                    transform: scale(1.18);
                }
                
                .store-btn.google-play {
                    background: #1b1d21;
                    box-shadow: 0 4px 10px rgba(27, 29, 33, 0.15);
                }
                
                .store-btn.google-play:hover {
                    background: #111315;
                    box-shadow: 0 10px 20px rgba(27, 29, 33, 0.3);
                }
                
                .store-btn.app-store {
                    background: #2b3595;
                    box-shadow: 0 4px 10px rgba(43, 53, 149, 0.15);
                }
                
                .store-btn.app-store:hover {
                    background: #1a2160;
                    box-shadow: 0 10px 20px rgba(43, 53, 149, 0.3);
                }
                
                .store-btn.website-btn {
                    background: #0d8cc7;
                    box-shadow: 0 4px 10px rgba(13, 140, 199, 0.15);
                }
                
                .store-btn.website-btn:hover {
                    background: #086b9a;
                    box-shadow: 0 10px 20px rgba(13, 140, 199, 0.3);
                }
                
                .btn-label {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }
                
                .btn-subtext {
                    font-size: 8px;
                    letter-spacing: 0.3px;
                    opacity: 0.8;
                    text-transform: uppercase;
                }
                
                .btn-maintext {
                    font-size: 12px;
                    font-weight: 700;
                }   }
                
                /* Redirect Overlay */
                .redirect-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(11, 13, 23, 0.6);
                    backdrop-filter: blur(12px);
                    z-index: 999999;
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

                /* Portfolio Tabs styling */
                .portfolio-tabs-wrapper {
                    margin-bottom: 25px;
                }
                .portfolio-tabs {
                    display: inline-flex;
                    background: rgba(15, 23, 42, 0.03);
                    border: 1px solid rgba(15, 23, 42, 0.05);
                    padding: 5px;
                    border-radius: 100px;
                    backdrop-filter: blur(15px);
                    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
                }
                .portfolio-tab-btn {
                    border: none;
                    background: transparent;
                    padding: 10px 24px;
                    border-radius: 100px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #64748b;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 1;
                }
                .portfolio-tab-btn:hover {
                    color: #0f172a;
                }
                .portfolio-tab-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: var(--theme);
                    opacity: 0;
                    z-index: -1;
                    border-radius: 100px;
                    transform: scale(0.9);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 12px rgba(18, 62, 122, 0.2);
                }
                .portfolio-tab-btn.active {
                    color: #ffffff;
                }
                .portfolio-tab-btn.active::before {
                    opacity: 1;
                    transform: scale(1);
                }
                .portfolio-tab-btn i {
                    font-size: 13px;
                    transition: transform 0.3s ease;
                }
                .portfolio-tab-btn.active i {
                    transform: scale(1.12);
                }
                
                /* Custom Swiper Pagination Bullet Layout */
                .project-slider-dot {
                    display: flex;
                    justify-content: center;
                    gap: 6px;
                    margin-top: 30px;
                }
                .project-slider-dot .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: #cbd5e1;
                    opacity: 1;
                    border-radius: 100px;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    margin: 0 !important;
                }
                .project-slider-dot .swiper-pagination-bullet-active {
                    width: 24px;
                    background: var(--theme);
                    border-radius: 100px;
                }

                /* Responsive Layout Rules */
                @media (max-width: 1399px) {
                    .portfolio-premium-card {
                        min-height: 440px;
                        height: auto;
                    }
                }
                
                @media (max-width: 991px) {
                    .portfolio-premium-card {
                        height: auto;
                        padding: 30px;
                    }
                    .premium-card-body {
                        flex-direction: column;
                        gap: 20px;
                        align-items: stretch;
                    }
                    .premium-card-quote-section {
                        padding-top: 10px;
                    }
                    .premium-card-image-wrapper {
                        flex: auto;
                        width: 100%;
                        height: 220px;
                        justify-content: center;
                        align-items: center;
                    }
                    .premium-card-img {
                        object-position: center center !important;
                    }
                }
                
                @media (max-width: 575px) {
                    .premium-card-buttons {
                        flex-direction: column;
                        gap: 8px;
                        width: 100%;
                        height: auto;
                    }
                    .store-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}} />
        </>
    )
}

export default OurProjects
