interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        inner_menu?: {
            link: string;
            title: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/", title: "Home 01" },
            { link: "/home-four", title: "Home 02" },
            { link: "/home-three", title: "Home 03" },
            { link: "/home-four", title: "Home 04" },
        ],
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        title: "Services",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/service", title: "Development" },
            { link: "/digital-marketing", title: "Digital Marketing" },
        ],
    },
    {
        id: 4,
        title: "Pages",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            {
                link: "#",
                title: "Portfolio",
                inner_menu: [{ link: "/project", title: "Portfolio", }, { link: "/project-details", title: "Portfolio Details", },]
            },
            {
                link: "#",
                title: "Team",
                inner_menu: [{ link: "/team", title: "Our Team", }, { link: "/team-details", title: "Team Details", },]
            },
            { link: "/pricing", title: "Our Pricing" },
            { link: "/faq", title: "Our Faq" },
        ],
    },
    {
        id: 5,
        title: "Blog",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            // { link: "/news-grid", title: "Blog Grid" },
            { link: "/news", title: "Blog Standard" },
            // { link: "/news-details", title: "Blog Details" },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact",
    },
];

export default menu_data;