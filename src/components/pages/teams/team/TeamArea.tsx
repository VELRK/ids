"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import team_data from "@/data/TeamData"

const TeamArea = () => {

    const team = team_data.filter((items) => items.page === "inner_page");

    const itemsPerPage = 6;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = team.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(team.length / itemsPerPage);
    // click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % team.length;
        setItemOffset(newOffset);
    };

    return (
        <section className="team-section section-padding fix">
            <div className="container">
                <div className="team-wrapper">
                    <div className="row g-4">
                        {currentItems.filter((items) => items.page === "inner_page").map((item) => (
                            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 tp_fade_anim" data-delay={item.data_delay} data-fade-from="left">
                                <div className="team-card-item style-inner">
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
                    <div className="page-nav-wrap text-center">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<i className="fa-solid fa-arrow-up-right"></i>}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel={<i className="fa-solid fa-arrow-up-left"></i>}
                            renderOnZeroPageCount={null}
                            className="post-pagination text-center list-unstyled"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamArea
