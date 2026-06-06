import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu";

import logo from "@/assets/img/logo/black-logo.svg"

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div className="fix-area">
            <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
               <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                     <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo">
                           <Link href="/">
                              <Image src={logo} alt="logo-img" />
                           </Link>
                        </div>
                        <div className="offcanvas__close">
                           <button onClick={() => setOffCanvas(false)}>
                              <i className="fas fa-times"></i>
                           </button>
                        </div>
                     </div>
                     <p className="text d-none d-xl-block">
                        Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                     </p>
                     <div className="mobile-menu fix mb-3 mean-container">
                        <div className="mean-bar">
                           <nav className="mean-nav">
                              <MobileMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="offcanvas__contact d-xl-block">
                        <h4 className="d-xl-block">Contact Info</h4>
                        <ul className="d-xl-block">
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon">
                                 <i className="fal fa-map-marker-alt"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link href="#">Main Street, Melbourne, Australia</Link>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></Link>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="fal fa-clock"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link target="_blank" href="#">Mod-friday, 09am -05pm</Link>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="far fa-phone"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link href="tel:+11002345909">+11002345909</Link>
                              </div>
                           </li>
                        </ul>
                        <div className="social-icon d-flex align-items-center">
                           <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                           <Link href="#"><i className="fab fa-twitter"></i></Link>
                           <Link href="#"><i className="fab fa-youtube"></i></Link>
                           <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}></div>
      </>
   )
}

export default Offcanvas
