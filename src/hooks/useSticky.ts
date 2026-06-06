'use client'
import { useEffect, useState } from "react";

interface StickyState {
   sticky: boolean;
}

const useSticky = (): StickyState => {
   const [sticky, setSticky] = useState(false);

   const stickyHeader = (): void => {
      setSticky(prev => {
         const isSticky = window.scrollY > 200;
         return prev !== isSticky ? isSticky : prev;
      });
   };

   useEffect(() => {
      window.addEventListener("scroll", stickyHeader);
      return () => window.removeEventListener("scroll", stickyHeader);
   }, []);

   return { sticky };
}

export default useSticky;