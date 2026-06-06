import Link from "next/link"

const HeaderTop = () => {
   return (
      <div className="header-top-section">
         <div className="container-fluid">
            <div className="header-top-wrapper">
               <div className="header-left">
                  <ul className="list">
                     <li>
                        <i className="fa-solid fa-location-dot"></i>
                        Coimbatore, Tamil Nadu, India
                     </li>
                     <li>।</li>
                     <li>
                        <i className="fa-regular fa-envelope"></i>
                        <Link href="mailto:intellectworks58@gmail.com">intellectworks58@gmail.com</Link>
                     </li>
                  </ul>
               </div>
               <div className="header-right">
                  <span><i className="fa-regular fa-clock"></i> Mon–Fri 09:30 AM – 06:00 PM</span>
                  <div className="social-icon">
                     <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                     {/* <Link href="#"><i className="fa-brands fa-twitter"></i></Link> */}
                     <Link href="#"><i className="fa-brands fa-linkedin"></i></Link>
                     <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTop
