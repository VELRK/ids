"use client"
import Image from "next/image"
import Link from "next/link"
import FooterMenu from "@/components/common/FooterMenu";

import logo from "@/assets/img/logo/white-logo.svg"
import bg_img from "@/assets/img/home-1/footer-bg.jpg"

const FooterOne = () => {

   return (
      <footer className="footer-section fix inner_footer_section">
         <div className="footer-area bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
               <div className="footer-widget-wrapper">
                  <div className="row justify-content-between">
                     <div className="col-xl-4 col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="footer-widget-items">
                           <div className="widget-head">
                              <Link href="/" className="footer-logo">
                                 <Image src={logo} alt="img" />
                              </Link>
                           </div>
                           <div className="footer-content">
                              <p>
                                 Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting.
                              </p>
                              <Link href="/contact" className="theme-btn">
                                 Get started now <i className="fa-solid fa-arrow-up-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                     <FooterMenu />
                     <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="footer-widget-items">
                           <div className="widget-head">
                              <h3>Subscribe Newsletter</h3>
                           </div>
                           <div className="contact-item">
                              <form action="https://formsubmit.co/info@syncr.in" method="POST">
                                 <input type="email" name="email" placeholder="Email address" required />
                                 <input type="hidden" name="_subject" value="New Newsletter Subscription" />
                                 <button type="submit" className="theme-btn w-100" style={{ marginTop: '10px' }}>
                                    Subscribe now <i className="fa-solid fa-arrow-up-right"></i>
                                 </button>
                              </form>
                              <div className="social-icon">
                                 <Link href="https://www.facebook.com/intellectworksdigital/"><i className="fa-brands fa-facebook-f"></i></Link>
                                 <Link href="https://in.linkedin.com/company/intellectworks-digital-solutions"><i className="fa-brands fa-linkedin"></i></Link>
                                 <Link href="https://www.instagram.com/intellectworksdigital/"><i className="fa-brands fa-instagram"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer-bottom-wrapper">
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                     Copyright <span>Intellectworks Digital Solutions.</span> All rights reserved.
                  </p>
                  <ul className="footer-list wow fadeInUp" data-wow-delay=".7s">
                     <li>
                        <Link href="/privacy-policy">Privacy policy</Link>
                     </li>
                     <li>।</li>
                     <li>
                        <Link href="/terms-conditions">Terms & conditions</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
