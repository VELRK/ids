"use client";
import menu_data from "@/data/MenuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    return (
        <>
            <ul>
                {menu_data.map((menu, i) => (
                    menu.mega_munu ? (
                        <li key={menu.id} className="has-dropdown active menu-thumb">
                            <Link href={menu.link} className={`${isMenuItemActive(menu.link) ? "active" : ""}`}>{menu.title}</Link>
                            <ul className="submenu has-homemenu">
                                <li>
                                    <div className="homemenu-items">
                                        {menu.mega_munu.map((item) => (
                                            <div key={item.id} className="homemenu">
                                                <div className="homemenu-thumb mb-15">
                                                    <Image src={item.img} alt="image" />
                                                    <div className="demo-button">
                                                        <Link href={item.btn_link} className="theme-btn">
                                                            {item.btn}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="homemenu-content text-center">
                                                    <h4 className="homemenu-title">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </li>) : (
                        <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
                            <Link href={menu.link} className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                                {menu.title}
                            </Link>

                            {menu.has_dropdown && (
                                <>
                                    {menu.sub_menus && (
                                        <ul className="submenu">
                                            {menu.sub_menus.map((sub_m, i) => (
                                                <li key={i}>
                                                    <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                                        {sub_m.title}
                                                        {sub_m.inner_menu && <i className="fas fa-angle-right"></i>}
                                                    </Link>

                                                    {sub_m.inner_menu && (
                                                        <ul className="submenu">
                                                            {sub_m.inner_menu.map((inner_m, j) => (
                                                                <li key={j}>
                                                                    <Link
                                                                        href={inner_m.link}
                                                                        className={`${inner_m.link && isSubMenuItemActive(inner_m.link) ? "active" : ""}`}
                                                                    >
                                                                        {inner_m.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            )}
                        </li>
                    )
                ))}
            </ul>
        </>
    );
};

export default NavMenu;
