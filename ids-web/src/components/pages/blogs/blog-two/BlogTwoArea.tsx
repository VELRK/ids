"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import blog_data from "@/data/BlogData"
import BlogSidebar from "../blog-sidebar"

const BlogTwoArea = () => {

    const blogs = blog_data.filter((items) => items.page === "inner_blog_2");

    const itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogs.length / itemsPerPage);
    // click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };

    return (
        <section className="news-standard-section section-padding">
            <div className="container">
                <div className="gt-news-standard-wrapper">
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="gt-news-standard-items">
                                {currentItems.map((item) => (
                                    <div key={item.id} className={`gt-news-card-items-4 ${item.class}`}>
                                        <div className="gt-news-image">
                                            <Image src={item.thumb} alt="img" />
                                        </div>
                                        <div className="gt-news-content">
                                            <ul className="gt-date-list">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    {item.date}
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-comments"></i>
                                                    {item.comment} Comments
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href={`/news-details?id=${item.id}`}>{item.title}</Link>
                                            </h3>
                                            <p>{item.desc}</p>
                                            <Link href={`/news-details?id=${item.id}`} className="theme-btn">
                                                Read More <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
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
                        </div>
                        <div className="col-lg-4 col-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogTwoArea
