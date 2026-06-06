import Link from "next/link"

const ContactInfo = () => {
    return (
        <section className="classic-contact-info-section">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* Office Address Card */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="classic-info-card">
                            <div className="icon-container">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className="card-content">
                                <h4>Office Address</h4>
                                <p>72/6 Masa Complex vellapanayakan pudhur, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                                <a
                                    href="https://maps.app.goo.gl/ZHuv34r9WH4Mk4Dc8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-inline-flex align-items-center mt-2 fw-semibold text-primary"
                                    style={{ gap: "6px", fontSize: "14px" }}
                                >
                                    Get Directions <i className="fa-solid fa-arrow-up-right" style={{ fontSize: "11px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Channels Card */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="classic-info-card">
                            <div className="icon-container">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="card-content">
                                <h4>Phone & Email</h4>
                                <p className="mb-1">
                                    <Link className="d-block" href="tel:+919360978124">
                                        Mobile: +91 9360978124
                                    </Link>
                                </p>
                                <p>
                                    <Link className="d-block" href="mailto:intellectworks58@gmail.com">
                                        intellectworks58@gmail.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours Card */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="classic-info-card">
                            <div className="icon-container">
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="card-content">
                                <h4>Business Hours</h4>
                                <p className="mb-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                <p>Sunday: Closed</p>
                                <div className="d-inline-flex align-items-center mt-2" style={{ gap: "6px", fontSize: "14px" }}>
                                    <span className="position-relative d-inline-flex" style={{ width: "8px", height: "8px" }}>
                                        <span className="animate-ping position-absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                                    </span>
                                    <span className="fw-semibold text-success">Online Support Live</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo

