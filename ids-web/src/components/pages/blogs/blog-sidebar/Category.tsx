import Link from "next/link";
import blog_data from "@/data/BlogData";

const Category = () => {
    // Count occurrences of each category
    const categoryCounts: { [key: string]: number } = {};
    blog_data.forEach((blog) => {
        if (blog.category) {
            categoryCounts[blog.category] = (categoryCounts[blog.category] || 0) + 1;
        }
    });

    // Convert object to array for mapping
    const categories = Object.entries(categoryCounts).map(([title, count], index) => ({
        id: index + 1,
        title,
        number: count.toString().padStart(2, '0') // formats like "01", "02"
    }));

    return (
        <div className="gt-single-sideber-widget">
            <div className="gt-widget-title">
                <h3>All Categories</h3>
            </div>
            <ul className="gt-category-list">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <Link href="/news-details">{cat.title} </Link>
                        <span>({cat.number})</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category
