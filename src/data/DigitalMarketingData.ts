import { StaticImageData } from "next/image"

// Import client logos
import logoILF from "@/assets/img/logo_images/ilf.jpg"
import logoSyncr from "@/assets/img/logo_images/syncr.png"
import logoMMH from "@/assets/img/logo_images/mmh.jpeg"
import logoCP from "@/assets/img/logo_images/cp.jpeg"
import logoDVM from "@/assets/img/logo_images/dvm.png"
import logo2Deal from "@/assets/img/logo_images/2deal.png"
import logoSVF from "@/assets/img/logo_images/svf.jpeg"
import logoAnanya from "@/assets/img/logo_images/ah.png"

// Import project screenshots
import mmh1 from "@/assets/img/inner-page/mmh1.jpeg"
import mmh2 from "@/assets/img/inner-page/mmh2.jpeg"
import mmh3 from "@/assets/img/inner-page/mmh3.jpeg"
import mmh4 from "@/assets/img/inner-page/mmhw1.png"
import mmh5 from "@/assets/img/inner-page/mmhw2.png"
import mmh6 from "@/assets/img/inner-page/mmhw3.png"

import syncr1 from "@/assets/img/inner-page/syncr-1.jpeg"
import syncr2 from "@/assets/img/inner-page/syncr-2.jpeg"
import syncr3 from "@/assets/img/inner-page/syncr-3.jpeg"
import syncrweb1 from "@/assets/img/inner-page/syncr-web-1.png"
import syncrweb2 from "@/assets/img/inner-page/syncr-web-2.png"

import ecommerce1 from "@/assets/img/inner-page/2deal-1.jpeg"
import ecommerce2 from "@/assets/img/inner-page/2deal-2.jpeg"
import ecommerce3 from "@/assets/img/inner-page/2deal-3.jpeg"

import indianladiesfashion1 from "@/assets/img/inner-page/indian-ladies-fashion-1.png"
import indianladiesfashion2 from "@/assets/img/inner-page/indian-ladies-fashion-2.png"
import indianladiesfashion3 from "@/assets/img/inner-page/indian-ladies-fashion-3.png"
import indianladiesfashion4 from "@/assets/img/inner-page/indian-ladies-fashion-4.png"

import dreamvilla1 from "@/assets/img/inner-page/dvm1.jpeg"
import dreamvilla2 from "@/assets/img/inner-page/dvm2.jpeg"
import dreamvilla3 from "@/assets/img/inner-page/dvm3.jpeg"
import dvmweb1 from "@/assets/img/inner-page/dvmweb1.png"
import dvmweb2 from "@/assets/img/inner-page/dvmweb2.png"
import dvmweb3 from "@/assets/img/inner-page/dvmweb3.png"

import srivishakha1 from "@/assets/img/inner-page/srivishakha-1.png"
import srivishakha2 from "@/assets/img/inner-page/srivishakha-2.png"
import srivishakha3 from "@/assets/img/inner-page/srivishakha-3.png"
import srivishakha4 from "@/assets/img/inner-page/vf1.jpeg"
import srivishakha5 from "@/assets/img/inner-page/vf2.jpeg"
import srivishakha6 from "@/assets/img/inner-page/vf3.jpeg"

import coimbatoreproperties1 from "@/assets/img/inner-page/cp1.png"
import coimbatoreproperties2 from "@/assets/img/inner-page/cp2.png"
import coimbatoreproperties3 from "@/assets/img/inner-page/cp3.png"

import project_1 from "@/assets/img/home-1/digital_marketing/dm1.png"
import project_2 from "@/assets/img/home-1/digital_marketing/dm2.png"
import project_3 from "@/assets/img/home-1/digital_marketing/dm3.png"
import project_4 from "@/assets/img/home-1/digital_marketing/dm.png"
import project_5 from "@/assets/img/home-1/digital_marketing/dm4.png"
import project_6 from "@/assets/img/home-1/digital_marketing/dm5.png"
import project_7 from "@/assets/img/home-1/digital_marketing/dm6.png"
import project_8 from "@/assets/img/home-1/ourProjects/mmh.png"

import ah1 from "@/assets/img/inner-page/ah1.png"
import ah2 from "@/assets/img/inner-page/ah2.png"
import ah3 from "@/assets/img/inner-page/ah3.png"



export interface CompanyDeliverableVideo {
    title: string;
    videoUrl: string;
    duration?: string;
    description?: string;
}

export interface CompanyDeliverableBrochure {
    title: string;
    downloadUrl: string;
    previewImg: StaticImageData;
    description?: string;
}

