"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import project_data from "@/data/ProjectData"
import useClipMaskAnimation from "@/hooks/useClipMaskAnimation";

const ProjectArea = () => {

    const project = project_data.filter((items) => items.page === "home_2");

    const itemsPerPage = 6;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = project.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(project.length / itemsPerPage);
    useClipMaskAnimation({ dependencies: [itemOffset] });
    // click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % project.length;
        setItemOffset(newOffset);
    };

    return (
        <section className="project-section-2 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {currentItems.filter((items) => items.page === "home_2").map((item) => (
                        <div key={item.id} className="col-lg-6">
                            <div className="project-card-items-inner">
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
                <div className="page-nav-wrap text-center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa-solid fa-arrow-up-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={<i className="fa-solid fa-arrow-up-left"></i>}
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProjectArea
