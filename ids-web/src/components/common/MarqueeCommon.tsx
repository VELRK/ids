import Image from "next/image"
import Marquee from "react-fast-marquee";

import icon from "@/assets/img/home-2/star.png"

interface DataType {
    id: number;
    text: string[];
}

const marquee_text: DataType[] = [
    {
        id: 1,
        text: ["Digital", "Support", "Consulting", "Technology", "Innovation", "Networking", "Software"],
    },
    {
        id: 2,
        text: ["Digital", "Support", "Consulting", "Technology", "Innovation", "Networking", "Software"],
    },
    {
        id: 3,
        text: ["Digital", "Support", "Consulting", "Technology", "Innovation", "Networking", "Software"],
    },
    {
        id: 4,
        text: ["Digital", "Support", "Consulting", "Technology", "Innovation", "Networking", "Software"],
    },
    {
        id: 5,
        text: ["Digital", "Support", "Consulting", "Technology", "Innovation", "Networking", "Software"],
    },
]

const MarqueeCommon = () => {

    return (
        <div className="marquee">
            {marquee_text.map((item) => (
                <Marquee
                    speed={20}
                    gradient={false}
                    pauseOnHover={false}
                    direction="left"
                    delay={0} key={item.id} className="marquee-group">
                    {item.text.map((text, index) => (
                        <div key={index} className="text">
                            <Image src={icon} alt="img" />
                            {text}
                        </div>
                    ))}
                </Marquee>
            ))}
        </div>
    )
}

export default MarqueeCommon
