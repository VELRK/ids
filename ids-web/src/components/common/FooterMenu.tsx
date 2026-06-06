import Link from "next/link"

const FooterMenu = () => {
    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="footer-widget-items">
                    <div className="widget-head">
                        <h3>Company</h3>
                    </div>
                    <ul className="list-area">
                        <li>
                            <Link href="/about">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-projects">
                                Our Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/news">
                                News & Insights
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 ps-lg-5 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="footer-widget-items">
                    <div className="widget-head">
                        <h3>Recourse</h3>
                    </div>
                    <ul className="list-area">
                        <li>
                            <Link href="/service">
                                Software Solutions
                            </Link>
                        </li>
                        <li>
                            <Link href="/digital-marketing">
                                Digital Marketing Solutions
                            </Link>
                        </li>
                        <li>
                            <Link href="/news">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                Service Details
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterMenu
