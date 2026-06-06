import TitleShape from "@/components/common/TitleShape"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

import bg_img from "@/assets/img/home-1/team/bg.jpg"

const Team = () => {
    return (
        <section className="team-section section-padding fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
                <div className="team-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="team-left-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title style-2 text-white wow fadeInUp">
                                        <TitleShape />
                                        OUR EXPERT TEAM
                                    </span>
                                    <h2 className="text-white text-anim">
                                        Meet Expert <br /> Team.
                                    </h2>
                                </div>
                                <p className="text">
                                    Businesses to thrive in changing digital world. With over a decade.
                                </p>
                                <Link href="/team-details" className="theme-btn">
                                    More members <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                        {team_data.filter((items) => items.page === "home_1").map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 tp_fade_anim" data-delay={item.data_delay} data-fade-from="left">
                                <div className="team-card-item">
                                    <div className="team-image">
                                        <Image src={item.thumb} alt="img" />
                                        <div className="social-icon">
                                            <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h3>
                                            <Link href="/team-details">{item.name}</Link>
                                        </h3>
                                        <p>{item.designation}</p>
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

export default Team
