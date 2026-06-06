"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImageData } from "next/image";
import TitleShape from "@/components/common/TitleShape";
import Link from "next/link";

import bg_img1 from "@/assets/img/home-4/project/01.jpg";
import bg_img2 from "@/assets/img/home-4/project/02.jpg";
import bg_img3 from "@/assets/img/home-4/project/03.jpg";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
    id: number;
    thumb: StaticImageData;
    title: string;
    desc: string;
}

const project_data: DataType[] = [
    {
        id: 1,
        thumb: bg_img1,
        title: "Digital desk",
        desc: "Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficienc digital world."
    },
    {
        id: 2,
        thumb: bg_img2,
        title: "Smart connect",
        desc: "Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficienc digital world."
    },
    {
        id: 3,
        thumb: bg_img3,
        title: "Modern route",
        desc: "Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficienc digital world."
    }
];

const Project = () => {

    useEffect(() => {
        const elements = gsap.utils.toArray<HTMLDivElement>(
            ".project-card-wrapper-4 .project-card-items-4"
        );

        elements.forEach((element, index, array) => {
            if (index === array.length - 1) return;

            const delayAttr = element.getAttribute("data-ani-delay");
            const delay = delayAttr ? parseFloat(delayAttr) : 0;

            gsap.to(element, {
                scale: 0.6,
                opacity: 0,
                duration: 2,
                delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 15%",
                    end: "bottom 15%",
                    scrub: 2,
                    pin: true,
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    }, []);

    return (
        <section className="project-section-4 section-padding fix">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp mb-0">
                        <TitleShape />
                        our security services
                    </span>
                    <h2 className="text-anim">
                        Explore Latest <br /> Creation.
                    </h2>
                </div>
                <div className="project-card-wrapper-4">
                    <div className="row">
                        <div className="col-xl-12">
                            {project_data.map((item) => (
                                <div
                                    key={item.id}
                                    className="project-card-items-4 bg-cover"
                                    style={{ backgroundImage: `url(${item.thumb.src})` }}
                                    data-ani-delay={item.id * 0.2}
                                >
                                    <div className="project-box">
                                        <h3>
                                            <Link href="/project-details">{item.title}</Link>
                                        </h3>
                                        <p>{item.desc}</p>
                                        <Link href="/project-details" className="arrow-icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
