'use client'
import { useEffect, useState } from "react";

interface StickyState {
   sticky: boolean;
}

const useSticky = (): StickyState => {
   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      let rafId: number | null = null;

      const stickyHeader = (): void => {
         if (rafId !== null) return;

         rafId = window.requestAnimationFrame(() => {
            setSticky(prev => {
               const isSticky = window.scrollY > 200;
               return prev !== isSticky ? isSticky : prev;
            });
            rafId = null;
         });
      };

      const handle = setTimeout(() => {
         window.addEventListener("scroll", stickyHeader);
         setSticky(window.scrollY > 200);
      }, 50);

      return () => {
         clearTimeout(handle);
         window.removeEventListener("scroll", stickyHeader);
         if (rafId !== null) {
            window.cancelAnimationFrame(rafId);
         }
      };
   }, []);

   return { sticky };
}

export default useSticky;