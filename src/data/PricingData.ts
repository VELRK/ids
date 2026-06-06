interface DataType {
    id: number;
    page: string;
    pricing_details: {
        id: number
        title: string;
        price: string;
        desc: string;
        features: string[];
    }[];
}

const pricing_data: DataType[] = [
    {
        id: 1,
        page: "home_2",
        pricing_details: [
            {
                id: 1,
                title: "Starter",
                price: "29",
                desc: "For businesses ready to level up their digital presence with a professional.",
                features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
            },
            {
                id: 2,
                title: "Essential",
                price: "799",
                desc: "For businesses ready to level up their digital presence with a professional.",
                features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
            },
            {
                id: 3,
                title: "Basic",
                price: "2,800",
                desc: "For businesses ready to level up their digital presence with a professional.",
                features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
            },
        ],
    },
    {
        id: 2,
        page: "home_2",
        pricing_details: [
            {
                id: 1,
                title: "Starter",
                price: "39",
                desc: "For businesses ready to level up their digital presence with a professional.",
                features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
            },
            {
                id: 2,
                title: "Essential",
                price: "850",
                desc: "For businesses ready to level up their digital presence with a professional.",
                features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
            },
            {
                id: 3,
                title: "Basic",
                price: "3,850",
                desc: "For businesses ready to level up their digital presence with a professional.",
                features: ["Basic IT support", "Uptime monitoring", " Email priority help", "Small fixes included", "Team Q&A session",],
            },
        ],
    },
];

export default pricing_data;

