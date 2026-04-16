"use client";

import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/food/Dosa-1.jpg.webp",
  "/food/Appam.jpg.webp",
  "/food/Parotta.jpg.webp",
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
            {/* Background Slideshow - Optimized for Center Image Presence */}
            <div className="absolute inset-0 z-0">
                {HERO_IMAGES.map((img, index) => (
                    <div
                        key={img}
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-[4s] ease-in-out ${
                            index === currentImageIndex ? "opacity-30 scale-105" : "opacity-0 scale-100"
                        }`}
                        style={{
                            backgroundImage: `url('${img}')`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Central High-Impact Content */}
            <div className="relative z-10 text-center px-6 max-w-[90rem] mx-auto animate-fade-in pointer-events-none mt-10">
                <h1 className="text-[10rem] lg:text-[14rem] font-cursive leading-none select-none opacity-95 text-gold-500 uppercase tracking-tighter">
                    Bakasura
                </h1>
                
                <div className="flex flex-col items-center mt-8">
                    <span className="text-[12px] md:text-[14px] tracking-[0.5em] uppercase text-white/70 font-sans font-bold opacity-90 drop-shadow-2xl">
                        Feed The Beast
                    </span>
                </div>
            </div>

            {/* Side Navigation Indicators */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-12 z-20 pointer-events-none opacity-40">
                <button 
                   onClick={prevImage}
                   className="p-4 text-white text-5xl font-serif hover:text-gold-500 transition-all pointer-events-auto transform hover:scale-110"
                >
                   ‹
                </button>
                <button 
                   onClick={nextImage}
                   className="p-4 text-white text-5xl font-serif hover:text-gold-500 transition-all pointer-events-auto transform hover:scale-110"
                >
                   ›
                </button>
            </div>

            {/* Bottom Explore Branding */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-30 select-none">
                <div className="w-16 h-px bg-white/40 mb-4 animate-pulse"></div>
                <span className="text-[10px] tracking-[0.6em] uppercase text-gold-500 font-serif">Explore</span>
            </div>
            
        </section>
    );
};

export default Hero;
