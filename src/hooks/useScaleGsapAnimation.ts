"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScaleGsapAnimation = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const scales = document.querySelectorAll<HTMLElement>(".scale");
        const images = document.querySelectorAll<HTMLImageElement>(".scale img");

        const tweens: gsap.core.Tween[] = [];

        scales.forEach((item) => {
            const anim = gsap.to(item, {
                scale: 1,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse",
                },
            });
            tweens.push(anim);
        });

        images.forEach((image) => {
            gsap.set(image, { scale: 1.3 });

            const anim = gsap.to(image, {
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: image,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse",
                },
            });
            tweens.push(anim);
        });

        return () => {
            tweens.forEach((t) => {
                if (t.scrollTrigger) {
                    t.scrollTrigger.kill();
                }
                t.kill();
            });
        };
    }, []);
};

export default useScaleGsapAnimation;