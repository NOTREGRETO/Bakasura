"use client";

import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-dark-bg relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* About Image Container */}
        <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Main Image */}
          <div className="relative group overflow-hidden z-10 aspect-[4/5]">
            <img 
              src="/food/Appam.jpg.webp" 
              alt="Bakasura Gastronomy" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100"
            />
          </div>

          {/* Secondary "Detail" Image */}
          <div className="absolute -bottom-12 -right-12 w-1/2 aspect-square z-20 hidden md:block animate-float">
             <div className="relative w-full h-full p-2 bg-dark-bg pointer-events-none">
                <img 
                    src="/food/Coconut-Rice.jpg.webp" 
                    alt="Signature Detail" 
                    className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        {/* About Content */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className={`${isVisible ? "reveal-visible" : "reveal-hidden"}`} style={{ transitionDelay: "200ms" }}>
            <span className="text-gold-500 text-xs tracking-[0.4rem] uppercase mb-4 font-serif block">
              The Essence of Hospitality
            </span>
            <div className="title-accent !mb-8"></div>
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl font-serif text-white mb-8 tracking-wider leading-tight ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
            style={{ transitionDelay: "400ms" }}
          >
             THE ART OF <br /> 
             <span className="text-gold-400 italic lowercase font-normal ml-0 md:ml-12 font-serif">refined</span> 
             <span className="text-gold-500"> flavors</span>
          </h2>
          
          <p 
            className={`text-white/60 text-[14px] leading-[22px] font-normal tracking-normal mb-12 font-sans max-w-xl ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
            style={{ transitionDelay: "600ms" }}
          >
             Our expert culinary artisans meticulously curate a narrative that showcases a harmonious blend of traditional heritage and avant-garde technique, resulting in extraordinary sensory profiles.
          </p>

          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 gap-10 w-full mb-12 ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex flex-col space-y-4 group">
              <h4 className="text-gold-500 text-sm tracking-[0.3em] font-serif border-b border-gold-500/20 pb-3 transition-colors group-hover:border-gold-500">
                CURATED APERITIFS
              </h4>
              <p className="text-white/40 text-[14px] leading-[22px] font-normal tracking-normal">
               An exquisite selection hand-crafted to awaken your senses and prepare the palate for the journey ahead.
              </p>
            </div>
            
             <div className="flex flex-col space-y-4 group">
              <h4 className="text-gold-500 text-sm tracking-[0.3em] font-serif border-b border-gold-500/20 pb-3 transition-colors group-hover:border-gold-500">
                SIGNATURE MASTERPIECES
              </h4>
               <p className="text-white/40 text-[14px] leading-[22px] font-normal tracking-normal">
                Where the rarest seasonal ingredients meet precision techniques to create timeless culinary art.
              </p>
            </div>
          </div>

          <div 
            className={`flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10 p-8 border border-white/5 bg-white/[0.02] rounded-sm w-full lg:w-auto ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex flex-col items-center">
                <div className="flex space-x-1 mb-2">
                    {[1, 2].map((i) => (
                        <span key={i} className="text-gold-500 text-2xl">★</span>
                    ))}
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-serif">Michelin Stars</span>
            </div>
            <div className="h-16 w-[1px] bg-white/10 hidden sm:block"></div>
            <div className="text-center sm:text-left">
                <p className="text-sm tracking-[0.2em] font-serif text-white/50 uppercase leading-loose">
                Recognized for <br /> 
                <span className="text-gold-500 text-base">Unmatched Excellence</span>
                </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
