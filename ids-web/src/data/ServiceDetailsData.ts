import { StaticImageData } from "next/image"
import service_thumb1 from "@/assets/img/inner-page/service-details-01.jpg"
import service_thumb2 from "@/assets/img/inner-page/search_engine.png"
import service_thumb3 from "@/assets/img/inner-page/social_media_banner.png"
import service_thumb4 from "@/assets/img/inner-page/custom_app.png"
import service_thumb5 from "@/assets/img/inner-page/ai_power.png"
import service_thumb6 from "@/assets/img/inner-page/android_ios.png"
import service_thumb7 from "@/assets/img/inner-page/techno_cons.png"
import service_thumb8 from "@/assets/img/inner-page/ppc.png"
import service_thumb9 from "@/assets/img/inner-page/digital_platforms.png"
import service_thumb10 from "@/assets/img/inner-page/content.png"
import service_thumb11 from "@/assets/img/inner-page/ui_ux.png"


export interface ServiceDetailsType {
    id: number;
    title: string;
    desc: string;
    bannerImage: StaticImageData;
    introText1: string;
    introText2: string;
    featuresList: string[];
    processTitle: string;
    processDesc: string;
    processSteps: {
        number: string;
        title: string;
        desc: string;
    }[];
    faqs: {
        id: number;
        title: string;
        desc: string;
        data_delay: string;
    }[];
    category: string;
}

