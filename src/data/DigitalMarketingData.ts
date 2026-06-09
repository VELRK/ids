import { StaticImageData } from "next/image"

// Import client logos
import logoILF from "@/assets/img/logo_images/ilf.jpg"
import logoMMH from "@/assets/img/logo_images/mmh.jpeg"
import logoCP from "@/assets/img/logo_images/cp.jpeg"
import logoDVM from "@/assets/img/logo_images/dvm.png"
import logoSVF from "@/assets/img/logo_images/svf.jpeg"
import logoAnanya from "@/assets/img/logo_images/ah.png"
import logoAishwariyams from "@/assets/img/logo_images/sa.jpeg"

// Import project screenshots
import mmh1 from "@/assets/img/home-1/digital_marketing/mmh/mmh1.jpeg"
import mmh3 from "@/assets/img/home-1/digital_marketing/mmh/mmh3.jpeg"
import mmh4 from "@/assets/img/home-1/digital_marketing/mmh/mmh4.jpeg"
import mmh5 from "@/assets/img/home-1/digital_marketing/mmh/mmh5.jpeg"
import mmh6 from "@/assets/img/home-1/digital_marketing/mmh/mmh6.jpeg"
import mmh7 from "@/assets/img/home-1/digital_marketing/mmh/mmh7.jpeg"

import cocobliss1 from "@/assets/img/home-1/digital_marketing/mmh/mmh.png"
import iva1 from "@/assets/img/home-1/digital_marketing/mmh/iva.png"

//Aishwariyam

import aish1 from "@/assets/img/home-1/digital_marketing/aish/1.jpeg"
import aish2 from "@/assets/img/home-1/digital_marketing/aish/2.jpeg"
import aish3 from "@/assets/img/home-1/digital_marketing/aish/3.jpeg"
import aish4 from "@/assets/img/home-1/digital_marketing/aish/4.jpeg"
import aish5 from "@/assets/img/home-1/digital_marketing/aish/5.jpeg"
import aish6 from "@/assets/img/home-1/digital_marketing/aish/6.jpeg"

//Dreamvilla

import dreamvilla1 from "@/assets/img/home-1/digital_marketing/dvm/dvm1.jpeg"
import dreamvilla2 from "@/assets/img/home-1/digital_marketing/dvm/dvm2.jpeg"
import dreamvilla3 from "@/assets/img/home-1/digital_marketing/dvm/dvm3.jpeg"
import dreamvilla4 from "@/assets/img/home-1/digital_marketing/dvm/dvm4.jpeg"
import dreamvilla5 from "@/assets/img/home-1/digital_marketing/dvm/dvm5.jpeg"
import dreamvilla6 from "@/assets/img/home-1/digital_marketing/dvm/dvm6.jpeg"
import dreamvilla7 from "@/assets/img/home-1/digital_marketing/dvm/dvm7.jpeg"
import dreamvilla8 from "@/assets/img/home-1/digital_marketing/dvm/dvm8.jpeg"
import dreamvilla9 from "@/assets/img/home-1/digital_marketing/dvm/dvm9.jpeg"


import ah01 from "@/assets/img/home-1/digital_marketing/ah/1.jpeg"
import ah02 from "@/assets/img/home-1/digital_marketing/ah/2.jpeg"
import ah03 from "@/assets/img/home-1/digital_marketing/ah/3.jpeg"
import ah04 from "@/assets/img/home-1/digital_marketing/ah/4.jpeg"
import ah05 from "@/assets/img/home-1/digital_marketing/ah/5.jpeg"
import ah06 from "@/assets/img/home-1/digital_marketing/ah/6.jpeg"

//ILF posters

