import Image from "next/image";

import icon from "@/assets/img/home-1/star2.svg"

interface DataType {
    id: number;
    title: string[];
}

const marquee_data: DataType[] = [
    {
        id: 1,
        title: ["Web Development", "Graphic Design", "App Development", "Software", "Digital Marketing"]
    },
    {
        id: 2,
        title: ["Web Development", "Graphic Design", "App Development", "Software", "Digital Marketing"]
    },
    {
        id: 3,
        title: ["Web Development", "Graphic Design", "App Development", "Software", "Digital Marketing"]
    },
    {
        id: 4,
        title: ["Web Development", "Graphic Design", "App Development", "Software", "Digital Marketing"]
    },
    {
        id: 5,
        title: ["Web Development", "Graphic Design", "App Development", "Software", "Digital Marketing"]
    },
];

const MarqueeArea = () => {
    return (
        <div className="marquee-section fix">
            <div className="marquee">
                {marquee_data.map((item) => (
                    <div key={item.id} className="marquee-group">
                        {item.title.map((title, i) => (
                            <div key={i} className="text">
                                <Image src={icon} alt="img" />
                                {title}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarqueeArea
