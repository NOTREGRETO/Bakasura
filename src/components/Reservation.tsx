"use client";

import { useState } from "react";

const Reservation = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your reservation inquiry! We will contact you shortly.");
    };

    return (
        <section id="contact" className="section-padding bg-[#001B06] relative overflow-hidden py-32">
            <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
                
                {/* Header */}
                <span className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-6 font-serif block text-center">
                    A Warm Welcome
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#C1A88D] mb-16 tracking-[0.15em] text-center uppercase">
                    MAKE A RESERVATION
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                    <div className="flex flex-col">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="bg-white/10 border border-white/80 px-6 py-5 text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/30 font-serif tracking-widest text-sm"
                            required 
                        />
                    </div>
                    <div className="flex flex-col">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="bg-white/10 border border-white/80 px-6 py-5 text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/30 font-serif tracking-widest text-sm"
                            required 
                        />
                    </div>
                    <div className="flex flex-col">
                        <input 
                            type="tel" 
                            placeholder="Phone" 
                            className="bg-white/10 border border-white/80 px-6 py-5 text-white focus:border-gold-500 transition-colors focus:outline-none placeholder:text-white/30 font-serif tracking-widest text-sm"
                            required 
                        />
                    </div>

                    <div className="flex items-center space-x-3 pt-4 justify-center">
                        <input 
                            type="checkbox" 
                            id="privacy_res"
                            className="w-4 h-4 accent-gold-500 bg-transparent border-white/20"
                            required
                        />
                        <label htmlFor="privacy_res" className="text-[11px] text-white/40 font-serif tracking-widest uppercase">
                            I have read and I understand <a href="#" className="underline text-[#C1A88D]">data privacy notice</a>
                        </label>
                    </div>

                    <div className="flex justify-center pt-10">
                        <button type="submit" className="bg-[#C1A88D] text-[#050B05] px-16 py-4 uppercase tracking-[0.3em] font-serif hover:bg-gold-600 transition-all text-xs font-bold shadow-2xl">
                            SUBMIT REQUEST
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Reservation;
