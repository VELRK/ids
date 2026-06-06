"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useImageRevealAnimation = (selector = ".td_image_animetion") => {
   useEffect(() => {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      if (!elements.length) return;

      const triggers: ScrollTrigger[] = [];

      elements.forEach((imgReveal) => {
         const image = imgReveal.querySelector("img");
         if (!image) return;

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: imgReveal,
               start: "top 70%",
            },
         });

         tl.set(imgReveal, { autoAlpha: 1 });

         tl.from(imgReveal, {
            duration: 1.5,
            xPercent: -100,
            ease: Power2.easeOut,
            clearProps: "all"
         });

         tl.from(
            image,
            {
               duration: 1.5,
               xPercent: 100,
               scale: 1.5,
               delay: -1.5,
               ease: Power2.easeOut,
               clearProps: "all"
            },
            0
         );

         if (tl.scrollTrigger) {
            triggers.push(tl.scrollTrigger);
         }
      });

      return () => {
         triggers.forEach((t) => t.kill());
      };
   }, [selector]);
};

export default useImageRevealAnimation;