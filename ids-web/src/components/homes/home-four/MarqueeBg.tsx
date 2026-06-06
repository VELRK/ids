"use client";

import { useEffect } from "react";
import Image from "next/image";

import bg_img from "@/assets/img/home-4/hero/bg.jpg";
import bg_img2 from "@/assets/img/home-4/hero/ball.png";
import star from "@/assets/img/home-4/hero/star-2.png";

interface DataType {
  id: number;
  text: string[];
}

const text_data: DataType[] = [
  { id: 1, text: ["Consulting", "Technology", "Innovation"] },
  { id: 2, text: ["Consulting", "Technology", "Innovation"] },
  { id: 3, text: ["Consulting", "Technology", "Innovation"] },
  { id: 4, text: ["Consulting", "Technology", "Innovation"] },
  { id: 5, text: ["Consulting", "Technology", "Innovation"] },
];

const MarqueeBg = () => {
  useEffect(() => {
    const marqueegroup = document.querySelectorAll<HTMLDivElement>(".marquee-group");

    marqueegroup.forEach((box) => {
      const hoverImg = box.querySelector<HTMLDivElement>(".hover-image");
      if (!hoverImg) return;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(10deg)`;
      };

      const handleMouseLeave = () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
        hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
      };

      box.addEventListener("mousemove", handleMouseMove);
      box.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        box.removeEventListener("mousemove", handleMouseMove);
        box.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div
      className="marque-bg-section-4 bg-cover"
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="marquee">
        {text_data.map((item) => (
          <div key={item.id} className="marquee-group">
            <div
              className="hover-image bg-cover"
              style={{ backgroundImage: `url(${bg_img2.src})` }}
            ></div>
            {item.text.map((text, index) => (
              <div key={index} className="text">
                <Image src={star} alt="star icon" />
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBg;
