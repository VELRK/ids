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
      const handle = setTimeout(() => {
         window.addEventListener("scroll", stickyHeader);
         stickyHeader(); // Initialize correct state after settling
      }, 50);

      return () => {
         clearTimeout(handle);
         window.removeEventListener("scroll", stickyHeader);
      };
   }, []);

   return { sticky };
}

export default useSticky;