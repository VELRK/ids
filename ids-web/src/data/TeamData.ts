import { StaticImageData } from "next/image";

import team_1 from "@/assets/img/home-1/team/01.jpg"
import team_2 from "@/assets/img/home-1/team/02.jpg"
import team_3 from "@/assets/img/home-1/team/03.jpg"
import team_4 from "@/assets/img/home-1/team/04.jpg"
import team_5 from "@/assets/img/home-1/team/05.jpg"
import team_6 from "@/assets/img/home-1/team/06.jpg"

interface DataType {
    id: number;
    page: string;
    thumb: StaticImageData;
    name: string;
    designation: string;
    data_delay: string;
}

const team_data: DataType[] = [
    {
        id: 1,
        page: "home_1",
        thumb: team_1,
        name: "Ronald Richards",
        designation: "Brand Manager",
        data_delay: ".3s",
    },
    {
        id: 2,
        page: "home_1",
        thumb: team_2,
        name: "Esther Howard",
        designation: "Co. founder",
        data_delay: ".5s",
    },
    {
        id: 3,
        page: "home_1",
        thumb: team_3,
        name: "Theresa Webb",
        designation: "ui-ux designer",
        data_delay: ".7s",
    },

    // inner_page
    {
        id: 1,
        page: "inner_page",
        thumb: team_1,
        name: "Ronald Richards",
        designation: "Brand Manager",
        data_delay: ".3s",
    },
    {
        id: 2,
        page: "inner_page",
        thumb: team_2,
        name: "Esther Howard",
        designation: "Co. founder",
        data_delay: ".5s",
    },
    {
        id: 3,
        page: "inner_page",
        thumb: team_3,
        name: "Theresa Webb",
        designation: "ui-ux designer",
        data_delay: ".7s",
    },
    {
        id: 4,
        page: "inner_page",
        thumb: team_4,
        name: "Henderson & Co.",
        designation: "Co Founder",
        data_delay: ".3s",
    },
    {
        id: 5,
        page: "inner_page",
        thumb: team_5,
        name: "Cloud Sphere",
        designation: "ui-ux designer",
        data_delay: ".5s",
    },
    {
        id: 6,
        page: "inner_page",
        thumb: team_6,
        name: "Nova Tech",
        designation: "Brand Manager",
        data_delay: ".7s",
    },
    {
        id: 7,
        page: "inner_page",
        thumb: team_3,
        name: "Theresa Webb",
        designation: "ui-ux designer",
        data_delay: ".7s",
    },
    {
        id: 8,
        page: "inner_page",
        thumb: team_4,
        name: "Henderson & Co.",
        designation: "Co Founder",
        data_delay: ".3s",
    },
];

export default team_data;