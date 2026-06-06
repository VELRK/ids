import Link from "next/link";
import blog_data from "@/data/BlogData";

const Tags = () => {
    // Extract unique tags from all blog posts
    const tags = Array.from(
        new Set(
            blog_data.flatMap(blog => blog.tags || [])
        )
    );

    return (
        <div className="gt-single-sideber-widget mb-0">
            <div className="gt-widget-title">
                <h3>Popular Tags</h3>
            </div>
            <div className="tagcloud">
                {tags.map((tag, i) => (
                    <Link key={i} href="/news-details">{tag}</Link>
                ))}
            </div>
        </div>
    )
}

export default Tags
