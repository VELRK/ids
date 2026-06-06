import Link from "next/link"
import service_details_data from "@/data/ServiceDetailsData"

interface WidgetListProps {
    activeId: number;
}

const WidgetList = ({ activeId }: WidgetListProps) => {
    return (
        <div className="sidebar-widget">
            <div className="sideber-title">
                <h4 className="wow fadeInUp" data-wow-delay=".2s">
                    <i className="fa-solid fa-star"></i>
                    More services</h4>
            </div>
            <ul className="service-list-item wow fadeInUp" data-wow-delay=".4s">
                {service_details_data.map((item) => (
                    <li key={item.id}>
                        <Link href={`/service-details?id=${item.id}`} className={item.id === activeId ? "active" : ""}>
                            <span>{item.title}</span>
                            <span><i className="fa-solid fa-chevron-right"></i></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetList
