import HomeContact from "@/components/forms/HomeContact"
import Link from "next/link"

const ContactForm = () => {
    return (
        <section className="classic-contact-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="classic-contact-left">
                            <h2 className="classic-section-title" style={{ color: '#0A111E' }}>
                                <span style={{ color: '#275499' }}>Secure</span> Your <span style={{ color: '#EA7925' }}>Business</span>—<span style={{ color: '#275499' }}>Reach Out</span> To Our Team.
                            </h2>
                            <p className="classic-section-desc" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)' }}>
                                We are a results-driven IT consulting team helping businesses unlock efficiency and scale dynamically.
                            </p>

                            <div className="classic-info-card mb-4" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div className="card-content">
                                    <h4 style={{ margin: 0 }}>Coimbatore</h4>
                                    <p style={{ margin: 0, fontSize: '15px' }}>
                                        72/6 Masa Complex vellapanayakan pudhur,Saravanampatti, Coimbatore, Tamil Nadu 641035
                                    </p>
                                    <Link href="mailto:hareesh@intellectworksdigital.com" style={{ textDecoration: 'none', color: 'inherit' }}>hareesh@intellectworksdigital.com</Link>
                                    <Link href="tel:+919591231854" className="fw-bold" style={{ textDecoration: 'none', color: '#1d3e71' }}>+91 9591231854</Link>
                                </div>
                            </div>

                            {/* <div className="classic-info-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div className="card-content">
                                    <h4 style={{ margin: 0 }}>Los Angeles</h4>
                                    <p style={{ margin: 0, fontSize: '15px' }}>
                                        United States — 350 Fifth Avenue <br /> 21st Floor New York, NY 10118
                                    </p>
                                    <Link href="mailto:support@Intellectworks Digital Solutions.com" style={{ textDecoration: 'none', color: 'inherit' }}>support@Intellectworks Digital Solutions.com</Link>
                                    <Link href="tel:+8666123-3562" className="fw-bold" style={{ textDecoration: 'none', color: '#1d3e71' }}>+8 666 123-3562</Link>
                                </div>
                            </div> */}

                            <div className="classic-socials-wrapper">
                                <h5>Follow Us</h5>
                                <ul className="classic-socials-list">
                                    <li><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <HomeContact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
