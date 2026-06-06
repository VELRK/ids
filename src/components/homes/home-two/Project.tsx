import TitleShape from "@/components/common/TitleShape"
import project_data from "@/data/ProjectData"
import Image from "next/image"
import Link from "next/link"

const Project = () => {
    return (
        <section className="project-section-2 section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="content">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            We are a results-driven IT consulting team helping businesses unlock efficiency, scale
                            operations.
                        </p>
                        <Link href="/project" className="project-btn">
                            Explore More <i className="fa-solid fa-arrow-up-right"></i>
                        </Link>
                    </div>
                    <div className="section-title mb-0">
                        <span className="sub-title wow fadeInUp">
                            <TitleShape />
                            Our Projects
                        </span>
                        <h2 className="text-anim">
                            Transforming Ideas Into <br />
                            Real-World Solutions.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row g-4">
                    {project_data.filter(item => item.page === "home_2").slice(0, 4).map((item) => (
                        <div key={item.id} className={item.class_2}>
                            <div className={`project-card-items-2 ${item.class}`}>
                                <div className="project-image tp-clip-anim p-relative">
                                    <Image src={item.thumb} alt="img" className="tp-anim-img" data-animate="true" />
                                </div>
                                <div className="project-content">
                                    <h3>
                                        <Link href={`/project-details?id=${item.id}&page=${item.page}`}>{item.title}</Link>
                                    </h3>
                                    <ul className="list">
                                        <li>
                                            {item.category.map((cat, i) => (
                                                <Link key={i} href={`/project-details?id=${item.id}&page=${item.page}`}>{cat}</Link>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project
