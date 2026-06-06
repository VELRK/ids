"use client";
import { useEffect } from "react";

export const useHoverRipple = <T extends HTMLElement>(
    btnRef: React.RefObject<T | null>,
    circleRef: React.RefObject<HTMLElement | null>
) => {
    useEffect(() => {
        const btn = btnRef.current;
        const circle = circleRef.current;

        if (!btn || !circle) return;

        const setPosition = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            circle.style.left = `${e.clientX - rect.left}px`;
            circle.style.top = `${e.clientY - rect.top}px`;
        };

        const onEnter = (e: MouseEvent) => {
            setPosition(e);
            circle.style.width = "300%";
            circle.style.height = "300%";
        };

        const onMove = (e: MouseEvent) => {
            setPosition(e);
        };

        const onLeave = () => {
            circle.style.width = "20px";
            circle.style.height = "20px";
        };

        btn.addEventListener("mouseenter", onEnter);
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);

        return () => {
            btn.removeEventListener("mouseenter", onEnter);
            btn.removeEventListener("mousemove", onMove);
            btn.removeEventListener("mouseleave", onLeave);
        };
    }, [btnRef, circleRef]);
};