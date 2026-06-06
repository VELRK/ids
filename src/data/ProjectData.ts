import { StaticImageData } from "next/image";

import project_1 from "@/assets/img/home-1/project/01.jpg"
import project_2 from "@/assets/img/home-1/project/02.jpg"
import project_3 from "@/assets/img/home-1/project/03.jpg"

import project2_1 from "@/assets/img/home-1/project/04.jpg"
import project2_2 from "@/assets/img/home-1/project/05.jpg"
import project2_3 from "@/assets/img/home-1/project/06.jpg"
import project2_4 from "@/assets/img/home-1/project/07.jpg"
import project2_5 from "@/assets/img/home-1/project/08.jpg"
import project2_6 from "@/assets/img/home-1/project/09.jpg"

interface DataType {
    id: number;
    page: string;
    thumb: StaticImageData;
    title: string;
    desc?: string;
    category: string[];
    data_delay?: string
    class?: string;
    class_2?: string;
}

const project_data: DataType[] = [
    {
        id: 1,
        page: "home_1",
        thumb: project_1,
        title: "Smart Software Development",
        desc: "Helping businesses grow through innovative software development, scalable web and mobile applications, cloud-powered solutions, and intelligent digital transformation.",
        category: ["Mobile", "App", "Cloud", "Network"]
    },
    {
        id: 2,
        page: "home_1",
        thumb: project_2,
        title: "Creative Design Excellence",
        desc: "Creating powerful visual identities through graphic design, logo design, branding, social media creatives, motion graphics, UI/UX design, and professional video editing.",
        category: ["Digital Marketing", "Content Writing", "Video Editing", "Graphic Design"]
    },
    {
        id: 3,
        page: "home_1",
        thumb: project_3,
        title: "Digital Marketing",
        desc: "We help businesses reach the right audience at the right time. Our data-driven approach ensures maximum visibility and measurable growth for your brand.",
        category: ["Search Engine Optimization", "Social Media Marketing"]
    },

    // home_2
    {
        id: 1,
        page: "home_2",
        thumb: project2_1,
        title: "Digital desk",
        category: ["Mobile", "Cloud", "Network"],
        class: "mt-200",
        class_2: "col-xl-4 col-lg-5",
    },
    {
        id: 2,
        page: "home_2",
        thumb: project2_2,
        title: "Smart connect",
        category: ["Mobile", "Cloud", "Network"],
        class: "style-2",
        class_2: "col-xl-8 col-lg-7",
    },
    {
        id: 3,
        page: "home_2",
        thumb: project2_3,
        title: "Smart connect",
        category: ["Mobile", "Cloud", "Network"],
        class: "style-3",
        class_2: "col-xl-8 col-lg-7",
    },
    {
        id: 4,
        page: "home_2",
        thumb: project2_4,
        title: "Modern route",
        category: ["Mobile", "Cloud", "Network"],
        class: "mt-100 style-4",
        class_2: "col-xl-4 col-lg-5",
    },
    {
        id: 5,
        page: "home_2",
        thumb: project2_5,
        title: "Smart AI Solutions",
        category: ["Mobile", "Cloud", "Network"],
        class: "mt-100 style-4",
    },
    {
        id: 6,
        page: "home_2",
        thumb: project2_6,
        title: "Modern Innovation.",
        category: ["Mobile", "Cloud", "Network"],
        class: "mt-100 style-4",
    },
    {
        id: 7,
        page: "home_2",
        thumb: project2_3,
        title: "Smart connect",
        category: ["Mobile", "Cloud", "Network"],
        class: "style-3",
    },
    {
        id: 8,
        page: "home_2",
        thumb: project2_4,
        title: "Modern route",
        category: ["Mobile", "Cloud", "Network"],
        class: "mt-100 style-4",
    },
    {
        id: 9,
        page: "home_2",
        thumb: project2_5,
        title: "Smart AI Solutions",
        category: ["Mobile", "Cloud", "Network"],
        class: "mt-100 style-4",
    },
];

export default project_data;