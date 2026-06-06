'use client';

import useGsapSmoother from "@/hooks/useGsapSmoother";
import useTextAnimation from "@/hooks/useTextAnimation";
import useClipMaskAnimation from "@/hooks/useClipMaskAnimation";
import useScaleGsapAnimation from "@/hooks/useScaleGsapAnimation";
import useImageRevealAnimation from "@/hooks/useImageRevealAnimation";

const ClientAnimations = () => {
    useGsapSmoother();
    useTextAnimation();
    useClipMaskAnimation();
    useScaleGsapAnimation();
    useImageRevealAnimation();

    return null;
};

export default ClientAnimations;