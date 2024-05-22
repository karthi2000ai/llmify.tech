"use client";

import { useEffect } from "react";
import Image from "next/image";
import Particles from "./particles";

import Client01 from "@/public/images/client-01.svg";
import Client02 from "@/public/images/client-02.svg";
import Client03 from "@/public/images/client-03.svg";
import Client04 from "@/public/images/client-04.svg";
import Client05 from "@/public/images/client-05.svg";
import Client06 from "@/public/images/client-06.svg";
import Client07 from "@/public/images/client-07.svg";
import Client08 from "@/public/images/client-08.svg";
import Client09 from "@/public/images/client-09.svg";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay]);

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
          </div>
        </div>
      </div>
    </section>
  );
}