const service_details_data: ServiceDetailsType[] = [
    {
        id: 1,
        category: "Software Development",
        title: "Custom Application Development",
        desc: "We build robust, scalable custom web applications, mobile apps, and AI-powered solutions tailored to your specific business needs using cutting-edge technologies.",
        bannerImage: service_thumb4,
        introText1: "In today's competitive landscape, generic software often falls short of meeting unique business requirements. Custom application development provides a tailored solution designed from the ground up to support your specific workflows, maximize operational efficiency, and drive business growth. We specialize in three core areas: Web Applications, Mobile Apps, and AI-Powered Solutions.",
        introText2: "We develop high-performance web apps using modern frameworks like React, Next.js, and Vue.js. For mobile, we build native iOS (Swift) and Android (Kotlin) apps as well as cross-platform solutions with React Native and Flutter. Our AI capabilities include integrating LLMs (GPT-4, Claude), computer vision, recommendation engines, predictive analytics, and intelligent chatbots. All solutions are cloud-native, secure, and built to scale with your business.",
        featuresList: [
            "Custom Web Applications (React, Next.js, Node.js)",
            "Native & Cross-Platform Mobile Apps (iOS, Android, Flutter)",
            "AI-Powered Features (Chatbots, Recommendations, Predictions)",
            "Generative AI Integration (Content Creation, Summarization)",
            "Cloud-Native Architecture (AWS, Azure, GCP)",
            "API & Third-Party Integration",
            "Enterprise-Grade Security & RBAC",
            "Real-Time Data Sync & Offline Support"
        ],
        processTitle: "Our Custom Application Lifecycle",
        processDesc: "We follow an agile development process that ensures complete transparency, rapid delivery, and constant alignment with your strategic objectives.",
        processSteps: [
            {
                number: "01.",
                title: "Discovery & Planning",
                desc: "We analyze your workflows, define system requirements, and architect the software blueprint. We also identify AI use cases and choose the right tech stack (web, mobile, or both)."
            },
            {
                number: "02.",
                title: "Development & Testing",
                desc: "Our engineers build web and mobile applications in sprints, integrate AI models, and run automated tests to ensure flawless performance across all platforms."
            },
            {
                number: "03.",
                title: "Deployment & Support",
                desc: "We launch your application, submit to App Stores if needed, integrate with existing systems, and provide ongoing maintenance and AI model retraining."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "Can you build both web and mobile apps together?",
                desc: "Absolutely. We can build a responsive web app plus native iOS/Android apps that share a common backend API and business logic.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "How do you integrate AI into applications?",
                desc: "We integrate AI via APIs (OpenAI, Anthropic, Google Vision) or deploy custom models. Features include smart search, content recommendations, automated document processing, and predictive analytics.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "Can the application integrate with our CRM/ERP?",
                desc: "Yes, we build custom APIs and integrate with major CRMs, ERPs, payment gateways, and third-party systems.",
                data_delay: ".6s"
            },
            {
                id: 4,
                title: "Do you offer post-launch maintenance?",
                desc: "Absolutely. We offer dedicated support, security updates, performance optimization, and AI model retraining post-launch.",
                data_delay: ".8s"
            },
            {
                id: 5,
                title: "How long does custom development take?",
                desc: "Timeline depends on complexity: basic web apps (4-8 weeks), mobile apps (8-12 weeks), AI integration adds 2-4 weeks for model training.",
                data_delay: "1s"
            }
        ]
    },
    {
        id: 2,
        category: "Software Development",
        title: "AI Product Engineering",
        desc: "Transform your AI ideas into market-ready products with our end-to-end AI product engineering services, covering LLM integration, model deployment, MLOps, and intelligent application development.",
        bannerImage: service_thumb5,
        introText1: "Building AI-powered products requires more than just integrating an API. It demands a robust engineering approach that handles data pipelines, model selection, prompt engineering, vector databases, model fine-tuning, and continuous monitoring. Our AI product engineering services bridge the gap between cutting-edge AI capabilities and production-ready applications that deliver real business value.",
        introText2: "We help you define your AI product strategy, from identifying high-impact use cases to building intelligent MVPs and scaling them into enterprise-grade AI platforms. Whether you need a custom chatbot trained on your documentation, a semantic search engine for your knowledge base, an AI copilot for your internal tools, or a recommendation system for your users, we engineer end-to-end solutions using LLMs (GPT-4, Claude, Gemini, Llama), embedding models, RAG architectures, and agentic workflows.",
        featuresList: [
            "AI Product Strategy & Use Case Discovery",
            "LLM-Powered MVP Development",
            "RAG (Retrieval-Augmented Generation) Implementation",
            "Vector Database Integration (Pinecone, Weaviate, Qdrant)",
            "Custom Fine-Tuning & Model Deployment",
            "Prompt Engineering & Optimization",
            "AI Agent & Copilot Development",
            "MLOps & Model Monitoring Pipelines",
            "Multi-Modal AI (Text, Image, Audio, Video)",
            "Responsible AI & Guardrail Implementation"
        ],
        processTitle: "Our AI Product Engineering Approach",
        processDesc: "We combine AI/ML best practices with product engineering to turn your AI vision into a high-impact, production-ready platform.",
        processSteps: [
            {
                number: "01.",
                title: "AI Discovery & Data Readiness",
                desc: "We identify high-value AI use cases, audit your data quality, select appropriate models (open-source or proprietary), and design the AI architecture including embedding strategies and vector storage."
            },
            {
                number: "02.",
                title: "RAG Pipeline & Agent Development",
                desc: "We build ingestion pipelines for your documents, implement chunking/embedding strategies, set up vector databases, develop retrieval mechanisms, and create LLM agents with tool calling capabilities."
            },
            {
                number: "03.",
                title: "Evaluation, Deployment & Continuous Learning",
                desc: "We implement evaluation frameworks (hallucination detection, answer relevance), deploy to cloud or on-premise, set up monitoring dashboards, establish feedback loops, and automate model retraining pipelines."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "What types of AI platforms can you build?",
                desc: "We build AI chatbots, document Q&A systems, semantic search engines, AI copilots for internal tools, automated report generators, code assistants, recommendation engines, content moderation systems, and predictive analytics platforms.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "Do you use open-source or proprietary LLMs?",
                desc: "Both. We work with GPT-4, Claude, Gemini (proprietary) and Llama, Mistral, Falcon (open-source). We help you choose based on cost, latency, privacy requirements, and performance needs.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "How do you handle data privacy for AI platforms?",
                desc: "We offer VPC deployments, on-premise LLMs, data masking, and never use your data for model training. For sensitive industries, we deploy open-source models within your own cloud environment.",
                data_delay: ".6s"
            },
            {
                id: 4,
                title: "What is RAG and why do I need it?",
                desc: "RAG (Retrieval-Augmented Generation) allows LLMs to answer questions based on YOUR specific documents and data, reducing hallucinations and providing verifiable sources. It's essential for most business AI applications.",
                data_delay: ".8s"
            },
            {
                id: 5,
                title: "How long does it take to build an AI MVP?",
                desc: "A basic AI chatbot or Q&A system takes 2-4 weeks. A full AI copilot or agentic platform with multiple tools takes 6-10 weeks. Custom fine-tuning adds 2-3 weeks.",
                data_delay: "1s"
            },
            {
                id: 6,
                title: "Can you integrate AI into our existing product?",
                desc: "Absolutely. We can add AI features to your existing web or mobile app, including smart search, content generation, automated summarization, and intelligent recommendations.",
                data_delay: "1.2s"
            }
        ]
    },
    {
        id: 3,
        category: "Software Development",
        title: "Android & iOS App Development",
        desc: "Leverage the power of mobile with our expert Android and iOS app development services. We create seamless, high-performance applications for both platforms.",
        bannerImage: service_thumb6,
        introText1: "Mobile apps have become the primary touchpoint for modern consumers and businesses. We create high-performance, intuitive, and secure mobile applications for Android and iOS devices, ensuring an outstanding mobile experience.",
        introText2: "Whether you need a native Swift/Kotlin application or a cross-platform Flutter/React Native solution, our expert developers deliver robust apps optimized for speed, battery life, and user engagement.",
        featuresList: [
            "Native iOS (Swift) Development",
            "Native Android (Kotlin) Development",
            "Cross-Platform (React Native/Flutter)",
            "Mobile UI/UX Design",
            "App Store & Play Store Publishing",
            "Push Notifications & Analytics"
        ],
        processTitle: "Our Mobile App Development Process",
        processDesc: "From concept validation to store submission, we manage the entire mobile app lifecycle to ensure a successful launch.",
        processSteps: [
            {
                number: "01.",
                title: "UX Prototyping",
                desc: "We build interactive mobile layouts and map gestures to ensure an intuitive user experience."
            },
            {
                number: "02.",
                title: "Cross-Platform Coding",
                desc: "We write clean, modular code that runs flawlessly across various device form factors and OS versions."
            },
            {
                number: "03.",
                title: "App Store Deployment",
                desc: "We perform rigorous device testing, optimize store listings, and handle store submissions."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "Should I choose Native or Cross-platform?",
                desc: "Native is ideal for high-performance and deep OS integrations. Cross-platform is cost-effective and covers both platforms quickly.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "How do you handle app updates?",
                desc: "We design apps to fetch dynamic content and support push updates, and we assist with new store releases.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "Are the apps compliant with security standards?",
                desc: "Yes, we implement data encryption, secure APIs, and follow industry best practices for security.",
                data_delay: ".6s"
            }
        ]
    },
    {
        id: 4,
        category: "Software Development",
        title: "Technology Consulting",
        desc: "Leverage our technology consulting services to make informed decisions about your tech strategy. We provide expert guidance to optimize your technology stack and drive business transformation.",
        bannerImage: service_thumb7,
        introText1: "In a rapidly evolving digital landscape, choosing the right technology stack and strategy is critical. Our technology consulting services guide you through digital transformation, infrastructure optimization, and tech planning.",
        introText2: "We assess your current technology infrastructure, identify bottlenecks, and recommend modern, cost-effective solutions. We align your tech strategy with your overall business objectives to maximize ROI.",
        featuresList: [
            "Digital Transformation Strategy",
            "Cloud Architecture & Migration",
            "Tech Stack Optimization",
            "IT Infrastructure Audit",
            "Security & Compliance Audits",
            "Legacy System Modernization"
        ],
        processTitle: "Our Technology Consulting Workflow",
        processDesc: "We analyze, advise, and implement strategies that modernize your technology footprint and accelerate business agility.",
        processSteps: [
            {
                number: "01.",
                title: "Infrastructure Audit",
                desc: "We review your current systems, licensing, and codebases to pinpoint inefficiencies."
            },
            {
                number: "02.",
                title: "Strategy Blueprint",
                desc: "We create a roadmap proposing modern architectures, cloud migrations, and cost-benefit analysis."
            },
            {
                number: "03.",
                title: "Implementation Support",
                desc: "We collaborate with your team to oversee the deployment of new technologies and methodologies."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "Why do we need a tech consulting firm?",
                desc: "We help you avoid costly tech decisions, optimize software licenses, and accelerate development cycles.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "Do you assist in cloud migration?",
                desc: "Yes, we plan and execute migrations to AWS, Microsoft Azure, and Google Cloud Platform.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "How do you ensure data security during migration?",
                desc: "We employ strict data access controls, secure VPNs, and industry-standard backup protocols during transition.",
                data_delay: ".6s"
            }
        ]
    },
    {
        "id": 5,
        "category": "Software Development",
        "title": "UI/UX Design",
        "desc": "Transform your ideas into intuitive and visually captivating digital experiences with our UI/UX design services. We specialize in creating user-centric designs that enhance engagement and drive business goals.",
        "bannerImage": service_thumb11,
        "introText1": "Great design is the foundation of a great user experience. Our UI/UX design services focus on creating intuitive, visually appealing interfaces that engage users and reflect your brand identity.",
        "introText2": "We don't just design for looks; we design for behavior. From user flows and wireframes to high-fidelity prototypes, every pixel is crafted to reduce friction, guide users naturally, and convert interactions into meaningful outcomes.",
        "featuresList": [
            "User Research & Persona Development",
            "Wireframing & Prototyping",
            "User Interface (UI) Design",
            "Usability Testing & Analysis",
            "Information Architecture",
            "Design Systems & Style Guides"
        ],
        "processTitle": "Our UI/UX Design Process",
        "processDesc": "We follow a human-centered design process to ensure every product is usable, accessible, and delightful.",
        "processSteps": [
            {
                "number": "01.",
                "title": "Discovery & User Research",
                "desc": "We interview stakeholders, analyze competitors, and build user personas to understand real needs and pain points."
            },
            {
                "number": "02.",
                "title": "Wireframing & Prototyping",
                "desc": "We sketch user flows, create low-fidelity wireframes, and build clickable prototypes to test ideas before development."
            },
            {
                "number": "03.",
                "title": "High-Fidelity Design & Testing",
                "desc": "We craft pixel-perfect UI designs, conduct usability tests, and iterate based on real user feedback."
            }
        ],
        "faqs": [
            {
                "id": 1,
                "title": "What's the difference between UI and UX?",
                "desc": "UX (User Experience) focuses on how a product feels and functions. UI (User Interface) focuses on how it looks. Both are essential for great digital products.",
                "data_delay": ".2s"
            },
            {
                "id": 2,
                "title": "Do you conduct usability testing?",
                "desc": "Yes — we run moderated and unmoderated usability tests to identify friction points and validate design decisions.",
                "data_delay": ".4s"
            },
            {
                "id": 3,
                "title": "Can you work with our existing developers?",
                "desc": "Absolutely. We deliver organized Figma files, design systems, and developer-ready assets for smooth handoff.",
                "data_delay": ".6s"
            }
        ]
    },
    {
        id: 6,
        category: "Digital Marketing",
        title: "Search Engine Marketing",
        desc: "Drive immediate visibility and targeted traffic with our Search Engine Marketing (SEM) services. We combine Google Ads and Bing Ads strategies to connect you with customers at the moment they're searching for solutions.",
        bannerImage: service_thumb2,
        introText1: "In the fast-paced digital landscape, appearing at the top of search results when customers need you most is crucial. Our SEM services focus on paid advertising campaigns that deliver measurable results quickly.",
        introText2: "From keyword research and compelling ad copy to bid management and landing page optimization, we handle every aspect of your PPC campaigns. Our data-driven approach ensures you get the best return on your advertising investment.",
        featuresList: [
            "PPC Campaign Management",
            "Keyword Research",
            "Ad Copy Optimization",
            "Bid Management",
            "Landing Page Optimization",
            "Performance Analytics"
        ],
        processTitle: "Our Search Engine Marketing Cycle",
        processDesc: "Our SEM process is designed to maximize your visibility on search engines through strategic paid advertising.",
        processSteps: [
            {
                number: "01.",
                title: "Keyword & Competitor Research",
                desc: "We identify high-intent keywords your target audience is searching for and analyze competitor strategies."
            },
            {
                number: "02.",
                title: "Campaign Setup & Ad Creation",
                desc: "We structure your ad campaigns, craft compelling ad copy, and design high-converting landing pages."
            },
            {
                number: "03.",
                title: "Campaign Optimization",
                desc: "We monitor campaign performance, optimize bids, and adjust targeting to improve ROI."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "How quickly can I see results with SEM?",
                desc: "SEM campaigns can deliver traffic and leads almost immediately, often within 24-48 hours of launch.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "Do you manage Google Ads?",
                desc: "Yes, we create and manage Google Ads campaigns to help you reach your target audience.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "Do you provide monthly progress reports?",
                desc: "Yes, we provide detailed monthly reports covering campaign performance, ROI, and key metrics.",
                data_delay: ".6s"
            }
        ]
    },
    {
        id: 7,
        category: "Digital Marketing",
        title: "Social Media Marketing",
        desc: "Connect with your audience and build meaningful engagement through our comprehensive social media marketing strategies. We create compelling content that drives interaction and growth.",
        bannerImage: service_thumb3,
        introText1: "Building a strong brand presence online requires targeted engagement on platforms where your customers spend their time. Our social media marketing strategies connect your brand with the right audience to drive traffic and build community.",
        introText2: "From content creation and scheduling to community management and paid ad campaigns, we manage all facets of your social presence. We craft narratives that spark conversations and convert followers into loyal advocates.",
        featuresList: [
            "Social Media Strategy",
            "Content Creation & Graphics",
            "Community Engagement",
            "Paid Social Advertising",
            "Influencer Collaborations",
            "Social Analytics & Reporting"
        ],
        processTitle: "Our Social Media Engagement Plan",
        processDesc: "We create consistent, engaging campaigns that raise brand awareness and direct targeted audiences to your website.",
        processSteps: [
            {
                number: "01.",
                title: "Audience Analysis",
                desc: "We identify your target demographic and determine the best platforms for your brand."
            },
            {
                number: "02.",
                title: "Content Calendaring",
                desc: "We design creative assets and write copy aligned with your brand voice for a scheduled calendar."
            },
            {
                number: "03.",
                title: "Campaign Optimization",
                desc: "We launch paid ad campaigns, engage with followers, and refine strategies based on engagement metrics."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "Which platforms should my business focus on?",
                desc: "This depends on your target audience. B2B brands thrive on LinkedIn/Twitter; B2C brands do well on Instagram/TikTok.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "How do you measure social media success?",
                desc: "We track metrics such as reach, engagement rate, click-through-rate, and conversions.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "Do you manage community interactions?",
                desc: "Yes, we respond to comments, direct messages, and brand mentions to maintain an active online presence.",
                data_delay: ".6s"
            }
        ]
    },
    {
        id: 8,
        category: "Digital Marketing",
        title: "PPC & Search Ads",
        desc: "Drive immediate visibility and targeted traffic with our Search Engine Marketing (SEM) services. We combine Google Ads and Bing Ads strategies to connect you with customers at the moment they're searching for solutions.",
        bannerImage: service_thumb8,
        introText1: "In the fast-paced digital landscape, appearing at the top of search results when customers need you most is crucial. Our SEM services focus on paid advertising campaigns that deliver measurable results quickly.",
        introText2: "From keyword research and compelling ad copy to bid management and landing page optimization, we handle every aspect of your PPC campaigns. Our data-driven approach ensures you get the best return on your advertising investment.",
        featuresList: [
            "Google Ads Campaign Management",
            "Microsoft (Bing) Ads",
            "Shopping Ads (Google Shopping)",
            "Remarketing (Retargeting) Campaigns",
            "PPC Performance Analytics",
            "Landing Page Optimization"
        ],
        processTitle: "Our PPC & Search Ads Strategy",
        processDesc: "We follow a systematic approach to maximize your ad spend efficiency and drive high-quality leads.",
        processSteps: [
            {
                number: "01.",
                title: "Keyword Research & Strategy",
                desc: "We identify high-intent keywords and analyze competitor strategies to find opportunities for maximum impact."
            },
            {
                number: "02.",
                title: "Ad Creation & Campaign Setup",
                desc: "We design compelling ad copy and visuals, then configure your campaigns on Google Ads and Bing Ads."
            },
            {
                number: "03.",
                title: "Optimization & Reporting",
                desc: "We continuously monitor campaign performance, A/B test elements, and provide regular reports to maximize ROI."
            }
        ],
        faqs: [
            {
                id: 1,
                title: "How quickly can I see results with SEM?",
                desc: "SEM campaigns can deliver traffic and leads almost immediately, often within 24-48 hours of launch.",
                data_delay: ".2s"
            },
            {
                id: 2,
                title: "Do you manage Google Ads?",
                desc: "Yes, we create and manage Google Ads campaigns to help you reach your target audience.",
                data_delay: ".4s"
            },
            {
                id: 3,
                title: "Do you provide monthly performance reports?",
                desc: "Yes, we provide detailed monthly reports covering campaign performance, ROI, and key metrics.",
                data_delay: ".6s"
            }
        ]
    },
    {
        "id": 9,
        "category": "Digital Marketing",
        "title": "Content Marketing",
        "desc": "Nurture prospects with high-value blogs, articles, and interactive digital copy designed to convert readers into brand advocates.",
        "bannerImage": service_thumb10,
        "introText1": "In a world of constant noise, valuable content cuts through. Our content marketing strategies focus on creating high-impact blogs, articles, and interactive copy that educate, engage, and build trust with your ideal customers.",
        "introText2": "From topic ideation and SEO-driven writing to multi-channel distribution, we craft stories that resonate. Every piece of content is designed to move readers from awareness to advocacy, turning passive visitors into loyal brand promoters.",
        "featuresList": [
            "SEO-Optimized Blog Writing",
            "Long-Form Articles & Guides",
            "Interactive Digital Copy",
            "Content Distribution Strategy",
            "Reader-to-Advocate Funnels",
            "Content Performance Analytics"
        ],
        "processTitle": "Our Content Marketing Process",
        "processDesc": "We follow a proven system to create content that attracts, nurtures, and converts — building lasting customer relationships.",
        "processSteps": [
            {
                "number": "01.",
                "title": "Strategy & Audience Mapping",
                "desc": "We identify your target personas, their pain points, and the topics that will move them toward brand advocacy."
            },
            {
                "number": "02.",
                "title": "High-Value Content Creation",
                "desc": "Our team writes SEO-driven blogs, articles, and interactive copy that inform, inspire, and drive action."
            },
            {
                "number": "03.",
                "title": "Distribution & Nurture Optimization",
                "desc": "We distribute content across channels and analyze engagement to continuously improve conversion and advocacy rates."
            }
        ],
        "faqs": [
            {
                "id": 1,
                "title": "How often should I publish content?",
                "desc": "We recommend 2–4 high-value blog posts per week, but quality always trumps quantity. We'll build a sustainable calendar for you.",
                "data_delay": ".2s"
            },
            {
                "id": 2,
                "title": "Can you write for technical or niche industries?",
                "desc": "Yes — we research deeply and work with subject matter experts to produce accurate, authoritative content for any industry.",
                "data_delay": ".4s"
            },
            {
                "id": 3,
                "title": "How do you measure content marketing ROI?",
                "desc": "We track engagement, time-on-page, lead conversions, and reader-to-advocate metrics like shares, comments, and return visits.",
                "data_delay": ".6s"
            }
        ]
    },

    {
        "id": 10,
        "category": "Digital Marketing",
        "title": "Our Digital Platforms",
        "desc": "Establish automated customer nurture paths and personalized drip campaigns to improve customer lifetime value.",
        "bannerImage": service_thumb9,
        "introText1": "Your digital platforms should work intelligently — not just capture leads, but guide them. We build automated nurture paths and personalized campaigns that turn one-time buyers into loyal, high-value customers.",
        "introText2": "From CRM integration and behavior-based segmentation to multi-channel drip campaigns, our platform strategies ensure every customer touchpoint adds value. We focus on lifetime value, not just short-term wins.",
        "featuresList": [
            "Automated Email Nurture Sequences",
            "Personalized Drip Campaigns",
            "CRM & Marketing Automation Setup",
            "Customer Lifecycle Mapping",
            "Lead Scoring & Segmentation",
            "Multi-channel Orchestration (Email, SMS, Push)"
        ],
        "processTitle": "Our Digital Platforms Strategy",
        "processDesc": "We design and implement platform-first strategies that nurture customers at every stage — from awareness to advocacy.",
        "processSteps": [
            {
                "number": "01.",
                "title": "Customer Journey Mapping",
                "desc": "We analyze your current customer behavior and map out key touchpoints for engagement and automation."
            },
            {
                "number": "02.",
                "title": "Platform Setup & Automation Build",
                "desc": "We configure your CRM, email, and marketing automation tools to deliver personalized, timely messages across channels."
            },
            {
                "number": "03.",
                "title": "Nurture & Optimization",
                "desc": "We monitor engagement, A/B test content, and continuously optimize paths to increase retention and lifetime value."
            }
        ],
        "faqs": [
            {
                "id": 1,
                "title": "What digital platforms do you work with?",
                "desc": "We work with leading platforms like HubSpot, ActiveCampaign, Klaviyo, Mailchimp, Salesforce, and custom CRM setups.",
                "data_delay": ".2s"
            },
            {
                "id": 2,
                "title": "How long does it take to see results from nurture campaigns?",
                "desc": "Many clients see improved engagement within 2–4 weeks, with significant lifetime value growth over 3–6 months.",
                "data_delay": ".4s"
            },
            {
                "id": 3,
                "title": "Can you automate across multiple channels?",
                "desc": "Yes — we set up cross-channel automation including email, SMS, push notifications, and in-app messaging.",
                "data_delay": ".6s"
            }
        ]
    },
    {
        "id": 11,
        "category": "Digital Marketing",
        "title": "Conversion Optimization",
        "desc": "Turn passive website visitors into active customers through data-driven A/B testing, UX improvements, and high-converting landing pages.",
        "bannerImage": service_thumb9,
        "introText1": "Driving traffic is only half the battle. Conversion Optimization ensures that once visitors land on your site, they take action — whether that's making a purchase, filling out a form, or requesting a demo.",
        "introText2": "We analyze user behavior, run A/B tests, and optimize every element of your funnel — from headlines and CTAs to page speed and checkout flows. Our data-driven approach systematically increases your conversion rate without increasing ad spend.",
        "featuresList": [
            "A/B & Multivariate Testing",
            "Landing Page Optimization",
            "CRO Audits & Heatmaps",
            "Checkout & Form Optimization",
            "User Experience (UX) Improvements",
            "Funnel Analysis & Fixes"
        ],
        "processTitle": "Our Conversion Optimization Process",
        "processDesc": "We use a systematic testing framework to identify friction points and continuously improve your conversion rates.",
        "processSteps": [
            {
                "number": "01.",
                "title": "Audit & Data Collection",
                "desc": "We analyze your current funnel using heatmaps, session recordings, analytics, and user feedback to identify drop-off points."
            },
            {
                "number": "02.",
                "title": "Hypothesis & Test Design",
                "desc": "We create data-backed hypotheses and design A/B tests for headlines, CTAs, layouts, forms, and other key elements."
            },
            {
                "number": "03.",
                "title": "Implementation & Iteration",
                "desc": "We run tests, analyze results, implement winning variations, and continuously iterate for ongoing gains."
            }
        ],
        "faqs": [
            {
                "id": 1,
                "title": "How much can conversion optimization improve my results?",
                "desc": "Typical improvements range from 20–100%+ depending on your current baseline. Many clients double their conversion rate within 3–6 months.",
                "data_delay": ".2s"
            },
            {
                "id": 2,
                "title": "Do I need a lot of traffic to run A/B tests?",
                "desc": "We use statistical significance calculators to ensure valid results. For low-traffic sites, we focus on qualitative methods and high-impact changes first.",
                "data_delay": ".4s"
            },
            {
                "id": 3,
                "title": "How long until I see results?",
                "desc": "Initial wins often appear within 2–4 weeks. We prioritize quick wins while building a long-term testing roadmap.",
                "data_delay": ".6s"
            }
        ]
    },
];

export default service_details_data;
