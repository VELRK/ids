import TitleShape from "@/components/common/TitleShape"
import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/img/home-1/news/04.jpg"

const Blog = () => {
    
    return (
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title mb-0">
                        <span className="sub-title wow fadeInUp">
                            <TitleShape />
                            Latest Blog Insights
                        </span>
                        <h2 className="text-anim">
                            Our Insight Latest News
                        </h2>
                    </div>
                    <Link href="/news-grid" className="theme-btn">
                        More blogs <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-lg-6 text-anims">
                        <div className="news-card-items-2">
                            <div className="news-image">
                                <Image src={img_1} alt="img" />
                                <Image src={img_1} alt="img" />
                            </div>
                            <div className="news-top-content">
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-details">
                                            How custom software solutions improve customer experience critical
                                            businesses.
                                        </Link>
                                    </h3>
                                    <span>Nov 3, 2025</span>
                                </div>
                                <div className="read-button">
                                    <Link href="/news-details" className="link-btn">
                                        Read more
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {blog_data.filter((items) => items.page === "home_2").map((item) => (
                            <div key={item.id} className="news-card-items-2 style-2 text-anims">
                                <div className="news-image">
                                    <Image src={item.thumb} alt="img" />
                                    <Image src={item.thumb} alt="img" />
                                </div>
                                <div className="news-top-content">
                                    <div className="news-content">
                                        <h3>
                                            <Link href="/news-details">{item.title}</Link>
                                        </h3>
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="read-button">
                                        <Link href="/news-details" className="link-btn">
                                            Read more
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
