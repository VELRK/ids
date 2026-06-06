"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type InnerMenu = {
   title: string;
   link: string;
};

type SubMenu = {
   title: string;
   link: string;
   inner_menu?: InnerMenu[];
};

type Menu = {
   id: number | string;
   title: string;
   link: string;
   has_dropdown?: boolean;
   sub_menus?: SubMenu[];
};


const MobileMenu = () => {
   const currentRoute = usePathname();

   const [navTitle, setNavTitle] = useState<string>("");
   const [subNavTitle, setSubNavTitle] = useState<string>("");

   const isActive = (link: string) => currentRoute === link;

   const openMobileMenu = (title: string) => {
      setNavTitle(prev => (prev === title ? "" : title));
      setSubNavTitle("");
   };

   const openMobileSubMenu = (title: string) => {
      setSubNavTitle(prev => (prev === title ? "" : title));
   };


   return (
      <ul>
         {(menu_data as Menu[]).map(menu => (
            <li
               key={menu.id}
               className={menu.has_dropdown ? "has-dropdown" : ""}
            >
               <Link
                  href={menu.link}
                  className={
                     isActive(menu.link) ||
                        menu.sub_menus?.some(
                           sub =>
                              isActive(sub.link) ||
                              sub.inner_menu?.some(inner =>
                                 isActive(inner.link)
                              )
                        )
                        ? "active"
                        : ""
                  }
               >
                  {menu.title}
               </Link>

               {menu.has_dropdown && menu.sub_menus && (
                  <>
                     <ul
                        className="sub-menu"
                        style={{
                           display: navTitle === menu.title ? "block" : "none",
                        }}
                     >
                        {menu.sub_menus.map((sub, i) => (
                           <li
                              key={i}
                              className={sub.inner_menu ? "has-dropdown" : ""}
                           >
                              <Link
                                 href={sub.link}
                                 className={isActive(sub.link) ? "active" : ""}
                              >
                                 {sub.title}
                              </Link>

                              {sub.inner_menu && (
                                 <>
                                    <ul
                                       className="submenu"
                                       style={{
                                          display:
                                             subNavTitle === sub.title ? "block" : "none",
                                       }}
                                    >
                                       {sub.inner_menu.map((inner, j) => (
                                          <li key={j}>
                                             <Link
                                                href={inner.link}
                                                className={
                                                   isActive(inner.link) ? "active" : ""
                                                }
                                             >
                                                {inner.title}
                                             </Link>
                                          </li>
                                       ))}
                                    </ul>

                                    <a
                                       className={`mean-expand ${subNavTitle === sub.title
                                             ? "mean-clicked"
                                             : ""
                                          }`}
                                       style={{ cursor: "pointer" }}
                                       onClick={() =>
                                          openMobileSubMenu(sub.title)
                                       }
                                    >
                                       <i
                                          className={`far fa-${subNavTitle === sub.title
                                                ? "minus"
                                                : "plus"
                                             }`}
                                       />
                                    </a>
                                 </>
                              )}
                           </li>
                        ))}
                     </ul>
                     <a
                        className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""
                           }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => openMobileMenu(menu.title)}
                     >
                        <i
                           className={`far fa-${navTitle === menu.title ? "minus" : "plus"
                              }`}
                        />
                     </a>
                  </>
               )}
            </li>
         ))}
      </ul>
   );
};

export default MobileMenu;
