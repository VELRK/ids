"use client"
import Category from "./Category"
import RecentPost from "./RecentPost"
import Tags from "./Tags"

const BlogSidebar = () => {
    return (
        <div className="gt-main-sideber sticky-style">
            <div className="gt-single-sideber-widget">
                <div className="gt-widget-title">
                    <h3>Search</h3>
                </div>
                <div className="gt-search-widget">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Search here" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
            <Category />
            <RecentPost />
            <Tags />
        </div>
    )
}

export default BlogSidebar