import ilf1 from "@/assets/img/home-1/digital_marketing/ilf/1.jpeg"
import ilf2 from "@/assets/img/home-1/digital_marketing/ilf/2.jpeg"
import ilf3 from "@/assets/img/home-1/digital_marketing/ilf/3.jpeg"
import ilf4 from "@/assets/img/home-1/digital_marketing/ilf/4.jpeg"
import ilf5 from "@/assets/img/home-1/digital_marketing/ilf/5.jpeg"
import ilf6 from "@/assets/img/home-1/digital_marketing/ilf/6.jpeg"
import ilf7 from "@/assets/img/home-1/digital_marketing/ilf/7.jpeg"
import ilf8 from "@/assets/img/home-1/digital_marketing/ilf/8.jpeg"
import ilf9 from "@/assets/img/home-1/digital_marketing/ilf/9.jpeg"
import ilf10 from "@/assets/img/home-1/digital_marketing/ilf/10.jpeg"
import ilf11 from "@/assets/img/home-1/digital_marketing/ilf/11.jpeg"
import ilf12 from "@/assets/img/home-1/digital_marketing/ilf/12.jpeg"
import ilf13 from "@/assets/img/home-1/digital_marketing/ilf/13.jpeg"
import ilf14 from "@/assets/img/home-1/digital_marketing/ilf/14.jpeg"
import ilf15 from "@/assets/img/home-1/digital_marketing/ilf/15.jpeg"
import ilf16 from "@/assets/img/home-1/digital_marketing/ilf/16.jpeg"
import ilf17 from "@/assets/img/home-1/digital_marketing/ilf/17.jpeg"
import ilf18 from "@/assets/img/home-1/digital_marketing/ilf/18.jpeg"
import ilf19 from "@/assets/img/home-1/digital_marketing/ilf/19.jpeg"

import svf01 from "@/assets/img/home-1/digital_marketing/svf/1.jpeg"
import svf02 from "@/assets/img/home-1/digital_marketing/svf/2.jpeg"
import svf03 from "@/assets/img/home-1/digital_marketing/svf/3.jpeg"
import svf04 from "@/assets/img/home-1/digital_marketing/svf/4.jpeg"
import svf05 from "@/assets/img/home-1/digital_marketing/svf/5.jpeg"
import svf06 from "@/assets/img/home-1/digital_marketing/svf/6.jpeg"



import coimbatoreproperties1 from "@/assets/img/inner-page/cp1.png"

import project_2 from "@/assets/img/home-1/digital_marketing/dm2.png"
import project_3 from "@/assets/img/home-1/digital_marketing/dm3.png"
import project_4 from "@/assets/img/home-1/digital_marketing/dm.png"
import project_5 from "@/assets/img/home-1/digital_marketing/dm4.png"
import project_6 from "@/assets/img/home-1/digital_marketing/dm5.png"
import project_7 from "@/assets/img/home-1/digital_marketing/dm6.png"
import project_8 from "@/assets/img/home-1/digital_marketing/dm7.png"

//Coimbatore Properties
import cp2 from "@/assets/img/home-1/digital_marketing/cp/2.jpeg"
import cp4 from "@/assets/img/home-1/digital_marketing/cp/4.jpeg"
import cp5 from "@/assets/img/home-1/digital_marketing/cp/5.jpeg"


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
    videos?: CompanyDeliverableVideo[];
    images?: CompanyDeliverableImage[];
    brochures?: CompanyDeliverableBrochure[];
    websiteUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
}


