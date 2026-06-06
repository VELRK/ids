"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectPinScroll = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const mm = gsap.matchMedia();
        const triggers: ScrollTrigger[] = [];

        mm.add("(min-width: 1199px)", () => {
            const panels = document.querySelectorAll<HTMLElement>(".project-panel");

            panels.forEach((panel, index) => {
                const isLast = index === panels.length - 1;

                if (!isLast) {
                    const nextPanel = panels[index + 1];
                    const animation = gsap.to(panel, {
                        scale: 0.94,
                        opacity: 0.75,
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextPanel,
                            start: "top 95%",
                            end: "top 10%",
                            scrub: true,
                            markers: false,
                        }
                    });
                    
                    // Add scrollTrigger to cleanup list
                    if (animation.scrollTrigger) {
                        triggers.push(animation.scrollTrigger);
                    }
                }

                const st = ScrollTrigger.create({
                    trigger: panel,
                    pin: panel,
                    scrub: 1,
                    start: "top 10%",
                    end: "bottom 65%",
                    endTrigger: ".project-panel-area",
                    pinSpacing: false,
                    markers: false,
                });

                triggers.push(st);
            });
        });

        return () => {
            mm.revert();
            triggers.forEach((st) => st.kill());
        };
    }, []);
};

export default useProjectPinScroll;