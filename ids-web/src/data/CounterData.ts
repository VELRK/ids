interface DataType {
    id: number;
    page: string;
    count: number;
    count_text: string;
    title: string;
}

const counter_data: DataType[] = [
    {
        id: 1,
        page: "home_1",
        count: 100,
        title: "Projects Delivered",
        count_text: "%",
    },
    {
        id: 2,
        page: "home_1",
        count: 50,
        title: "Happy Clients",
        count_text: "+",
    },
    {
        id: 3,
        page: "home_1",
        count: 5,
        title: "Industry Experience",
        count_text: "+",
    },
    {
        id: 4,
        page: "home_1",
        count: 24,
        title: "Client Support",
        count_text: "/7",
    },
]

export default counter_data;