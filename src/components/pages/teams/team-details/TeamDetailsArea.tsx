import Image from "next/image"
import Link from "next/link"
import Progressbar from "./Progressbar"
import TeamForm from "@/components/forms/TeamForm"

import team_thumb from "@/assets/img/inner-page/team-details-01.jpg"

const TeamDetailsArea = () => {
    return (
        <section className="team-details-section fix section-padding">
            <div className="container">
                <div className="team-details-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="team-details-image">
                                <Image data-speed=".8" src={team_thumb} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details-content">
                                <span className="offer">Senior Officer</span>
                                <h2>Robert Allison</h2>
                                <p className="mt-3">
                                    Robert leads the company with over 15 years of experience in corporate strategy and business growth. She drives innovation and ensures the organization stays aligned with its long-term vision.
                                </p>
                                <ul className="team-infrom wow fadeInUp" data-wow-delay=".4s">
                                    <li>
                                        <span>RESPONSIBILITY:</span>
                                        Corporate officer
                                    </li>
                                    <li>
                                        <span>EXPRERIENCE::</span>
                                        10+ years
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        robert-allison@niotix.com
                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        <Link href="tel:+86661233562">+8 (666) 123-3562</Link>
                                    </li>
                                </ul>
                                <h5>Follow me:</h5>
                                <div className="social-icon wow fadeInUp" data-wow-delay=".6s">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-middle-items">
                        <h2 className="mt-4">More about me</h2>
                        <p className="mt-3">
                            I am a passionate and results-driven professional with extensive experience in corporate strategy, digital marketing, and business development. Over the years, I have helped organizations transform ideas into actionable strategies, optimize operations, and achieve sustainable growth. My approach combines creativity with data-driven decision-making to deliver measurable results and long-term value. I thrive in dynamic environments, collaborating.
                        </p>
                        <p className="mt-3">
                            I thrive in collaborative environments and enjoy leading teams to bring complex projects from concept to completion. My goal is to empower organizations to achieve sustainable growth while navigating today’s dynamic business landscape with confidence.
                        </p>
                        <div className="team-skill-area">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="skill-content">
                                        <h3>Skills</h3>
                                        <Progressbar />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="career-content">
                                        <h4>Career</h4>
                                        <ul>
                                            <li>
                                                <h3>2020</h3>
                                                <p>
                                                    My career journey began in business analysis, where I honed my skills in market research, financial assessment, and operational optimization. Over the years, I progressed into leadership roles, managing.
                                                </p>
                                            </li>
                                            <li>
                                                <h3>2024</h3>
                                                <p>
                                                    I have successfully led projects that enhanced operational efficiency, strengthened brand positioning, and increased revenue streams. With experience in global market digital transformation.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-bottom-items">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <div className="team-left-items">
                                    <h2>Contact me</h2>
                                    <p>
                                        Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current.
                                    </p>
                                    <div className="phone-icon">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <Link href="tel:+86661233562">+8 (666) 123-3562</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-right-items">
                                    <TeamForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamDetailsArea
