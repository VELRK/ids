"use client"
import { useEffect } from "react";

interface UseClipMaskAnimationOptions {
    wrapperSelector?: string;
    threshold?: number;
    maskCount?: number;
    dependencies?: any[];
}

const useClipMaskAnimation = ({
    wrapperSelector = ".tp-clip-anim",
    threshold = 0.2,
    maskCount = 9,
    dependencies = [],
}: UseClipMaskAnimationOptions = {}) => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const wrappers = document.querySelectorAll<HTMLElement>(wrapperSelector);
        if (!wrappers.length) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const wrapper = entry.target as HTMLElement;
                    const img = wrapper.querySelector<HTMLImageElement>(
                        ".tp-anim-img[data-animate='true']"
                    );
                    if (!img) return;

                    const url = img.src;

                    wrapper.style.position = "relative";

                    // remove old masks
                    wrapper.querySelectorAll(".mask").forEach((m) => m.remove());

                    // create masks
                    for (let i = 0; i < maskCount; i++) {
                        const mask = document.createElement("div");
                        mask.className = `mask mask-${i + 1}`;

                        Object.assign(mask.style, {
                            backgroundImage: `url(${url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "absolute",
                            inset: "0",
                        });

                        wrapper.appendChild(mask);
                    }

                    obs.unobserve(wrapper);
                });
            },
            { threshold }
        );

        wrappers.forEach((wrapper) => observer.observe(wrapper));

        return () => observer.disconnect();
    }, [wrapperSelector, threshold, maskCount, ...dependencies]);
};

export default useClipMaskAnimation;
