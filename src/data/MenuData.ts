import { StaticImageData } from "next/image";

import img_1 from "@/assets/img/header/home-1.jpg"
import img_2 from "@/assets/img/header/home-2.jpg"
import img_3 from "@/assets/img/header/home-3.jpg"
import img_4 from "@/assets/img/header/home-4.jpg"

interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    mega_munu?: {
        id: number;
        img: StaticImageData;
        btn: string;
        btn_link: string;
        title: string;
    }[];
    sub_menus?: {
        link: string;
        title: string;
        inner_menu?: {
            link: string;
            title: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        title: "Services",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/service", title: "Software Development" },
            { link: "/digital-marketing", title: "Digital Marketing" }
        ],
    },
    {
        id: 4,
        title: "Our Portfolio",
        link: "/our-projects",
        has_dropdown: false
    },
    {
        id: 5,
        title: "Blog",
        link: "/news",
        has_dropdown: false
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact",
    },
];

export default menu_data;