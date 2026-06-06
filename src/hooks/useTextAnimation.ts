"use client"
import { useEffect } from "react";

interface UseTextAnimationOptions {
    selector?: string;
    threshold?: number;
    rootMargin?: string;
}

const useTextAnimation = ({
    selector = ".text-anims",
    threshold = 0.5,
    rootMargin = "0px",
}: UseTextAnimationOptions = {}) => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const elements = document.querySelectorAll<HTMLElement>(selector);
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector, threshold, rootMargin]);
};

export default useTextAnimation;
