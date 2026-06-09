"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import ContactPopup from "@/modals/ContactPopup";
import NavMenu from "./Menu/NavMenu";
import HeaderTop from "./Menu/HeaderTop";
import useSticky from "@/hooks/useSticky";

import logo_1 from "@/assets/img/logo/white-logo.svg";
import logo_2 from "@/assets/img/logo/black-logo.svg";

const HeaderOne = () => {

   const { sticky } = useSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

   return (
      <>
         <HeaderTop />
         <header id="header-sticky" className={`header-1 ${sticky ? "sticky" : ""}`}>
            <div className="container-fluid">
               <div className="mega-menu-wrapper">
                  <div className="header-main">
                     <div className="header-left">
                        <div className="logo">
                           <Link href="/" className="header-logo">
                              <Image src={logo_1} alt="logo-img" />
                           </Link>
                           <Link href="/" className="header-logo-2">
                              <Image src={logo_2} alt="logo-img" />
                           </Link>
                        </div>
                     </div>
                     <div className="mean__menu-wrapper">
                        <div className="main-menu">
                           <nav id="mobile-menu" className="d-none d-xl-block">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="header-right d-flex justify-content-end align-items-center">
                        {/* <div className="menu_search">
                           <button onClick={() => setIsSearch(true)} className="search_btn"><i className="far fa-search"></i></button>
                        </div> */}
                        <div className="header-btn">
                           <h6>
                              <i className="fa-regular fa-phone-volume"></i>
                              <a href="tel:+919306978124">+(91) 9306978124</a>
                           </h6>
                           <div className="header-button">
                              <button onClick={() => setIsContactOpen(true)} className="theme-btn border-0">
                                 Get In Touch <i className="fa-solid fa-arrow-up-right"></i>
                              </button>
                           </div>
                           <div className="header__hamburger d-xl-none my-auto">
                              <div onClick={() => setOffCanvas(true)} className="sidebar__toggle">
                                 <i className="fas fa-bars"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
         <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </>
   )
}

export default HeaderOne
