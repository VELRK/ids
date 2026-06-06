import bg_img from "@/assets/img/breadcrumb.jpg"

interface BreadcrumbType {
    sub_title: string;
    title: string;
}

const Breadcrumb = ({ title, sub_title }: BreadcrumbType) => {
    return (
        <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
                <div className="page-heading">
                    <div className="breadcrumb-sub-title">
                        <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">{title}</h1>
                    </div>
                    <div className="breadcrumb-items-wrapper wow fadeInUp" data-wow-delay=".5s">
                        <ul className="breadcrumb-items">
                            <li>
                                <a href="/">
                                    <i className="fa-solid fa-house"></i> Home
                                </a>
                            </li>
                            <li className="separator">
                                <i className="fa-solid fa-angle-right"></i>
                            </li>
                            <li>
                                {sub_title}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
