import { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/home-1/icon/01.svg"
import icon_2 from "@/assets/img/home-1/icon/02.svg"
import icon_3 from "@/assets/img/home-1/icon/03.svg"
import icon_4 from "@/assets/img/home-1/icon/04.svg"
import icon_5 from "@/assets/img/home-1/icon/05.svg"

import icon2_1 from "@/assets/img/home-1/icon/06.svg"
import icon2_2 from "@/assets/img/home-1/icon/07.svg"
import icon2_3 from "@/assets/img/home-1/icon/08.svg"

import service_thumb1 from "@/assets/img/home-3/service/01.jpg"
import service_thumb2 from "@/assets/img/home-3/service/02.jpg"
import service_thumb3 from "@/assets/img/home-3/service/03.jpg"
import service_thumb4 from "@/assets/img/home-3/service/04.jpg"

import icon3_1 from "@/assets/img/home-3/icon/01.svg"
import icon3_2 from "@/assets/img/home-3/icon/02.svg"
import icon3_3 from "@/assets/img/home-3/icon/03.svg"
import icon3_4 from "@/assets/img/home-3/icon/04.svg"

interface DataType {
    id: number;
    page: string;
    icon: StaticImageData;
    title: string;
    desc: string;
}

const service_data: DataType[] = [
    {
        id: 1,
        page: "home_1",
        icon: icon_2,
        title: "Custom Application Development",
        desc: "We build robust, scalable custom applications tailored to your specific business needs using cutting-edge technologies."
    },
    {
        id: 2,
        page: "home_1",
        icon: icon_1,
        title: "AI Product Engineering",
        desc: "Transform your AI concepts into powerful, production-ready applications. From custom LLM integrations and intelligent chatbots to predictive analytics and computer vision solutions."
    },
    {
        id: 3,
        page: "home_1",
        icon: icon_3,
        title: "Android & iOS App Development",
        desc: "Leverage the power of mobile with our expert Android and iOS app development services. We create seamless, high-performance applications for both platforms."
    },
    {
        id: 4,
        page: "home_1",
        icon: icon_4,
        title: "Technology Consulting",
        desc: "Leverage our technology consulting services to make informed decisions about your tech strategy. We provide expert guidance to optimize your technology stack and drive business transformation."
    },
    {
        id: 5,
        page: "home_1",
        icon: icon_5,
        title: "UI/UX Design",
        desc: "Transform your ideas into intuitive and visually captivating digital experiences with our UI/UX design services. We specialize in creating user-centric designs that enhance engagement and drive business goals."
    },
    {
        id: 6,
        page: "home_1",
        icon: icon_3,
        title: "Social Media Marketing",
        desc: "Connect with your audience and build meaningful engagement through our comprehensive social media marketing strategies. We create compelling content that drives interaction and growth."
    },
    {
        id: 7,
        page: "home_1",
        icon: icon_4,
        title: "Our Digital Platforms",
        desc: "Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting."
    },

    // home_2
    {
        id: 1,
        page: "home_2",
        icon: icon2_1,
        title: "Business solutions",
        desc: "We provid reliable solutions designed help modern businesses thrive."
    },
    {
        id: 2,
        page: "home_2",
        icon: icon2_2,
        title: "digital solutions",
        desc: "We provid reliable solutions designed help modern businesses thrive."
    },
    {
        id: 3,
        page: "home_2",
        icon: icon2_3,
        title: "24/7 Support",
        desc: "We provid reliable solutions designed help modern businesses thrive."
    },

    // home_3
    {
        id: 1,
        page: "home_3",
        icon: service_thumb1,
        title: "Digital cyber security",
        desc: "Businesses to thrive in changing digital world. With over a decade systems."
    },
    {
        id: 2,
        page: "home_3",
        icon: service_thumb2,
        title: "Future AI innovations",
        desc: "Businesses to thrive in changing digital world. With over a decade systems."
    },
    {
        id: 3,
        page: "home_3",
        icon: service_thumb3,
        title: "Smart tech solutions",
        desc: "Businesses to thrive in changing digital world. With over a decade systems."
    },
    {
        id: 4,
        page: "home_3",
        icon: service_thumb4,
        title: "Threat Protection",
        desc: "Businesses to thrive in changing digital world. With over a decade systems."
    },
    {
        id: 5,
        page: "home_3",
        icon: service_thumb3,
        title: "Smart tech solutions",
        desc: "Businesses to thrive in changing digital world. With over a decade systems."
    },

    // home3_2
    {
        id: 1,
        page: "home3_2",
        icon: icon3_1,
        title: "Threat detection",
        desc: "Early identification of suspicious activities across your system. Our intelligent monitoring engine constantly scans networks and endpoints to detect malware.",
    },
    {
        id: 2,
        page: "home3_2",
        icon: icon3_2,
        title: "Data encryption",
        desc: "Protect sensitive data with enterprise-grade encryption. We secure every file, transaction, and communication channel so your information stays unreadable.",
    },
    {
        id: 3,
        page: "home3_2",
        icon: icon3_3,
        title: "Vulnerability management",
        desc: "Stay ahead of cyber risks with automated vulnerability scanning and patching. We identify system weaknesses, outdated software, and potential.",
    },
    {
        id: 4,
        page: "home3_2",
        icon: icon3_4,
        title: "Access control",
        desc: "Define who gets access to what—with precision. Our advanced access control system uses multi-factor authentication, role-based permissions, and continuous.",
    },
];

export default service_data;