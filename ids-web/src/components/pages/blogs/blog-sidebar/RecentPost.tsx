import Image from "next/image";
import Link from "next/link";
import blog_data from "@/data/BlogData";

const RecentPost = () => {
    // Take the first 3 items as recent posts
    const recent_data = blog_data.slice(0, 3);

    return (
        <div className="gt-single-sideber-widget">
            <div className="gt-widget-title">
                <h3>Recent Post</h3>
            </div>
            <div className="gt-recent-post-area">
                {recent_data.map((item) => (
                    <div key={item.id} className="gt-recent-items">
                        <div className="gt-recent-thumb">
                            <Image src={item.thumb} alt="img" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                        </div>
                        <div className="gt-recent-content">
                            <h5>
                                <Link href={`/news-details?id=${item.id}`}>{item.title}</Link>
                            </h5>
                            <ul>
                                <li>{item.date}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentPost
