interface DataType {
    id: number;
    page: string
    title: string;
    desc: string;
    showAnswer: boolean;
    data_delay: string;
}

const faq_data: DataType[] = [
    {
        id: 1,
        page: "home_1",
        showAnswer: false,
        title: "Do you develop both iOS and Android apps?",
        desc: "Yes, our app development team is highly skilled in building native applications for both iOS and Android platforms, as well as cross-platform solutions using frameworks like React Native and Flutter, ensuring a seamless experience across all devices.",
        data_delay: ".3s",
    },
    {
        id: 2,
        page: "home_1",
        showAnswer: false,
        title: "How can digital marketing improve my online presence?",
        desc: "Digital marketing encompasses strategies like SEO, social media management, pay-per-click advertising, and content marketing. These tools help increase your brand's visibility, attract targeted traffic to your website, and ultimately drive conversions and revenue.",
        data_delay: ".5s",
    },
    {
        id: 3,
        page: "home_1",
        showAnswer: false,
        title: "What is the typical timeline for developing a mobile app?",
        desc: "The timeline for developing a mobile app varies depending on its complexity, features, and platform. A simple app can take a few months, while more complex, feature-rich applications may take six months to a year. We provide a detailed project roadmap during our initial consultation.",
        data_delay: ".7s",
    },
    {
        id: 4,
        page: "home_1",
        showAnswer: false,
        title: "How do you measure the success of a digital marketing campaign?",
        desc: "We track a variety of key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates, and return on investment (ROI). We provide regular, transparent reports so you can clearly see the impact and success of your campaigns.",
        data_delay: ".3s",
    },
    {
        id: 5,
        page: "home_1",
        showAnswer: false,
        title: "Will my app be responsive and work on different screen sizes?",
        desc: "Absolutely. We employ responsive design principles to ensure your app looks and functions perfectly across a wide range of devices, from small smartphones to large tablets, providing a consistent user experience.",
        data_delay: ".5s",
    },
]

export default faq_data;