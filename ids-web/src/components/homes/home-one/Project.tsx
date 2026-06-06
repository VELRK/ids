"use client"
import Image from 'next/image'
import project_data from '@/data/ProjectData'
import Link from 'next/link'
import TitleShape from '@/components/common/TitleShape'
import useProjectPinScroll from '@/hooks/useProjectPinScroll'

const Project = () => {

    useProjectPinScroll()

    return (
        <section className="project-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        <TitleShape />
                        Our Top Projects
                    </span>
                    <h2 className="text-anim">
                        Showcase Of Our Recognized Work
                    </h2>
                </div>
                <div className="project-box-wrapper project-panel-area">
                    {project_data.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="project-card-items project-panel">
                            <h4>0{item.id}</h4>
                            <div className="project-content">
                                <h3 style={{ fontSize: '38px' }}>
                                    <Link href={`/project-details?id=${item.id}&page=${item.page}`}>{item.title}</Link>
                                </h3>
                                <p>{item.desc}</p>
                                <Link href={`/project-details?id=${item.id}&page=${item.page}`} className="theme-btn">
                                    Know more us <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                                <ul className="list">
                                    <li>
                                        {item.category.map((cat, i) => (
                                            <Link key={i} href={`/project-details?id=${item.id}&page=${item.page}`}>{cat}</Link>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                            <div className="project-thumb scale">
                                <Image src={item.thumb} alt="img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project
