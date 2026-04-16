"use client";

import { useState } from "react";

const FAQ_ITEMS = [
    {
        question: "HOW FAR IN ADVANCE SHOULD I MAKE A RESERVATION?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
        question: "CAN I MEET THE CHEF OR TAKE A KITCHEN TOUR?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
        question: "ARE DIETARY RESTRICTIONS AND ALLERGIES ACCOMMODATED?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    }
];

const AdventureFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section-padding bg-[#001B06] relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* Text Content */}
                <div className="flex flex-col space-y-12">
                    <h2 className="text-3xl lg:text-4xl font-serif text-[#C1A88D] leading-tight tracking-wider uppercase">
                        PREPARE TO EMBARK ON <br />
                        A CULINARY ADVENTURE <br />
                        WHERE TRADITION MEETS <br />
                        INNOVATION
                    </h2>

                    <div className="space-y-4">
                        {FAQ_ITEMS.map((item, i) => (
                            <div key={i} className="border border-white/20 group hover:border-gold-500/50 transition-colors">
                                <button 
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                                >
                                    <span className="text-[11px] font-serif tracking-[0.2em] text-white/90 uppercase">
                                        {item.question}
                                    </span>
                                    <svg 
                                        className={`w-3.5 h-3.5 text-white/40 group-hover:text-gold-500 transition-transform duration-500 ${openIndex === i ? "rotate-180" : ""}`} 
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div 
                                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <p className="text-white/40 text-[14px] font-sans leading-normal font-normal tracking-normal">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-[14px] text-white/40 font-sans leading-normal font-normal tracking-normal uppercase">
                        Still have any questions? <a href="#contact" className="text-white border-b border-white hover:text-gold-500 hover:border-gold-500 transition-all font-bold ml-1">Contact Us</a>
                    </p>
                </div>

                {/* Right Side: Singular Focused Visual (Zero-Clipping) */}
                <div className="relative group flex items-center justify-end h-full w-full">
                    <div className="w-[95%] lg:w-[90%] h-[600px] lg:h-[650px] overflow-hidden flex items-center justify-center">
                        <img 
                            src="/food/thali.webp" 
                            alt="The Best South Indian Thali" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdventureFaq;
