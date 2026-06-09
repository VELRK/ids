import { StaticImageData } from "next/image";

import blog_1 from "@/assets/img/home-1/news/01.jpg"
import blog_2 from "@/assets/img/home-1/news/02.jpg"
import blog_3 from "@/assets/img/home-1/news/03.jpg"
import blog_4 from "@/assets/img/home-1/news/11.jpg"
import blog_5 from "@/assets/img/home-1/news/12.jpg"
import blog_6 from "@/assets/img/home-1/news/13.jpg"

import blog2_1 from "@/assets/img/home-1/news/05.jpg"
import blog2_2 from "@/assets/img/home-1/news/06.jpg"

import blog3_1 from "@/assets/img/home-1/news/banner1.png"
import blog3_2 from "@/assets/img/home-1/news/banner2.png"
import blog3_3 from "@/assets/img/home-1/news/banner3.png"
import blog3_4 from "@/assets/img/home-1/news/banner4.png"
import blog3_5 from "@/assets/img/home-1/news/banner5.png"
import blog3_6 from "@/assets/img/home-1/news/banner6.png"

export interface DataType {
    id: number;
    page: string;
    thumb: StaticImageData;
    title: string;
    date: string;
    data_delay?: string;
    desc?: string;
    comment?: string;
    class?: string;

    // new fields for details page
    author?: string;
    category?: string;
    content1?: string;
    content2?: string;
    quoteText?: string;
    content3?: string;
    image2?: StaticImageData;
    image3?: StaticImageData;
    content4?: string;
    tags?: string[];
}

const blog_data: DataType[] = [
    {
        id: 1,
        page: "inner_blog_2",
        thumb: blog3_1,
        title: "Transforming Ideas into Reality: The Power of Custom Software.",
        desc: "Discover how custom software development can streamline your business operations, enhance user experiences, and provide a significant competitive edge in today's market.",
        date: "11 March 2025",
        author: "Vel RK",
        category: "Software Development",
        content1: "The digital landscape is evolving rapidly, and off-the-shelf software solutions often fall short of meeting the unique needs of growing businesses. Custom software development allows you to create tailored applications that fit your specific processes like a glove.",
        content2: "When you invest in custom software, you're not just buying a tool; you're building a scalable asset that grows with your business. It integrates seamlessly with your existing systems and provides the flexibility needed to adapt to future market changes.",
        quoteText: "Custom software is the bridge between a company's vision and its operational reality.",
        content3: "Furthermore, custom solutions offer enhanced security. Unlike popular off-the-shelf software that is a common target for hackers, tailored software is built with your specific security requirements in mind, minimizing vulnerabilities.",
        image2: blog_1,
        image3: blog_2,
        content4: "In conclusion, while the initial investment in custom software might be higher, the long-term ROI is undeniable. It empowers your team, delights your customers, and positions your business for sustainable growth.",
        tags: ["Software", "Development", "Business"],
    },
    {
        id: 2,
        page: "inner_blog_2",
        thumb: blog3_2,
        title: "Visual Storytelling: Elevating Your Brand Through Graphic Design.",
        desc: "Learn why impactful graphic design is essential for effective communication, building trust with your audience, and creating memorable brand identities that stand out.",
        date: "16 March 2025",
        author: "Hari Prakash",
        category: "Graphic Design",
        content1: "A picture is worth a thousand words, and in the world of branding, this couldn't be truer. Graphic design is not just about making things look pretty; it's a strategic tool used to communicate your brand's values, mission, and personality.",
        content2: "From your logo to your website design, every visual element plays a crucial role in how your audience perceives you. Consistent and professional graphic design builds trust and credibility, making your business appear more established and reliable.",
        quoteText: "Good design is good business. It tells your story before you even say a word.",
        content3: "Moreover, effective visual storytelling helps you connect with your audience on an emotional level. By using the right colors, typography, and imagery, you can evoke specific feelings and create a lasting impression.",
        image2: blog_3,
        image3: blog_4,
        content4: "Investing in high-quality graphic design is an investment in your brand's future. It differentiates you from competitors and ensures that your message is heard loud and clear.",
        tags: ["Design", "Branding", "Creative"],
    },
    {
        id: 3,
        page: "inner_blog_2",
        thumb: blog3_3,
        title: "Mastering the Digital Landscape: Advanced Marketing Strategies.",
        desc: "Explore cutting-edge digital marketing techniques, from SEO and PPC to content marketing, designed to drive traffic, increase conversions, and maximize your ROI.",
        date: "18 March 2025",
        class: "mb-0",
        author: "Sabesh",
        category: "Digital Marketing",
        content1: "In today's hyper-connected world, having a great product or service is not enough. You need to ensure that your target audience can find you, and that's where digital marketing comes in. It's a multifaceted approach that encompasses SEO, social media, email marketing, and more.",
        content2: "SEO remains the cornerstone of any successful digital strategy. By optimizing your website for search engines, you increase your visibility and attract high-quality, organic traffic. But it doesn't stop there; combining SEO with targeted PPC campaigns can yield incredible results.",
        quoteText: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
        content3: "Content marketing is another critical component. Creating valuable, relevant, and consistent content helps you attract and retain a clearly defined audience. It positions you as an authority in your industry and drives profitable customer action.",
        image2: blog_5,
        image3: blog_6,
        content4: "To truly master the digital landscape, you must continuously analyze your data and adapt your strategies. What works today might not work tomorrow, so staying agile and informed is key to long-term success.",
        tags: ["Marketing", "SEO", "Digital"],
    },
    {
        id: 4,
        page: "inner_blog_2",
        thumb: blog3_4,
        title: "Integrating Design and Technology for Seamless Experiences.",
        desc: "Understand the synergy between graphic design and software development, and how a unified approach leads to intuitive, aesthetically pleasing, and highly functional digital products.",
        date: "16 March 2025",
        author: "Hareesh",
        category: "UI/UX Design",
        content1: "The intersection of graphic design and software development is where true innovation happens. When designers and developers work together from the inception of a project, the result is a product that is both beautiful and highly functional.",
        content2: "User Experience (UX) and User Interface (UI) design are critical components of this synergy. A well-designed UI makes the software intuitive to use, while a thoughtful UX ensures that the user's journey is smooth and enjoyable.",
        quoteText: "Design is not just what it looks like and feels like. Design is how it works.",
        content3: "This collaborative approach also reduces development time and costs. By identifying potential issues early in the design phase, developers can avoid costly reworks later on. It ensures that the final product meets both aesthetic and technical requirements.",
        image2: blog2_1,
        image3: blog2_2,
        content4: "Ultimately, integrating design and technology is about putting the user first. It's about creating digital experiences that are not only efficient but also delightful, fostering brand loyalty and driving business success.",
        tags: ["UI/UX", "Integration", "Tech"],
    },
    {
        id: 5,
        page: "inner_blog_2",
        thumb: blog3_5,
        title: "The Future of AI in Digital Marketing and Development.",
        desc: "Discover how Artificial Intelligence is revolutionizing both software development and digital marketing, providing new tools for automation, personalization, and data analysis.",
        date: "11 March 2025",
        class: "mb-0",
        author: "David",
        category: "Artificial Intelligence",
        content1: "Artificial Intelligence (AI) is no longer a futuristic concept; it's a present reality that is transforming industries across the board. In software development and digital marketing, AI is opening up unprecedented opportunities for innovation and efficiency.",
        content2: "In marketing, AI-powered tools can analyze vast amounts of data to identify trends and predict customer behavior. This allows for hyper-personalized campaigns that resonate with individual users, significantly increasing conversion rates.",
        quoteText: "AI is the new electricity. It will transform every industry, and digital marketing is no exception.",
        content3: "On the development side, AI is streamlining the coding process. Tools like AI-assisted code completion and automated testing help developers work faster and with fewer errors. AI can also be used to build smarter applications that learn and adapt to user behavior over time.",
        image2: blog3_1,
        image3: blog3_2,
        content4: "As AI technology continues to evolve, its impact on digital marketing and software development will only grow. Embracing AI now will give businesses a significant competitive advantage in the years to come.",
        tags: ["AI", "Innovation", "Future"],
    },
];

export default blog_data;