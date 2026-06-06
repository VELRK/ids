"use client"
import BlogForm from "@/components/forms/BlogForm"
import Image from "next/image"
import Link from "next/link"
// import Comment from "./Comment"
import BlogSidebar from "../blog-sidebar"
import { useSearchParams } from "next/navigation"
import { Suspense, useState, useEffect } from "react"
import blog_data from "@/data/BlogData"

// Fallback images if not in data
import blog_fallback from "@/assets/img/inner-page/blog-post-4.jpg"
import blog_2_fallback from "@/assets/img/inner-page/blog-post-5.jpg"
import blog_3_fallback from "@/assets/img/inner-page/blog-post-6.jpg"

const BlogDetailsContent = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div style={{ minHeight: '50vh', padding: '20px' }}>Loading...</div>;
    }

    // Find the blog from the dynamic ID or fallback to the first one
    const blog = blog_data.find((item) => item.id === Number(id)) || blog_data[0];

    return (
        <div className="row g-4">
            <div className="col-12 col-lg-8">
                <div className="blog-post-details">
                    <div className="single-blog-post">
                        <div className="post-featured-thumb fix">
                            <Image data-speed=".8" src={blog?.thumb || blog_fallback} alt={blog?.title || "Blog Image"} />
                        </div>
                        <div className="post-content">
                            <ul className="post-list d-flex align-items-center">
                                <li>
                                    <i className="fa-regular fa-user"></i>
                                    By {blog?.author || "Admin"}
                                </li>
                                <li>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    {blog?.date || "18 Dec, 2025"}
                                </li>
                                <li>
                                    <i className="fa-solid fa-tag"></i>
                                    {blog?.category || "Corporate"}
                                </li>
                            </ul>
                            <h3>{blog?.title || "Unlocking Business Growth with Innovative Solutions"}</h3>
                            <p className="mb-3">
                                {blog?.content1 || blog?.desc || "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua."}
                            </p>
                            <p className="mb-3">
                                {blog?.content2 || "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat."}
                            </p>
                            <div className="hilight-text mt-4 mb-4">
                                <p>{blog?.quoteText || "Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula."}</p>
                                <div className="icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                            </div>
                            <p className="mt-4 mb-5">
                                {blog?.content3 || "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."}
                            </p>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="details-image">
                                        <Image src={blog?.image2 || blog_2_fallback} alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="details-image">
                                        <Image src={blog?.image3 || blog_3_fallback} alt="img" />
                                    </div>
                                </div>
                            </div>

                            <p className="pt-5">
                                {blog?.content4 || "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat."}
                            </p>
                        </div>
                    </div>
                    <div className="row tag-share-wrap mt-4 mb-5">
                        <div className="col-lg-8 col-12">
                            <div className="tagcloud">
                                {blog?.tags && blog.tags.length > 0 ? (
                                    blog.tags.map((tag, index) => (
                                        <Link key={index} href="/news-details">{tag}</Link>
                                    ))
                                ) : (
                                    <>
                                        <Link href="/news-details">News</Link>
                                        <Link href="/news-details">business</Link>
                                        <Link href="/news-details">marketing</Link>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                            <div className="social-share">
                                <span className="me-3">Share:</span>
                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div> */}
                    </div>
                    {/* <Comment />
                    <div className="comment-form-wrap">
                        <h3>Leave a Comments</h3>
                        <BlogForm />
                    </div> */}
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <BlogSidebar />
            </div>
        </div>
    )
}

const BlogDetailsArea = () => {
    return (
        <section className="news-details-section section-padding">
            <div className="container">
                <div className="news-details-area">
                    <Suspense fallback={<div>Loading...</div>}>
                        <BlogDetailsContent />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsArea
