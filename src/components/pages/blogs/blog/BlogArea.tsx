"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import blog_data from "@/data/BlogData"

const BlogArea = () => {

  const blogs = blog_data.filter((items) => items.page === "inner_blog");

  const itemsPerPage = 6;
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
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="row g-4">
          {currentItems.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.data_delay}>
              <div className="news-card-items mt-0">
                <div className="news-image">
                  <Image src={item.thumb} alt="img" />
                  <Image src={item.thumb} alt="img" />
                </div>
                <div className="news-top-content">
                  <div className="news-content">
                    <h3>
                      <Link href="/news-details">{item.title} </Link>
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
    </section>
  )
}

export default BlogArea
