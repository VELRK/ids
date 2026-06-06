import ContactForm from "@/components/forms/ContactForm"

const ContactArea = () => {
    return (
        <section className="classic-contact-section">
            <div className="container">
                <div className="row g-5 align-items-stretch">
                    {/* Left Column: Brand Context, Socials, & Map */}
                    <div className="col-lg-5">
                        <div className="classic-contact-left h-100 d-flex flex-column justify-content-between">
                            <div>
                                <span className="text-uppercase fw-bold text-primary mb-2 d-inline-block" style={{ letterSpacing: "0.1em", fontSize: "14px" }}>
                                    Get In Touch
                                </span>
                                <h2 className="classic-section-title">
                                    Let's build something great together.
                                </h2>
                                <p className="classic-section-desc">
                                    Have a project in mind, need technical assistance, or just want to explore how our digital solutions can accelerate your business? Drop us a message, and our expert team will respond within 24 hours.
                                </p>
                            </div>

                            <div className="classic-socials-wrapper">
                                <h5>Connect with us</h5>
                                <ul className="classic-socials-list">
                                    <li>
                                        <a href="https://in.linkedin.com/company/intellectworks-digital-solutions" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter / X">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="https://www.facebook.com/intellectworksdigital/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/intellectworksdigital/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Google Map Section */}
                            <div className="classic-map-card">
                                <div className="map-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4038322310594!2d76.983232!3d11.083250399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f715226a0e41%3A0x6d9d7a54dad91151!2sIntellectworks%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1780380719363!5m2!1sen!2sin" loading="lazy"
                                        title="IntellectWorks Office Location Map"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Message Form */}
                    <div className="col-lg-7">
                        <div className="classic-form-card">
                            <h3 className="form-title">Send Us A Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactArea
