import { useEffect, RefObject } from "react";

interface UseHeroParallaxOptions {
    intensity?: number;
}

const useHeroParallax = <T extends HTMLElement>(
    heroRef: RefObject<T | null>,
    { intensity = 30 }: UseHeroParallaxOptions = {}
) => {
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const heroImg = hero.querySelector<HTMLImageElement>("img");
        const box = hero.querySelector<HTMLElement>(".box");
        const videoCircle = hero.querySelector<HTMLElement>(".video-circle");

        const handleMouseMove = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = ((x - rect.width / 2) / rect.width) * intensity;
            const moveY = ((y - rect.height / 2) / rect.height) * intensity;

            if (heroImg) {
                heroImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            }
            if (box) {
                box.style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`;
            }
            if (videoCircle) {
                videoCircle.style.transform = `translate(${moveX / 3}px, ${moveY / 3}px)`;
            }
        };

        const handleMouseLeave = () => {
            if (heroImg) heroImg.style.transform = "translate(0,0) scale(1)";
            if (box) box.style.transform = "translate(0,0)";
            if (videoCircle) videoCircle.style.transform = "translate(0,0)";
        };

        hero.addEventListener("mousemove", handleMouseMove);
        hero.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            hero.removeEventListener("mousemove", handleMouseMove);
            hero.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [heroRef, intensity]);
};

export default useHeroParallax;
