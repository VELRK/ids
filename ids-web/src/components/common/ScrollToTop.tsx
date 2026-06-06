"use client";

import UseSticky from "@/hooks/useSticky";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();
   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      const checkScrollTop = () => {
         const currentScroll = window.scrollY > 400;
         setShowScroll((prev) => (prev !== currentScroll ? currentScroll : prev));
      };

      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, []);

   return (
      <button
         id="back-top"
         onClick={scrollTop}
         className={`back-to-top ${sticky && showScroll ? "show" : ""}`}
         data-target="html"
      >
         <i className="fa-regular fa-arrow-up"></i>
      </button>
   );
};

export default ScrollToTop;