import { StaticImageData } from "next/image";

import project_1 from "@/assets/img/home-1/ourProjects/mock-1.png"
import project_2 from "@/assets/img/home-1/ourProjects/mock-2.png"
import project_3 from "@/assets/img/home-1/ourProjects/mock-3.png"
import project_4 from "@/assets/img/home-1/ourProjects/mock-4.png"
import project_5 from "@/assets/img/home-1/ourProjects/mock-5.png"
import project_6 from "@/assets/img/home-1/ourProjects/mock-6.png"
import project_7 from "@/assets/img/home-1/ourProjects/mock-7.png"
import project_8 from "@/assets/img/home-1/ourProjects/mmh.png"

//ids logo
import idslogo from "@/assets/img/inner-page/ids.png"
import { clientCompaniesWork } from "./DigitalMarketingData";

//logos
import syncrlogo from "@/assets/img/logo_images/syncr.png"
import mmhlogo from "@/assets/img/logo_images/mmh.jpeg"
import twodeallogo from "@/assets/img/logo_images/2deal.png"
import ilflogo from "@/assets/img/logo_images/ilf.jpg"
import cplogo from "@/assets/img/logo_images/cp.jpeg"
import dvmlogo from "@/assets/img/logo_images/dvm.png"
import svflogo from "@/assets/img/logo_images/svf.jpeg"

// Detail page images
import details_banner from "@/assets/img/inner-page/project-details-01.jpg"
import details_gallery_1 from "@/assets/img/inner-page/project-details-02.jpg"
import details_gallery_2 from "@/assets/img/inner-page/project-details-03.jpg"
import details_gallery_3 from "@/assets/img/inner-page/project-details-04.jpg"
import details_sidebar from "@/assets/img/inner-page/service-details-2.jpg"
// syncr
import syncr1 from "@/assets/img/inner-page/syncr-1.jpeg"
import syncr2 from "@/assets/img/inner-page/syncr-2.jpeg"
import syncr3 from "@/assets/img/inner-page/syncr-3.jpeg"
//Sri Vishakha Fields
import srivishakha1 from "@/assets/img/inner-page/srivishakha-1.png"
import srivishakha2 from "@/assets/img/inner-page/srivishakha-2.png"
import srivishakha3 from "@/assets/img/inner-page/srivishakha-3.png"
import srivishakha4 from "@/assets/img/inner-page/vf1.jpeg"
import srivishakha5 from "@/assets/img/inner-page/vf2.jpeg"
import srivishakha6 from "@/assets/img/inner-page/vf3.jpeg"

//2Deal Ecommerce
import ecommerce1 from "@/assets/img/inner-page/2deal-1.jpeg"
import ecommerce2 from "@/assets/img/inner-page/2deal-2.jpeg"
import ecommerce3 from "@/assets/img/inner-page/2deal-3.jpeg"

//Indian Ladies Fashion
import indianladiesfashion1 from "@/assets/img/inner-page/indian-ladies-fashion-1.png"
import indianladiesfashion2 from "@/assets/img/inner-page/indian-ladies-fashion-2.png"
import indianladiesfashion3 from "@/assets/img/inner-page/indian-ladies-fashion-3.png"
import indianladiesfashion4 from "@/assets/img/inner-page/indian-ladies-fashion-4.png"

//Syncr Web
import syncrweb1 from "@/assets/img/inner-page/syncr-web-1.png"
import syncrweb2 from "@/assets/img/inner-page/syncr-web-2.png"


//Dream Villa
import dreamvilla1 from "@/assets/img/inner-page/dvm1.jpeg"
import dreamvilla2 from "@/assets/img/inner-page/dvm2.jpeg"
import dreamvilla3 from "@/assets/img/inner-page/dvm3.jpeg"
import dvmweb1 from "@/assets/img/inner-page/dvmweb1.png"
import dvmweb2 from "@/assets/img/inner-page/dvmweb2.png"
import dvmweb3 from "@/assets/img/inner-page/dvmweb3.png"

//Coimbatore Properties
import coimbatoreproperties1 from "@/assets/img/inner-page/cp1.png"
import coimbatoreproperties2 from "@/assets/img/inner-page/cp2.png"
import coimbatoreproperties3 from "@/assets/img/inner-page/cp3.png"

//mmh
import mmh1 from "@/assets/img/inner-page/mmh1.jpeg"
import mmh2 from "@/assets/img/inner-page/mmh2.jpeg"
import mmh3 from "@/assets/img/inner-page/mmh3.jpeg"
import mmh4 from "@/assets/img/inner-page/mmhw1.png"
import mmh5 from "@/assets/img/inner-page/mmhw2.png"
import mmh6 from "@/assets/img/inner-page/mmhw3.png"


export interface MethodologyCard {
    title: string;
    desc: string;
    icon: string;
    grad: string;
    iconColor: string;
}

export interface DataType {
    id: number;
    page: string;
    thumb: StaticImageData;
    title: string;
    category: string[];
    projectType: "development" | "digital-marketing";
    data_delay?: string;
    description: string;
    client: string;
    location: string;
    sector: string;
    date: string;
    detailsThumb: StaticImageData;
    sidebarThumb: StaticImageData;
    gallery: StaticImageData[];
    coreFeatures?: string[];
    methodologyCards?: MethodologyCard[];
    projectLink?: string;
    appStoreLink?: string;
    playStoreLink?: string;
    badgeText?: string;
    testimony?: string;
    tagline?: string;
    cardBg?: string;
    cardLogoBg?: string;
    cardLogoText?: string;
    logo?: StaticImageData;
}

export const defaultCoreFeatures = [
    "Sleek & intuitive user interface design",
    "Cross-platform compatibility (iOS & Android)",
    "Real-time data synchronization & push notifications",
    "Robust end-to-end encryption and security protocols",
    "Highly optimized offline-first capability",
    "Seamless third-party API and payment integrations"
];

// Syncr features
const syncrFeatures = [
    "Lead scoring and grading system to prioritize follow-ups",
    "AI-powered insights and predictive analytics",
    "Automated email and Whatsapp campaign management",
    "Comprehensive sales pipeline and deal tracking",
    "Real-time performance dashboards and reporting"
];
// Sri vishakha features
const srivishakhaFeatures = [
    "Intuitive Property Discovery Interface",
    "Interactive Google Maps Integration for Plot Locations",
    "High-Quality Visual Galleries with Image Zoom",
    "Detailed Project Specification & Amenities Display",
    "Integrated Enquiry & Contact Form"
];

//mmh features
const mmhFeatures = [
    "Plot Discovery Interface with Google Maps Integration",
    "Property Showcase with Image Zoom",
    "Amenities & Highlights Display",
    "Enquiry Form & Contact Integration"
];

// 2Deal Ecommerce App features
const ecommerceFeatures = [
    "Robust User Authentication: Secure registration and login with multi-factor authentication support.",
    "Product Catalog Management: Dynamic product listing with detailed descriptions, images, and pricing.",
    "Advanced Search & Filtering: Faceted search capabilities to help users find products quickly and efficiently.",
    "Shopping Cart Functionality: Persistent shopping cart with real-time quantity updates and stock level checks.",
    "Secure Checkout Process: End-to-end encrypted payment gateway integration supporting multiple payment methods.",
    "Order Management System: Comprehensive dashboard for sellers to track orders, manage inventory, and process shipments.",
    "User Reviews & Ratings: Community-driven feedback system to build trust and credibility.",
    "Recommendation Engine: AI-powered product recommendations based on user behavior and purchase history.",
    "Responsive Design: Seamless experience across desktop, tablet, and mobile devices.",
    "Admin Control Panel: Full-featured backend for platform administration, user management, and content moderation.",
    "Promotions & Discount Engine: Flexible system to create and manage discounts, coupons, and promotional offers.",
    "Real-time Notifications: Push notifications for order updates, shipping status, and new messages.",
    "Multi-language Support: Built-in localization capabilities for global reach.",
    "Scalable Architecture: Cloud-native infrastructure designed to handle high traffic volumes and transactions."
];

//Indian Ladies Fashion features
const indianLadiesFashionFeatures = [

    "Curated Collection: Handpicked selection of ethnic and contemporary Indian wear for women.",
    "Size & Fit Customization: Flexible sizing options including custom tailoring to ensure perfect fit.",
    "Detailed Product Showcase: High-resolution images with 360° views and zoom functionality to highlight fabric and craftsmanship.",
    "Wishlist & Favorites: Users can save items for later and create personalized wishlists.",
    "Secure Payments: Integrated secure payment gateway supporting multiple payment methods including UPI, credit/debit cards, and net banking.",
    "Order Tracking: Real-time order tracking and status updates from order placement to delivery.",
    "Easy Returns & Exchanges: Hassle-free return and exchange policy with transparent communication.",
    "Customer Support: Dedicated customer support through chat, email, and phone for assistance with orders and product inquiries.",
    "Wishlist & Favorites: Users can save items for later and create personalized wishlists.",

];
//make my home methodology cards
const makeMyHomeMethodologyCards: MethodologyCard[] = [
    {
        title: "Plot Discovery Interface",
        desc: "User-friendly interface for browsing and searching plots.",
        icon: "fa-solid fa-search",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Property Showcase with Image Zoom",
        desc: "Showcase your plots with high-quality images and interactive zoom functionality.",
        icon: "fa-solid fa-image",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Amenities & Highlights Display",
        desc: "Highlight key amenities, features, and unique selling points of your plots to attract potential buyers.",
        icon: "fa-solid fa-file-alt",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Contact Form & Call-to-Action",
        desc: "Provide a seamless way for interested buyers to contact you directly from the website.",
        icon: "fa-solid fa-envelope",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    },
    {
        title: "Integrated Enquiry Form",
        desc: "Streamline the enquiry process with a simple, user-friendly form.",
        icon: "fa-solid fa-envelope",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#576b28ff"
    },
    {
        title: "Project Details & Specifications",
        desc: "Provide comprehensive details about each plot, including size, location, pricing, and other specifications to help buyers make informed decisions.",
        icon: "fa-solid fa-file-alt",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    }
];
//Indian Ladies Fashion Methodology Cards
const indianLadiesFashionMethodologyCards: MethodologyCard[] = [
    {
        title: "Intuitive Product Discovery Interface",
        desc: "User-friendly interface for browsing and searching products.",
        icon: "fa-solid fa-search",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "High-Quality Visual Galleries",
        desc: "High-quality visual galleries with zoom functionality.",
        icon: "fa-solid fa-image",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Detailed Product Specification",
        desc: "Detailed product specification & amenities display.",
        icon: "fa-solid fa-file-alt",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Integrated Enquiry Form",
        desc: "Integrated enquiry form for easy contact.",
        icon: "fa-solid fa-envelope",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];


// 2Deal Ecommerce App Methodology Cards
const ecommerceMethodologyCards: MethodologyCard[] = [
    {
        title: "Robust User Authentication",
        desc: "Secure registration and login with multi-factor authentication support.",
        icon: "fa-solid fa-user",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Product Catalog Management",
        desc: "Dynamic product listing with detailed descriptions, images, and pricing.",
        icon: "fa-solid fa-box",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Advanced Search & Filtering",
        desc: "Faceted search capabilities to help users find products quickly and efficiently.",
        icon: "fa-solid fa-search",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Shopping Cart Functionality",
        desc: "Persistent shopping cart with real-time quantity updates and stock level checks.",
        icon: "fa-solid fa-cart-shopping",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];

//  defaultMethodologyCards
const defaultMethodologyCards: MethodologyCard[] = [
    {
        title: "Agile Development Cycles",
        desc: "Fast, iterative sprints ensuring quick feature delivery and continuous feedback loops.",
        icon: "fa-solid fa-arrows-spin",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Rigorous Code Quality",
        desc: "Automated linting, comprehensive testing, and strict peer code reviews for maximum stability.",
        icon: "fa-solid fa-code-compare",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Security By Design",
        desc: "End-to-end encryption, strict user authorization layers, and periodic vulnerability scans.",
        icon: "fa-solid fa-shield-halved",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "High Performance Architecture",
        desc: "Lightweight build frameworks, intelligent data caching, and optimized API latency.",
        icon: "fa-solid fa-gauge-high",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];

// Syncr features
const syncrMethodologyCards: MethodologyCard[] = [
    {
        title: "Lead scoring and grading system",
        desc: "Prioritize follow-ups and streamline sales efforts.",
        icon: "fa-solid fa-sort",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Follow-up, Visits,Task Scheduled",
        desc: "Track team’s daily activities and monitor progress to ensure accountability.",
        icon: "fa-solid fa-calendar-check",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Push Notification Reminders",
        desc: "Keep teams and clients aligned with timely reminders for follow-ups and tasks.",
        icon: "fa-solid fa-bell",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "WhatsApp & Email Integration",
        desc: "Seamlessly communicate with leads and clients through integrated messaging.",
        icon: "fa-solid fa-message",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    },
    {
        title: "Role-Based Access Control",
        desc: "Manage permissions and access levels for different team members.",
        icon: "fa-solid fa-user-lock",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#3f51b5"
    }
];

// Sri vishakha features
const srivishakhaMethodologyCards: MethodologyCard[] = [
    {
        title: "Property Discovery Interface",
        desc: "Sleek & intuitive user interface design.",
        icon: "fa-solid fa-address-card",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "High-Quality Visual Galleries",
        desc: "High-Quality Visual Galleries with image zoom.",
        icon: "fa-solid fa-image",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Detailed Project Specification & Amenities Display",
        desc: "Detailed project specifications and amenities display.",
        icon: "fa-solid fa-file-invoice",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Integrated Enquiry & Contact Form",
        desc: "Integrated Enquiry & Contact Form.",
        icon: "fa-solid fa-paper-plane",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];

const socialMediaMarketingMethodologyCards: MethodologyCard[] = [
    {
        title: "Social Media Strategy Planning",
        desc: "Customized social media strategies tailored to your business goals and audience.",
        icon: "fa-solid fa-bullseye",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Creative Content Creation",
        desc: "Engaging posts, reels, stories, graphics, and videos that attract attention.",
        icon: "fa-solid fa-photo-film",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Paid Advertising Campaigns",
        desc: "Targeted Facebook, Instagram, LinkedIn, and Google ad campaigns for maximum reach.",
        icon: "fa-solid fa-bullhorn",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Performance Analytics & Growth",
        desc: "Track engagement, leads, conversions, and optimize campaigns for better results.",
        icon: "fa-solid fa-chart-line",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];
// SaaSify SEO features
const seoFeatures = [
    "Targeted keyword research & content gap analysis",
    "Technical SEO auditing and core web vitals optimization",
    "High-quality backlink building & digital PR campaigns",
    "Custom schema markup & search visibility enhancements",
    "Real-time performance tracking dashboard integration"
];

// SaaSify SEO Methodology Cards
const seoMethodologyCards: MethodologyCard[] = [
    {
        title: "Data-Driven Strategy",
        desc: "Targeting high-intent keyword clusters based on detailed user intent profiles.",
        icon: "fa-solid fa-chart-line",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Technical Optimization",
        desc: "Resolving site latency, indexation bottlenecks, and structured data errors.",
        icon: "fa-solid fa-gears",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Content Engineering",
        desc: "Crafting depth-first expert content engineered to satisfy user search journeys.",
        icon: "fa-solid fa-pen-nib",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Authority Building",
        desc: "Securing premium mentions and editor backlinks from high-authority digital publications.",
        icon: "fa-solid fa-link",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];

// Coimbatore Properites features
const coimbatore_properties_features = [
    "View project details",
    "View plot details",
    "View location",
    "Submit enquiries",
    "View amenities"
];

// Coimbatore Properites Methodology Cards
const coimbatore_properties_methodologyCards: MethodologyCard[] = [
    {
        title: "Strategic Targeting",
        desc: "Targeting high-intent buyer segments based on location, property type, and lifestyle preferences.",
        icon: "fa-solid fa-user-group",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Creative Excellence",
        desc: "Interactive visuals and intuitive layouts for immersive property exploration.",
        icon: "fa-solid fa-lightbulb",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Seamless User Experience",
        desc: "Intuitive navigation and simplified processes for smooth property exploration and enquiry.",
        icon: "fa-solid fa-rocket",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Scalable Infrastructure",
        desc: "Strategic budget allocation for optimal reach and conversion efficiency.",
        icon: "fa-solid fa-scale-balanced",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
];

// Social Brand Strategy features
const brandFeatures = [
    "Influencer outreach and contract management system",
    "Cohesive multi-platform content calendar design",
    "Interactive digital contests and community building",
    "Brand style guide & visual identity documentation",
    "Analytics reporting on social engagement & conversion rates"
];

//Dream Villa Makers features
const dreamVillaFeatures = [
    "Comprehensive real estate listing platform with advanced search and filtering capabilities",
    "Interactive 360-degree virtual tours of properties",
    "Detailed property information including floor plans, amenities, and location highlights",
    "Secure online booking and payment system for property reservations",
    "Real-time updates on property availability and pricing"
];

// Social Brand Methodology Cards
const brandMethodologyCards: MethodologyCard[] = [
    {
        title: "Identity Shaping",
        desc: "Forging consistent tone of voice, visual grIntellectworks Digital Solutions, and key messaging models.",
        icon: "fa-solid fa-palette",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Influencer Mapping",
        desc: "Partnering with verified nano and micro influencers for maximum brand credibility.",
        icon: "fa-solid fa-comments",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Community Growth",
        desc: "Running interactive challenges, surveys, and giveaways to sustain high fan engagement.",
        icon: "fa-solid fa-heart",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Omnichannel Sync",
        desc: "Unifying storefront styling, advertising copy, and email outreach setups.",
        icon: "fa-solid fa-rotate",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
]

const dreamVillaMethodologyCards: MethodologyCard[] = [
    {
        title: "Visual Storytelling",
        desc: "Creating immersive 360-degree virtual tours and high-quality video walkthroughs that bring properties to life.",
        icon: "fa-solid fa-palette",
        grad: "linear-gradient(135deg, rgba(30, 62, 122, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)",
        iconColor: "var(--theme)"
    },
    {
        title: "Advanced Search",
        desc: "Advanced search and filtering capabilities to help users find properties that meet their specific needs.",
        icon: "fa-solid fa-comments",
        grad: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)",
        iconColor: "#0d9488"
    },
    {
        title: "Secure Booking System",
        desc: "Secure online booking and payment system for property reservations.",
        icon: "fa-solid fa-heart",
        grad: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)",
        iconColor: "#dc2626"
    },
    {
        title: "Real-Time Updates",
        desc: "Real-time updates on property availability and pricing.",
        icon: "fa-solid fa-rotate",
        grad: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)",
        iconColor: "#7c3aed"
    }
]


const our_project_data: DataType[] = [
    {
        id: 1,
        page: "home_1",
        thumb: project_1,
        title: "Syncr-CRM",
        category: ["App", "Web", "SaaS"],
        projectType: "development",
        data_delay: ".3s",
        description: "Transform your real estate business with Syncr CRM – the ultimate management platform. Seamlessly track leads, manage properties, and automate workflows. Built with cutting-edge technology for speed and reliability, Syncr empowers agents and brokers to close deals faster and enhance client relationships. Experience the future of real estate management.",
        client: "Syncr CRM",
        location: "Coimbatore",
        sector: "Real Estate",
        date: "14 November, 2025",
        detailsThumb: details_banner,
        sidebarThumb: details_sidebar,
        gallery: [syncr1, syncr2, syncr3, syncrweb1, syncrweb2],
        coreFeatures: syncrFeatures,
        methodologyCards: syncrMethodologyCards,
        projectLink: "https://syncr.in/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.syncr.app",
        appStoreLink: "https://apps.apple.com/in/app/syncr-real-estate-crm/id6754961843",
        badgeText: "CRM PLATFORM",
        testimony: "Syncr CRM has completely transformed how our sales agents interact with clients. The automated follow-ups and real-time dashboard are absolute game-changers for our pipeline!",
        tagline: "The ultimate CRM & lead management system for real estate.",
        logo: syncrlogo,

    },
    {
        id: 2,
        page: "home_1",
        thumb: project_8,
        title: "Make My Homes",
        category: ["Real Estate", "Web App"],
        projectType: "development",
        data_delay: ".5s",
        description: "Make My Homes is a modern real estate website designed to showcase premium plots and property developments. Explore project details, site images, location maps, amenities, and property highlights. Users can easily view available properties, check project locations, and submit enquiries for more information. The platform provides a seamless experience for discovering and investing in quality real estate opportunities.",
        client: "Make My Homes",
        location: "Coimbatore",
        sector: "Real Estate",
        date: "01 may, 2024",
        detailsThumb: details_banner,
        sidebarThumb: details_sidebar,
        gallery: [mmh1, mmh2, mmh3, mmh4, mmh5, mmh6],
        coreFeatures: mmhFeatures,
        methodologyCards: makeMyHomeMethodologyCards,
        projectLink: "https://makemyhomes.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.app.makemyhomes&hl=en_IN",
        appStoreLink: "https://apps.apple.com/in/app/make-my-homes/id6741757789",
        badgeText: "REAL ESTATE PORTAL",
        testimony: "The interactive plot maps and modern design of the Sri Vishakha Fields website have made property discovery incredibly smooth and engaging for our prospective buyers.",
        tagline: "Premium plot bookings and real estate overview.",
        logo: mmhlogo

    },
    {
        id: 3,
        page: "home_1",
        thumb: project_3,
        title: "2Deal Ecommerce App",
        category: ["Ecommerce", "Mobile App"],
        projectType: "development",
        data_delay: ".7s",
        description: "2Deal is a comprehensive ecommerce platform designed to connect buyers and sellers in a seamless and efficient marketplace. With a user-friendly interface, secure payment gateways, and robust backend infrastructure, 2Deal provides a reliable solution for businesses looking to expand their online presence. The platform features real-time inventory management, order tracking, and personalized recommendations, ensuring a premium shopping experience for all users.",
        client: "2Deal",
        location: "Malaysia",
        sector: "Ecommerce",
        date: "05 Dec, 2025",
        detailsThumb: details_banner,
        sidebarThumb: details_sidebar,
        gallery: [ecommerce1, ecommerce2, ecommerce3],
        coreFeatures: ecommerceFeatures,
        methodologyCards: ecommerceMethodologyCards,
        projectLink: "https://2deal.my/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.twodeal.consumer&hl=en_IN",
        appStoreLink: "https://apps.apple.com/in/app/2deal/id6747821455",
        badgeText: "ECOMMERCE APP",
        testimony: "Working with the development team was a breeze. 2Deal has become a high-converting marketplace with rock-solid security and an ultra-fast checkout process.",
        tagline: "A comprehensive online marketplace connecting buyers and sellers.",
        logo: twodeallogo,

    },
    {
        id: 4,
        page: "home_1",
        thumb: project_4,
        title: "Indian Ladies Fashion",
        category: ["Ecommerce", "Mobile App"],
        projectType: "development",
        data_delay: ".7s",
        description: "Indian Ladies Fashion is a comprehensive ecommerce platform designed to connect buyers and sellers in a seamless and efficient marketplace. With a user-friendly interface, secure payment gateways, and robust backend infrastructure, Indian Ladies Fashion provides a reliable solution for businesses looking to expand their online presence. The platform features real-time inventory management, order tracking, and personalized recommendations, ensuring a premium shopping experience for all users.",
        client: "Indian Ladies Fashion",
        location: "Coimbatore, Tamil Nadu",
        sector: "Ecommerce",
        date: "18 Nov, 2025",
        detailsThumb: details_banner,
        sidebarThumb: details_sidebar,
        gallery: [indianladiesfashion1, indianladiesfashion2, indianladiesfashion3, indianladiesfashion4],
        coreFeatures: indianLadiesFashionFeatures,
        methodologyCards: indianLadiesFashionMethodologyCards,
        projectLink: "https://indianladiesfashion.com/",
        badgeText: "FASHION STORE",
        testimony: "Our online sales have doubled since launching the Indian Ladies Fashion app. The custom sizing and elegant product display keep customers coming back for more.",
        tagline: "Ethnic and contemporary Indian fashion at your fingertips.",
        cardBg: "linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 100%)",
        logo: ilflogo,
    },


    {
        id: 5,
        page: "home_1",
        thumb: project_7,
        title: "Coimbatore Properites",
        category: ["Real Estate", "Web", "App"],
        projectType: "development",
        data_delay: ".7s",
        description: "Coimbatore Properites is a comprehensive real estate platform designed to connect buyers and sellers in a seamless and efficient marketplace. With a user-friendly interface, secure payment gateways, and robust backend infrastructure, Coimbatore Properites provides a reliable solution for businesses looking to expand their online presence. The platform features real-time inventory management, order tracking, and personalized recommendations, ensuring a premium shopping experience for all users.",
        client: "Coimbatore Properites",
        location: "Coimbatore, Tamil Nadu",
        sector: "Real Estate",
        date: "10 October, 2025",
        detailsThumb: details_banner,
        sidebarThumb: details_sidebar,
        gallery: [coimbatoreproperties1, coimbatoreproperties2, coimbatoreproperties3],
        coreFeatures: coimbatore_properties_features,
        methodologyCards: coimbatore_properties_methodologyCards,
        projectLink: "https://coimbatoreproperties.org/",
        appStoreLink: "https://apps.apple.com/in/app/coimbatore-properties/id6741788886",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.cpapp.prop&hl=en_IN",
        badgeText: "ROAS OPTIMIZATION",
        testimony: "The interactive plot maps and modern design of the Coimbatore Properites website have made property discovery incredibly smooth and engaging for our prospective buyers.",
        tagline: "Premium plot bookings and real estate overview.",
        // cardBg: "linear-gradient(135deg, #F2F2F2 0%, #E6E6E6 100%)",
        logo: cplogo,

    },
    {
        id: 6,
        page: "home_1",
        thumb: project_6,
        title: "Dream villa Makers",
        category: ["Apps", "Web", "Mobile", "Real Estate"],
        projectType: "development",
        data_delay: ".7s",
        description: "Dream villa Makers is a comprehensive real estate platform designed to connect buyers and sellers in a seamless and efficient marketplace. With a user-friendly interface, secure payment gateways, and robust backend infrastructure, Dream villa Makers provides a reliable solution for businesses looking to expand their online presence. The platform features real-time inventory management, order tracking, and personalized recommendations, ensuring a premium shopping experience for all users.",
        client: "Dream Villa Makers",
        location: "Coimbatore",
        sector: "Real Estate",
        date: "22 December, 2025",
        detailsThumb: dreamvilla1,
        sidebarThumb: idslogo,
        gallery: [dreamvilla1, dreamvilla2, dreamvilla3, dvmweb1, dvmweb2, dvmweb3],
        coreFeatures: dreamVillaFeatures,
        methodologyCards: dreamVillaMethodologyCards,
        projectLink: "https://www.dreamvillamakers.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dvm.dvmapp",
        appStoreLink: "https://apps.apple.com/in/app/dream-villa-makers/id6755949325",
        badgeText: "PROPERTY DIRECTORY",
        testimony: "Dream Villa Makers is the perfect showcase for our premium villa projects. The search and filter tools are fast and our client inquiries have surged by 45%.",
        tagline: "Building your dream home, one villa at a time.",
        logo: dvmlogo,
    },
    {
        id: 7,
        page: "home_1",
        thumb: project_2,
        title: "Sri Vishakha Fields",
        category: ["Real Estate", "Web App"],
        projectType: "development",
        data_delay: ".5s",
        description: "Sri Vishakha Fields is a modern real estate website designed to showcase premium plots and property developments. Explore project details, site images, location maps, amenities, and property highlights. Users can easily view available properties, check project locations, and submit enquiries for more information. The platform provides a seamless experience for discovering and investing in quality real estate opportunities.",
        client: "Srivishakha Fields",
        location: "Coimbatore",
        sector: "Real Estate",
        date: "01 November, 2025",
        detailsThumb: details_banner,
        sidebarThumb: details_sidebar,
        gallery: [srivishakha1, srivishakha2, srivishakha3, srivishakha4, srivishakha5, srivishakha6],
        coreFeatures: srivishakhaFeatures,
        methodologyCards: srivishakhaMethodologyCards,
        projectLink: "https://srivishakhafields.com/",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.vishakha.app",
        appStoreLink: "https://apps.apple.com/us/app/sri-vishakha-fields/id6759153000",
        badgeText: "REAL ESTATE PORTAL",
        testimony: "The interactive plot maps and modern design of the Sri Vishakha Fields website have made property discovery incredibly smooth and engaging for our prospective buyers.",
        tagline: "Premium plot bookings and real estate overview.",
        logo: svflogo,

    },
    ...clientCompaniesWork.map((company, index) => {
        const firstGraphic = company.mainImage;
        return {
            id: 8 + index,
            page: "home_1",
            thumb: firstGraphic,
            title: company.name,
            category: ["Digital Marketing"],
            projectType: "digital-marketing",
            data_delay: ".5s",
            description: company.description,
            client: company.id, // Using client field to pass the company ID
            location: "Global",
            sector: "Digital Marketing",
            date: "2026",
            detailsThumb: firstGraphic,
            sidebarThumb: company.logo,
            gallery: [],
            coreFeatures: company.services,
            methodologyCards: [],
            projectLink: company.websiteUrl,
            appStoreLink: company.appStoreUrl,
            playStoreLink: company.playStoreUrl,
            badgeText: "DIGITAL MARKETING",
            testimony: company.description.length > 120 ? company.description.slice(0, 120) + "..." : company.description,
            tagline: company.tagline,
            logo: company.logo,
        } as DataType;
    })
];

export default our_project_data;
