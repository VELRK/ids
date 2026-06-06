import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import comment_1 from "@/assets/img/inner-page/post-comment.png"
import comment_2 from "@/assets/img/inner-page/post-comment-2.png"

interface DataType {
    id: number;
    avatar: StaticImageData;
    name: string;
    desc: string;
    date: string;
    class: string;
}

const comment_data: DataType[] = [
    {
        id: 1,
        avatar: comment_1,
        name: "Sohel Tanvir",
        desc: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy",
        date: "March 20, 2024 at 2:37 pm",
        class: "blog-single-comment d-flex gap-4 pt-4 pb-5",
    },
    {
        id: 2,
        avatar: comment_2,
        name: "Alex Flores",
        desc: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy",
        date: "March 20, 2024 at 2:37 pm",
        class: "blog-single-comment bb-none d-flex gap-4 pt-5",
    },
];

const Comment = () => {
    return (
        <div className="comments-area">
            <div className="comments-heading">
                <h3>02 Comments</h3>
            </div>
            {comment_data.map((item) => (
                <div key={item.id} className={item.class}>
                    <div className="image">
                        <Image src={item.avatar} alt="image" />
                    </div>
                    <div className="content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div className="con">
                                <h5><Link href="/news-details">{item.name}</Link></h5>
                                <span>{item.date}</span>
                            </div>
                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="mt-30 mb-4">{item.desc}</p>
                        <Link href="/news-details" className="reply">Reply</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comment
