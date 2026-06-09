"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function useSmoothScroll() {
   const pathname = usePathname();

   useLayoutEffect(() => {
      if (typeof window === "undefined") return;

      // Reset window scroll to top and clear scroll memory before creating the smoother
      window.scrollTo(0, 0);
      if (ScrollTrigger) {
         ScrollTrigger.clearScrollMemory();
      }

      // Smooth scroll initialize
      const smoother = ScrollSmoother.create({
         wrapper: "#smooth-wrapper",
         content: "#smooth-content",
         smooth: 1.2,
         effects: true,
         normalizeScroll: true,
      });

      // Ensure smoother starts at top and refresh scroll trigger bounds
      smoother.scrollTop(0);
      ScrollTrigger.refresh();

      // Anchor hash scroll
      const handleClick = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         if (!target) return;

         const anchor = target.closest("a") as HTMLAnchorElement;
         if (!anchor || !anchor.href.includes("#")) return;

         const hash = anchor.hash;
         if (!hash) return;

         const element = document.querySelector(hash);
         if (!element) return;

         e.preventDefault();

         const top =
            element.getBoundingClientRect().top +
            (window.scrollY || window.pageYOffset);

         // Smooth scroll to section using the existing smoother
         gsap.to(smoother, {
            scrollTop: top,
            duration: 1,
            ease: "power2.inOut",
         });
      };

      document.addEventListener("click", handleClick);

      return () => {
         document.removeEventListener("click", handleClick);
         smoother.kill();
      };
   }, [pathname]);
}