export const clientCompaniesWork: ClientCompanyWork[] = [
    {
        id: "make-my-homes",
        name: "Make My Homes",
        logo: logoMMH,
        mainImage: project_4,
        tagline: "Premium plot bookings and real estate overview.",
        description: `Make My Homes is a premier real estate brand specializing in premium DTCP-approved plots, luxury villas, and gated communities across prime locations like Coimbatore and Sathy NH. They are dedicated to helping families and investors find their perfect home or investment property with transparent and secure real estate transactions.

To elevate their online presence and drive high-quality property inquiries, we implemented a comprehensive digital marketing strategy. This included highly-targeted performance advertising across Meta and Google, dynamic social media management, and the creation of visually stunning video reels showcasing luxury villa walkthroughs and site developments. Furthermore, our team designed premium print brochures, optimized their digital platforms through dedicated web and app development, and engaged prospective buyers with compelling graphic design.

As a result, Make My Homes experienced a significant surge in brand visibility, successfully launching multiple site projects, accelerating property bookings, and building a trusted community of prospective homeowners.`,
        services: ["Web Development", "App Development", "Digital Marketing Ads", "Graphic Design", "Video Editing (Reels)", "Brochure Design"],
        videos: [
            {
                title: "Luxury Villa Tour Reel",
                videoUrl: "https://youtu.be/69UFf6_rpwg?si=YXjsZ2ZMrkfY4HFD",
                duration: "6:25",
                description: "Short Instagram Reel showcasing the interior layout, finishes, and premium specifications of a completed villa."
            },
            {
                title: "Site Launch Event Promo",
                videoUrl: "https://youtu.be/vJfCtio1TK4?si=2_KZRRo9f2JlteSR",
                duration: "5:30",
                description: "Stunning aerial drone walkthrough detailing the project layout, main gate arches, and ready-to-build roads."
            },
            {
                title: "Exclusive Villa interiors",
                videoUrl: "https://youtu.be/NJP9agrznKM?si=K3B2E-UtbCOO9JqX",
                duration: "3:36",
                description: "Interior design and interior architecture showcase of a 3BHK villa including living room, dinning area, bedrooms, kitchen, and more."
            },
            {
                title: "Premium 3BHK Villa Tour",
                videoUrl: "https://youtu.be/0MQnyEEVMoE?si=H_xWFFcQGPMSqELz",
                duration: "3:00",
                description: "Low Budget DTCP Plots near Annur-Sirumugai | 2.75 Cents Just ₹7 Lakhs | Diwali Offer ₹50,000 Gifts."
            },
            {
                title: "3BHK Villa in Vadavalli | 40’ Road",
                videoUrl: "https://youtu.be/g3Zym47bQlY?si=pirwTfdgO-eNgJyp",
                duration: "1:55",
                description: "Aadi Offer Alert: Premium DTCP Plots @ ₹4.75L Onwards| Near Sathy NH, Coimbatore | Don’t Miss Out!"
            },
            {
                title: "",
                videoUrl: "https://youtu.be/69UFf6_rpwg?si=YXjsZ2ZMrkfY4HFD",
                duration: "1:00",
                description: "Short Instagram Reel showcasing the interior layout, finishes, and premium specifications of a completed villa."
            },
            {
                title: "Premium DTCP Plots & Villas Near Sathy NH – Just 2 KM from Highway! | Coimbatore | Best Investment",
                videoUrl: "https://youtu.be/qSj2EG4nIP8?si=gDXtB2XpPRJqY9F9",
                duration: "1:55",
                description: "Premium DTCP Plots & Villas Near Sathy NH – Just 2 KM from Highway! | Coimbatore | Best Investment."
            },
            {
                title: "100 % Complete & Ready DTCP Plots | Mettupalayam Road | Sathy NH Junction | 2 KM from Highway",
                videoUrl: "https://youtu.be/TIYA2Sfh6-4?si=uaVO9uKeAz_tVSsQ",
                duration: "2:52",
                description: "100 % Complete & Ready DTCP Plots | Mettupalayam Road | Sathy NH Junction | 2 KM from Highway"
            }
        ],
        images: [
            { title: "Real Estate Social Post", img: mmh1, category: "Social Media Post" },
            { title: "Real Estate Social Post", img: mmh3, category: "Social Media Post" },
            { title: "Real Estate Social Post", img: mmh4, category: "Social Media Post" },
            { title: "Real Estate Social Post", img: mmh5, category: "Social Media Post" },
            { title: "Real Estate Social Post", img: mmh6, category: "Social Media Post" },
            { title: "Real Estate Social Post", img: mmh7, category: "Social Media Post" }
        ],
        brochures: [
            {
                title: "Coco Bliss Brochure",
                downloadUrl: "/assets/pdf/Coco Bliss Brouchre(reworL).pdf",
                previewImg: cocobliss1,
                description: "Click to view details of the project Coco Bliss: Gated community with premium DTCP-approved plots in Karamadai, Coimbatore, offering tranquil living within a secure, family-friendly environment. "
            },
            {
                title: "Iva Brochure",
                downloadUrl: "/assets/pdf/Iva Broucher.pdf",
                previewImg: iva1,
                description: "Click to view details of the project Iva: Gated community with premium DTCP-approved plots."
            }
        ]
    },
    {
        id: "dream-villa-makers",
        name: "Dream Villa Makers",
        logo: logoDVM,
        mainImage: project_5,
        tagline: "Building your dream home, one villa at a time.",
        description: `Dream Villa Makers stands out as a trusted name in luxury residential development, dedicated to crafting dream homes with exquisite architectural details, modern amenities, and secure gated community features. From premium villas to highly sought-after DTCP-approved plots, they focus on delivering high-quality living experiences that exceed customer expectations.

To capture the essence of their premium properties and drive highly qualified real estate leads, we executed a highly targeted digital marketing strategy. Our approach heavily utilized high-end video production, creating immersive drone and walkthrough reels that highlighted luxurious home interiors and expansive community landscapes. Combined with data-driven social media ad campaigns, we were able to reach discerning home buyers and investors.

Beyond performance marketing, our team provided end-to-end creative support including custom web and app development, sleek graphic designs, and professional brochure designs. This integrated digital presence significantly amplified their brand authority, maximized property inquiries, and accelerated sales across their premium residential projects.`,
        services: ["Web Development", "App Development", "Graphic Design", "Video Production", "Brochure Design"],
        videos: [
            {
                title: "Luxury Villa Walkthrough",
                videoUrl: "https://youtu.be/20vMiwzIO5s?si=WDEGDCMN1UGRPqe2",
                duration: "3:50",
                description: "Beautiful drone and walkthrough video showcasing gated villa community arches, clubhouses, and home interiors."
            },
            {
                title: "Aishwaryam Grande🌟 DTCP RERA approved plots @ just 5.65L per cent 😮! Land for sale in Coimbatore",
                videoUrl: "https://youtu.be/awT_XppZoPo?si=0-Ng7jQRqu8t9kML",
                duration: "1:00",
                description: "Aishwaryam Grande🌟 DTCP RERA approved plots @ just 5.65L per cent 😮! Land for sale in Coimbatore "
            }
        ],
        images: [
            { title: "Luxury Villa Exterior Rendering", img: dreamvilla1, category: "Social Media Post" },
            { title: "Modern Kitchen Layout Render", img: dreamvilla2, category: "Social Media Post" },
            { title: "Site Layout Interactive Map", img: dreamvilla3, category: "Social Media Post" },
            { title: "Luxury Villa Exterior Rendering", img: dreamvilla4, category: "Social Media Post" },
            { title: "Premium Amenities", img: dreamvilla5, category: "Social Media Post" },
            { title: "Posted Ad", img: dreamvilla6, category: "Social Media Post" },
            { title: "Posted Ad", img: dreamvilla7, category: "Social Media Post" },
            { title: "Posted Ad", img: dreamvilla8, category: "Social Media Post" },
            { title: "Posted Ad", img: dreamvilla9, category: "Social Media Post" },

        ],

    },
    {
        id: "sri-vishakha-fields-new",
        name: "Sri Vishakha fields",
        logo: logoSVF,
        mainImage: project_6,
        tagline: "Ready DTCP plots for Sale in Coimbatore at affordable prices!",
        description: `Sri Vishakha Fields is a prominent real estate developer offering ready-to-build, DTCP and RERA approved plots in highly desirable locations across Coimbatore. With projects like "The Oak Tree" and "The Garden City," they provide affordable, premium gated communities that cater to both families looking for their dream home and investors seeking long-term value.

To maximize their project visibility and accelerate plot sales, we developed a comprehensive, multi-channel digital marketing strategy. We deployed highly optimized lead generation campaigns across digital platforms, driving substantial traffic from prospective buyers. Our creative team produced engaging video tutorials and cinematic site walkthroughs that effectively showcased the ready-to-build infrastructure, wide roads, and premium amenities of their gated communities.

In addition to performance marketing, we completely revamped their online presence with custom web and app development, ensuring a seamless property browsing experience. Coupled with eye-catching graphic design for social media and advertising, our integrated efforts established Sri Vishakha Fields as a top choice for affordable, secure real estate investments in the region.`,
        services: ["Web Development", "App Development", "Digital Marketing", "Graphic Design", "Video Tutorials"],
        videos: [
            {
                title: "The Oak Tree – Premium Gated Community",
                videoUrl: "https://youtu.be/9it5NsXMVeA?si=uA66paMf5JWgDHLr",
                duration: "1:00",
                description: "The Oak Tree – Premium Gated Community with DTCP Approved plots and 3 BHK Villas at affordable prices"
            },
            {
                title: "The Garden City – Kovilpalayam | Gated Community DTCP & RERA Plots",
                videoUrl: "https://youtu.be/vPY6EaXJuDU?si=gQyGL2EncS_Xy8u9",
                duration: "1:07",
                description: "The Garden City – Kovilpalayam | Gated Community DTCP & RERA Plots | 40’ Road"
            }
        ],
        images: [
            { title: "Posted Ad", img: svf01, category: "Social Media Post" },
            { title: "Posted Ad", img: svf02, category: "Social Media Post" },
            { title: "Posted Ad", img: svf03, category: "Social Media Post" },
            { title: "Posted Ad", img: svf04, category: "Social Media Post" },
            { title: "Posted Ad", img: svf05, category: "Social Media Post" },
            { title: "Posted Ad", img: svf06, category: "Social Media Post" },
        ],
    },
    {
        id: "sri-aishwariyams",
        name: "SRI AISHWARIYAM",
        logo: logoAishwariyams,
        mainImage: project_8,
        tagline: "1 Crore+ Product Sales Achieved Through Trusted Natural Wellness & Powerful Digital Marketing",
        description: `SRI AISHWARIYAM has emerged as a trusted name in natural wellness, helping people embrace healthier lifestyles through carefully crafted herbal and organic products. Built on the belief of "Organic Healing, No Side Effects, Nature's Way to Wellness," the brand has successfully connected with customers seeking safe, natural, and effective wellness solutions.

Through a comprehensive digital marketing strategy that included social media marketing, performance advertising, content creation, brand awareness campaigns, customer engagement initiatives, and lead generation activities, SRI AISHWARIYAM achieved a remarkable milestone of ₹1 Crore + in product sales.Our digital- first approach strengthened brand visibility, increased customer trust, expanded market reach, and drove consistent revenue growth across multiple online channels.

From creating compelling brand stories and high - converting creatives to managing targeted advertising campaigns and customer engagement strategies, we helped transform SRI AISHWARIYAM into a recognized wellness brand with a growing customer community.The success reflects the perfect combination of quality products, strategic marketing, and data - driven campaign optimization.`,
        services: ["Digital Marketing Ads", "Graphic Design", "Social Media Management"],

        images: [
            { title: "Posted Ad", img: aish1, category: "Social Media Post" },
            { title: "Posted Ad", img: aish2, category: "Social Media Post" },
            { title: "Posted Ad", img: aish3, category: "Social Media Post" },
            { title: "Posted Ad", img: aish4, category: "Social Media Post" },
            { title: "Posted Ad", img: aish5, category: "Social Media Post" },
            { title: "Posted Ad", img: aish6, category: "Social Media Post" },

        ],

    },
    {
        id: "indian-ladies-fashion",
        name: "Indian Ladies Fashion",
        logo: logoILF,
        mainImage: project_3,
        tagline: "Ethnic and contemporary Indian fashion at your fingertips.",
        description: `Indian Ladies Fashion is a premier destination for ethnic and contemporary clothing, bringing the rich heritage and modern elegance of Indian fashion directly to consumers. They offer a meticulously curated collection that appeals to women seeking high-quality, culturally authentic, and stylish apparel for everyday wear and special occasions.

To scale their retail operations and build a dominant online presence, we implemented a robust e-commerce and digital marketing strategy. Our campaigns heavily leveraged Meta Ads and targeted social media marketing, producing highly engaging visual content and short-form video reels that resonated with their target audience. Our custom graphic design team developed stunning poster ads and promotional creatives that highlighted their unique collections and seasonal offers.

Through the seamless integration of custom web development and an aggressive performance marketing approach, we significantly increased their online sales and website traffic. This end-to-end digital transformation not only boosted immediate revenue but also fostered long-term brand loyalty within the highly competitive online fashion market.`,
        services: ["Web Development", "Digital Marketing Ads", "Graphic Design", "Video Editing (Reels)", "E-Commerce Strategy"],

        images: [
            { title: "Poster Ads", img: ilf1, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf2, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf3, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf4, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf5, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf6, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf7, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf8, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf9, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf10, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf11, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf12, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf13, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf14, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf15, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf16, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf17, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf18, category: "Social Media Post" },
            { title: "Poster Ads", img: ilf19, category: "Social Media Post" },
        ],

    },
    {
        id: "coimbatore-properties",
        name: "Coimbatore Properties",
        logo: logoCP,
        mainImage: project_7,
        tagline: "Premium plot bookings and real estate overview.",
        description: `Coimbatore Properties is a premier real estate investment firm specializing in high-growth locations across Coimbatore. With a curated selection of DTCP-approved plots in prime areas such as Saravanampatti and Kovilpalayam, they provide investors with secure, well-planned communities featuring wide roads and essential amenities.

To capitalize on the increasing demand for quality real estate, we implemented a comprehensive, multi-channel digital marketing strategy. Our primary focus was on high-intent lead generation through performance advertising campaigns, ensuring that every prospective buyer found their way to Coimbatore Properties.

To support their sales team and enhance investor confidence, we designed a suite of professional marketing collateral. This included visually striking Google ad creatives that captured attention online, as well as premium, detailed print brochures that served as essential resources for walk-in investors.

Through this integrated approach, we successfully amplified their market reach, increased qualified leads, and accelerated property transactions, solidifying Coimbatore Properties' position as a trusted real estate partner.`,
        services: ["Web Development", "App Development", "Graphic Design", "Digital Marketing Ads", "Brochure Design"],
        videos: [
            {
                title: "Saravanampatti - Kurumbapalayam, 100 Mtrs From Sathy Main Road, Premium DTCP Plots & Villas",
                videoUrl: "https://youtu.be/xUzFCFf9Kgc?si=AzohdsrDSM5NFxcT",
                duration: "2:55",
                description: "Saravanampatti - Kurumbapalayam, 100 Mtrs From Sathy Main Road, Premium DTCP Plots & Villas"
            },
            {
                title: "Saravanampatti - Kovilpalayam, Premium DTCP Plots & Villas, Gated Community Layout",
                videoUrl: "https://youtu.be/YXGjpWL2CFU?si=XixUOdY2J43RS6wV",
                duration: "2:00",
                description: "Saravanampatti - Kovilpalayam, Premium DTCP Plots & Villas, Gated Community Layout"
            },
            {
                title: "Shorts | Saravanampatti - Kurumbapalayam | 100 mtrs From Sathy NH",
                videoUrl: "https://youtube.com/shorts/vXzpIxPSHas?si=R1qUI-hej0ljRrIB",
                duration: "0:26",
                description: "Saravanampatti - Kurumbapalayam, 100 mtrs From Sathy NH, Premium Dtcp Plots & Villas For Sale"
            }
        ],
        images: [
            { title: "Coimbatore Properties Layout", img: cp2, category: "Graphic Design" },
            { title: "Coimbatore Properties Layout", img: cp4, category: "Graphic Design" },
            { title: "Coimbatore Properties Layout", img: cp5, category: "Graphic Design" },

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
        description: `Ananya Homes is a distinguished event management company based in Coimbatore, specializing in crafting exceptional, tailor-made experiences for a wide range of events. Their services encompass both private celebrations and corporate gatherings, ensuring every occasion is executed with precision, creativity, and attention to detail.

To elevate their brand presence and connect with a broader audience, we implemented a dynamic digital marketing strategy. This included developing engaging social media campaigns and producing eye-catching graphic designs that highlighted the quality and uniqueness of their event planning services. Additionally, we created professional web and mobile app interfaces that streamlined the process for clients to discover and book their event solutions.

Through a combination of targeted digital promotion and polished creative assets, we successfully increased Ananya Homes' visibility, generated valuable leads, and reinforced their reputation as a premier event management partner in Coimbatore.`,
        services: ["Graphic Design", "Social Media Marketing", "Brochure Design", "Web Development"],
        videos: [
            {
                title: "ROYAL VARISHTAA | Premium DTCP Plots",
                videoUrl: "https://youtube.com/shorts/m8-g64PSCS8?si=pQAFvVh0_QcmMWeO",
                duration: "0:20",
                description: "ROYAL VARISHTAA | Premium DTCP Plots"
            }
        ],
        images: [
            {
                title: "Poster Ads", img: ah01, category: "Social Media Post"
            },
            {
                title: "Poster Ads", img: ah02, category: "Social Media Post"
            },
            {
                title: "Poster Ads", img: ah03, category: "Social Media Post"
            },
            {
                title: "Poster Ads", img: ah04, category: "Social Media Post"
            },
            {
                title: "Poster Ads", img: ah05, category: "Social Media Post"
            },
            {
                title: "Poster Ads", img: ah06, category: "Social Media Post"
            }
        ],
        brochures: []
    }
];
