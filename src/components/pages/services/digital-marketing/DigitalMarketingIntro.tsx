import Image from "next/image"
import Link from "next/link"
import intro_img from "@/assets/img/home-1/about.jpg"

// High-end vector SVG line chart representing "Organic Traffic Growth"
const TrafficChartSVG = () => (
    <svg className="chart-mini" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 45C30 40 40 15 70 20C100 25 110 5 140 10C170 15 180 35 220 5"
            stroke="#275499"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M0 45C30 40 40 15 70 20C100 25 110 5 140 10C170 15 180 35 220 5V50H0V45Z"
            fill="url(#paint0_linear)"
            opacity="0.15"
        />
        <defs>
            <linearGradient id="paint0_linear" x1="110" y1="5" x2="110" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#275499" />
                <stop offset="1" stopColor="#275499" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
)

// Decorative Dot Grid pattern
const DotGridSVG = () => (
    <svg className="svg-grid-decoration" viewBox="0 0 100 100" fill="currentColor">
        <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" />
        </pattern>
        <rect width="100" height="100" fill="url(#dotPattern)" />
    </svg>
)

const DigitalMarketingIntro = () => {
    return (
        <section className="premium-intro-section">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Visual Columns (Left) */}
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="premium-visual-composition">
                            {/* Decorative background dots */}
                            <DotGridSVG />

                            {/* Main image card */}
                            <div className="main-image-wrapper wow fadeInLeft" data-wow-delay=".3s">
                                <Image
                                    src={intro_img}
                                    alt="Digital Marketing Strategy Showcase"
                                    priority
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            {/* Floating Card: Traffic Graph */}
                            <div className="premium-floating-card card-traffic wow fadeInUp" data-wow-delay=".5s">
                                <div className="card-title">Organic Traffic</div>
                                <div className="card-value">
                                    +184% <span className="growth-indicator"><i className="fa-solid fa-arrow-trend-up"></i> MoM</span>
                                </div>
                                <TrafficChartSVG />
                            </div>

                            {/* Floating Card: ROI stats */}
                            <div className="premium-floating-card card-roi wow fadeInDown" data-wow-delay=".7s">
                                <div className="roi-icon" style={{ color: '#275499', fontSize: '20px' }}>
                                    <i className="fa-solid fa-bullseye"></i>
                                </div>
                                <div>
                                    <div className="card-title" style={{ marginBottom: '2px' }}>Average ROI</div>
                                    <div className="card-value" style={{ fontSize: '20px' }}>3.2x</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column (Right) */}
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="premium-intro-content wow fadeInRight" data-wow-delay=".4s">
                            <span className="sub-title-badge">
                                <i className="fa-solid fa-rocket"></i> WHAT WE DO
                            </span>

                            <h2 className="section-title-premium">
                                Grow Your Brand with <br />
                                <span className="gradient-text">Data-Driven</span> Strategies.
                            </h2>

                            <p className="premium-intro-desc">
                                In today's digital era, simply having an online presence isn't enough. Your brand needs a <strong>comprehensive digital marketing blueprint</strong> that connects with high-intent users, enhances search visibility, and drives meaningful customer engagement.
                            </p>

                            {/* Feature list as vertical cards */}
                            <div className="premium-feature-stack">
                                {/* Feature 1 */}
                                <div className="premium-feature-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa-solid fa-chart-line"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Data-Driven Campaigns</h4>
                                        <p>Every dollar spent is tracked and optimized for maximum conversions and cost-per-acquisition metrics.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="premium-feature-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Targeted Search Rankings</h4>
                                        <p>Establish organic search authority and secure top rankings for high-intent customer keywords.</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="premium-feature-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa-solid fa-bullseye"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>ROI Optimization</h4>
                                        <p>Constant A/B landing page testing and analytics iterations to ensure high profitability ratios.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Call to actions */}
                            <div className="premium-cta-group">
                                <Link href="/contact" className="theme-btn">
                                    Get Free Audit <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>

                                <Link href="/contact" className="strategist-link">
                                    <div className="icon-circle">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <span>Talk to a Strategist</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DigitalMarketingIntro