export interface CompanyDeliverableImage {
    title: string;
    img: StaticImageData;
    category: "Social Media Post" | "Google Ads Banner" | "Graphic Design" | "Web Screen" | "App Screen";
}

export interface ClientCompanyWork {
    id: string;
    name: string;
    logo: StaticImageData;
    mainImage: StaticImageData,
    tagline: string;
    description: string;
    services: string[];
    websiteUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    videos?: CompanyDeliverableVideo[];
    images?: CompanyDeliverableImage[];
    brochures?: CompanyDeliverableBrochure[];
}

export const clientCompaniesWork: ClientCompanyWork[] = [
    {
        id: "make-my-homes",
        name: "Make My Homes",
        logo: logoMMH,
        mainImage: project_4,
        tagline: "Premium plot bookings and real estate overview.",
        description: "For Make My Homes, we built a comprehensive digital footprint. We designed and developed their responsive web application and cross-platform mobile apps, launched multi-channel lead-generation ad campaigns on Meta and Google, crafted stunning digital brochures, and produced engaging short-form video reels highlighting premium property sites.",
        services: ["Web Development", "App Development", "Digital Marketing Ads", "Graphic Design", "Video Editing (Reels)", "Brochure Design"],
        websiteUrl: "https://makemyhomes.com/",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.makemyhomes&hl=en_IN",
        appStoreUrl: "https://apps.apple.com/in/app/make-my-homes/id6741757789",
        videos: [
            {
                title: "Luxury Villa Tour Reel",
                videoUrl: "https://youtu.be/69UFf6_rpwg?si=YXjsZ2ZMrkfY4HFD",
                duration: "0:25",
                description: "Short Instagram Reel showcasing the interior layout, finishes, and premium specifications of a completed villa."
            },
            {
                title: "Site Launch Event Promo",
                videoUrl: "https://youtu.be/vJfCtio1TK4?si=2_KZRRo9f2JlteSR",
                duration: "0:30",
                description: "Stunning aerial drone walkthrough detailing the project layout, main gate arches, and ready-to-build roads."
            }
        ],
        images: [
            { title: "Real Estate Social Post", img: mmh1, category: "Social Media Post" },
            { title: "Site Location Grid Banner", img: mmh2, category: "Google Ads Banner" },
            { title: "Amenities & Highlights Graphic", img: mmh3, category: "Graphic Design" },
            { title: "Mobile App Interface Design", img: mmh4, category: "App Screen" },
            { title: "Website Plot Booking Portal", img: mmh5, category: "Web Screen" },
            { title: "Interactive Site Layout Plan", img: mmh6, category: "Web Screen" }
        ],
        brochures: [
            {
                title: "MMH Premium Plots Brochure",
                downloadUrl: "#",
                previewImg: mmh1,
                description: "Exclusive brochure featuring certified plot layout designs, location key points, and developer project details."
            }
        ]
    },
    // {
    //     id: "syncr-crm",
    //     name: "Syncr CRM",
    //     logo: logoSyncr,
    //     mainImage: mmh4,
    //     tagline: "The ultimate CRM & lead management system for real estate.",
    //     description: "Syncr CRM required a high-performance system for tech-savvy real estate brokers. We developed their visual identity, built cross-platform mobile apps for field agents, designed marketing graphics, ran targeted search engine marketing (SEM) campaigns, and produced instructional screen-share reels showing pipeline automation.",
    //     services: ["Web Development", "App Development", "Digital Marketing", "Graphic Design", "Video Tutorials"],
    //     websiteUrl: "https://syncr.in/",
    //     playStoreUrl: "https://play.google.com/store/apps/details?id=com.syncr.app",
    //     appStoreUrl: "https://apps.apple.com/in/app/syncr-real-estate-crm/id6754961843",
    //     videos: [
    //         {
    //             title: "Syncr CRM App Introduction",
    //             videoUrl: "https://player.vimeo.com/external/409205364.sd.mp4?s=d00d20d481fb92b8d00346c8fe77ec42a03332eb&profile_id=165&oauth2_token_id=57447761",
    //             duration: "0:45",
    //             description: "Premium product promo reel highlighting user interface, contact management, and WhatsApp automation features."
    //         },
    //         {
    //             title: "Sales Pipeline Automation Demo",
    //             videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=fb146db7a2db12be213b190f7797746401037346&profile_id=165&oauth2_token_id=57447761",
    //             duration: "0:35",
    //             description: "Detailed dashboard tutorial demonstrating drag-and-drop deals, lead scoring, and automated task reminders."
    //         }
    //     ],
    //     images: [
    //         { title: "Lead Dashboard Analytics", img: syncr1, category: "App Screen" },
    //         { title: "CRM Mobile Lead Management", img: syncr2, category: "App Screen" },
    //         { title: "Sales Pipeline Screen", img: syncr3, category: "App Screen" },
    //         { title: "CRM Web Landing Page", img: syncrweb1, category: "Web Screen" },
    //         { title: "Admin Panel Analytics", img: syncrweb2, category: "Web Screen" }
    //     ],
    //     brochures: [
    //         {
    //             title: "Syncr Product Architecture Guide",
    //             downloadUrl: "#",
    //             previewImg: syncrweb1,
    //             description: "Detailed system architecture, CRM safety features, data handling protocols, and team subscription structures."
    //         }
    //     ]
    // },
    {
        id: "2deal-ecommerce",
        name: "2Deal",
        logo: logo2Deal,
        mainImage: project_2,
        tagline: "A comprehensive online marketplace connecting buyers and sellers.",
        description: "For 2Deal Ecommerce (Malaysia), we ran dynamic social media ad campaigns targeting online consumers, designed custom promotional banners for campaigns and flash sales, and optimized app store descriptions alongside App Store and Google Play promotional creatives.",
        services: ["App Development", "Digital Marketing Ads", "Graphic Design", "Social Media Management"],
        websiteUrl: "https://2deal.my/",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.twodeal.consumer&hl=en_IN",
        appStoreUrl: "https://apps.apple.com/in/app/2deal/id6747821455",
        videos: [
            {
                title: "2Deal Flash Sale Promo Reel",
                videoUrl: "https://player.vimeo.com/external/384761655.sd.mp4?s=38bd50d03534b8c9d2f3cd251cf4402a5c545f47&profile_id=165&oauth2_token_id=57447761",
                duration: "0:20",
                description: "Highly energetic mobile shopping reel highlighting exclusive discounts, vouchers, and secure checkout screens."
            }
        ],
        images: [
            { title: "Discount Promo Graphic", img: ecommerce1, category: "Social Media Post" },
            { title: "App Catalog Navigation View", img: ecommerce2, category: "App Screen" },
            { title: "Secure Checkout Flow Design", img: ecommerce3, category: "App Screen" }
        ],
        brochures: [
            {
                title: "2Deal Merchant Onboarding Handbook",
                downloadUrl: "#",
                previewImg: ecommerce1,
                description: "Sellers guide detailing commission structures, logistics support, payout schedules, and dashboard features."
            }
        ]
    },
    {
        id: "indian-ladies-fashion",
        name: "Indian Ladies Fashion",
        logo: logoILF,
        mainImage: project_3,
        tagline: "Ethnic and contemporary Indian fashion at your fingertips.",
        description: "Indian Ladies Fashion needed to reach ethnic wear shoppers. We ran highly visual shopping campaigns on Meta (Instagram & Facebook Shopping), designed lookbook graphics for holiday catalogs, produced interactive reels showing fabric details, and optimized e-commerce product layouts.",
        services: ["Web Development", "Digital Marketing Ads", "Graphic Design", "Video Editing (Reels)", "E-Commerce Strategy"],
        websiteUrl: "https://indianladiesfashion.com/",

        images: [
            { title: "E-commerce Storefront Mockup", img: indianladiesfashion4, category: "Web Screen" },
            { title: "New Arrivals Collection Banner", img: indianladiesfashion1, category: "Web Screen" },
            { title: "Festive Collection Promo Graphic", img: indianladiesfashion2, category: "Web Screen" },
            { title: "Sizing Guide & Fit Infographic", img: indianladiesfashion3, category: "Web Screen" },
        ],

    },
    {
        id: "dream-villa-makers",
        name: "Dream Villa Makers",
        logo: logoDVM,
        mainImage: project_5,
        tagline: "Building your dream home, one villa at a time.",
        description: "Dream Villa Makers constructs luxury housing spaces. We designed and developed their web portal with integrated virtual tours, created high-quality video walkthroughs, designed high-end print brochures for NRI investors, and managed targeted local search campaigns.",
        services: ["Web Development", "App Development", "Graphic Design", "Video Production", "Brochure Design"],
        websiteUrl: "https://www.dreamvillamakers.com/",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.dvm.dvmapp",
        appStoreUrl: "https://apps.apple.com/in/app/dream-villa-makers/id6755949325",
        videos: [
            {
                title: "Luxury Villa Walkthrough",
                videoUrl: "https://player.vimeo.com/external/355355026.sd.mp4?s=25d978a3c8fb23e59048a17a7e6b0631fb94ff19&profile_id=165&oauth2_token_id=57447761",
                duration: "0:50",
                description: "Beautiful drone and walkthrough video showcasing gated villa community arches, clubhouses, and home interiors."
            }
        ],
        images: [
            { title: "Luxury Villa Exterior Rendering", img: dreamvilla1, category: "App Screen" },
            { title: "Modern Kitchen Layout Render", img: dreamvilla2, category: "App Screen" },
            { title: "Site Layout Interactive Map", img: dreamvilla3, category: "App Screen" },
            { title: "DVM Property Web Portal", img: dvmweb1, category: "Web Screen" },
            { title: "Villa Booking Interface Screen", img: dvmweb2, category: "Web Screen" },
            { title: "Investor Client Portal Dashboard", img: dvmweb3, category: "Web Screen" }
        ],
        // brochures: [
        //     {
        //         title: "DVM Luxury Gated Villas Catalog",
        //         downloadUrl: "#",
        //         previewImg: dreamvilla1,
        //         description: "Exclusive print brochure featuring architectural floor plans, landscaping maps, electrical blueprints, and amenities list."
        //     }
        // ]
    },
    {
        id: "sri-vishakha-fields",
        name: "Sri Vishakha Fields",
        logo: logoSVF,
        mainImage: project_6,
        tagline: "Premium plot bookings and real estate overview.",
        description: "Sri Vishakha Fields features premium gated land plots. We built their interactive plot-status website, designed layout blueprints for sales teams, and ran hyper-targeted regional Facebook and Google lead generation ads.",
        services: ["Web Development", "App Development", "Graphic Design", "Digital Marketing Ads", "Brochure Design"],
        websiteUrl: "https://srivishakhafields.com/",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vishakha.app",
        appStoreUrl: "https://apps.apple.com/us/app/sri-vishakha-fields/id6759153000",
        images: [
            { title: "Interactive Land Layout Screen", img: srivishakha1, category: "Web Screen" },
            { title: "Plot Status Selection Screen", img: srivishakha2, category: "Web Screen" },
            { title: "Project Highlights Infographic", img: srivishakha3, category: "Web Screen" },
            { title: "Plot Dimensions Site Chart", img: srivishakha4, category: "App Screen" },
            { title: "Social Media Campaign Creative", img: srivishakha5, category: "App Screen" },
            { title: "Customer Success Banner Post", img: srivishakha6, category: "App Screen" }
        ],
        // brochures: [
        //     {
        //         title: "Sri Vishakha Layout Map & Plan",
        //         downloadUrl: "#",
        //         previewImg: srivishakha1,
        //         description: "Certified layout maps showing plot sizes, road dimensions, local park allocations, and amenities overview."
        //     }
        // ]
    },
    {
        id: "coimbatore-properties",
        name: "Coimbatore Properties",
        logo: logoCP,
        mainImage: project_7,
        tagline: "Premium plot bookings and real estate overview.",
        description: "For Coimbatore Properties, we created modern lead generation strategies, built their landing pages, designed Google ad creatives, and crafted high-quality property print brochures to distribute to walk-in investors.",
        services: ["Web Development", "App Development", "Graphic Design", "Digital Marketing Ads", "Brochure Design"],
        websiteUrl: "https://coimbatoreproperties.org/",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.cpapp.prop&hl=en_IN",
        appStoreUrl: "https://apps.apple.com/in/app/coimbatore-properties/id6741788886",
        videos: [],
        images: [
            { title: "Properties Search Portal", img: coimbatoreproperties1, category: "Web Screen" },
            { title: "Mobile App Real Estate Listings", img: coimbatoreproperties2, category: "App Screen" },
            { title: "Lead Form Screen", img: coimbatoreproperties3, category: "Web Screen" }
        ],
        brochures: [
            {
                title: "Coimbatore Properties Layout Brochure",
                downloadUrl: "#",
                previewImg: coimbatoreproperties1,
                description: "Print brochure presenting commercial layouts, residential land plots, pricing charts, and guidelines."
            }
        ]
    },
    {
        id: "ananya-homes",
        name: "Ananya Homes",
        logo: logoAnanya,
        mainImage: logoAnanya,
        tagline: "Event management and planning services.",
        description: "Ananya Homes is an event management company that specializes in planning and organizing various events. We provide comprehensive event management services including event planning, event coordination, and event promotion.",
        services: ["Graphic Design", "Social Media Marketing", "Brochure Design", "Web Development"],
        websiteUrl: "https://www.ananyahomes.com/",
        videos: [],
        images: [
            { title: "Banner Screens", img: ah1, category: "Web Screen" },
            { title: "Property Screens", img: ah2, category: "Web Screen" },
            { title: "About", img: ah3, category: "Web Screen" },
        ],
        brochures: []
    }
];
