"use client";

import { useState, useEffect } from "react";

const AMBIANCE_IMAGES = [
  "/food/Sambar.jpg.webp",
  "/food/Idli.jpg.webp",
  "/food/Vada.jpg.webp",
  "/food/Puttu.jpg.webp",
  "/food/Beans-carrot-Poriyal-Thoran.jpg.webp",
];

const Ambiance = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % AMBIANCE_IMAGES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section-padding bg-dark-bg border-y border-white/5 relative overflow-hidden">
            {/* Ambient Background Slideshow */}
            <div className="absolute inset-0 z-0">
                {AMBIANCE_IMAGES.map((img, index) => (
                    <div
                        key={img}
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-[3s] ease-in-out ${
                            index === currentIndex ? "opacity-20 scale-105" : "opacity-0 scale-100"
                        }`}
                        style={{
                            backgroundImage: `url('${img}')`,
                            filter: "grayscale(10%)", // Removed blur as requested
                        }}
                    ></div>
                ))}
                 {/* Backgroud Images with direct opacity control */}
            </div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                <div className="flex flex-col space-y-8 order-2 lg:order-1 px-8 lg:px-0 text-center lg:text-left">
                    <span className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-6 font-serif block">The Experience</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-wide uppercase italic">
                        THE ESSENCE <span className="text-gold-500">OF HOSPITALITY</span>
                    </h2>
                    <div className="space-y-6 text-white/50 text-[14px] font-sans leading-[22px] font-normal tracking-normal">
                        <p>
                            Beyond the meticulously crafted dishes, the essence of Bakasura lies in the choreography of service, the warmth of the ambiance, and the soul infused into every detail.
                        </p>
                        <p>
                            Our team of dedicated professionals from around the globe brings a wealth of experience to create a narrative that goes beyond dining. 
                        </p>
                    </div>
                    <div className="pt-8 flex justify-center lg:justify-start">
                         <a href="#contact" className="btn-outline group relative overflow-hidden">
                            <span className="relative z-10">Discover Our Vision</span>
                         </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="relative aspect-[4/5] overflow-hidden group rounded-none">
                         <img 
                            src="https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80" 
                            alt="Chef Arun Natarajan" 
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]"
                         />
                         <div className="absolute bottom-12 left-12">
                            <span className="text-white text-3xl font-serif mb-2 block uppercase tracking-widest">Arun Natarajan</span>
                            <span className="text-gold-500 text-sm tracking-[0.3em] font-serif uppercase">Executive Chef</span>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ambiance;
