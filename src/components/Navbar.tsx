"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? "bg-black/80 py-4" : "bg-transparent py-8"
        }`}>
            <div className="max-w-[1800px] mx-auto px-10 flex items-center justify-between">
                
                {/* Left: Phone */}
                <div className="flex-1 flex items-center justify-start">
                    <div className="flex items-center space-x-2 text-white/80 text-[10px] tracking-[0.25em] uppercase font-serif">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>CALL +123 456 789</span>
                    </div>
                </div>

                {/* Center: Navigation + Signature */}
                <div className="hidden lg:flex flex-shrink-0 items-center justify-center space-x-12">
                    <Link href="/" className="text-[11px] tracking-[0.4em] uppercase text-white/90 font-sans hover:text-gold-500 transition-colors">HOME</Link>
                    <Link href="#about" className="text-[11px] tracking-[0.4em] uppercase text-white/90 font-sans hover:text-gold-500 transition-colors">ABOUT US</Link>
                    <Link href="#restaurant" className="text-[11px] tracking-[0.4em] uppercase text-white/90 font-sans hover:text-gold-500 transition-colors">RESTAURANT</Link>

                    {/* Signature Logo */}
                    <Link href="/" className="flex flex-col items-center px-4">
                        <img 
                            src="/logo.png" 
                            alt="Bakasura Logo" 
                            className="h-16 lg:h-28 w-auto object-contain opacity-90 transition-transform hover:scale-105 duration-300"
                        />
                    </Link>

                    <Link href="#signature-dishes" className="text-[11px] tracking-[0.4em] uppercase text-white/90 font-sans hover:text-gold-500 transition-colors">SIGNATURE DISHES</Link>
                    <Link href="#contact" className="text-[11px] tracking-[0.4em] uppercase text-white/90 font-sans hover:text-gold-500 transition-colors">CONTACT US</Link>
                </div>

                {/* Mobile Signature Box (Visible only on smaller screens) */}
                <div className="lg:hidden flex-shrink-0 flex items-center justify-center">
                    <Link href="/" className="flex flex-col items-center px-4">
                        <img 
                            src="/logo.png" 
                            alt="Bakasura Logo" 
                            className="h-16 w-auto object-contain opacity-90 transition-transform hover:scale-105 duration-300"
                        />
                    </Link>
                </div>

                {/* Right: Reservation + Hamburger */}
                <div className="flex-1 flex items-center justify-end space-x-4">
                    <Link href="#contact" className="hidden sm:block px-10 py-4 bg-[#C1A88D] text-white text-[11px] tracking-[0.4em] uppercase transition-all hover:bg-[#A68D70] font-serif shadow-xl">
                        MAKE A RESERVATION
                    </Link>
                    
                    {/* Mobile Hamburger Menu Toggle */}
                    <button 
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M12 12h8M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="absolute inset-0 bg-[#050B05]/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 px-10 text-center">
                    <button 
                        className="absolute top-10 right-10 text-white p-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="text-white text-2xl tracking-[0.3em] font-serif uppercase" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="#about" className="text-white text-2xl tracking-[0.3em] font-serif uppercase" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        <Link href="#restaurant" className="text-white text-2xl tracking-[0.3em] font-serif uppercase" onClick={() => setIsMenuOpen(false)}>Restaurant</Link>
                        <Link href="#signature-dishes" className="text-white text-2xl tracking-[0.3em] font-serif uppercase" onClick={() => setIsMenuOpen(false)}>Signature Dishes</Link>
                        <Link href="#contact" className="text-white text-2xl tracking-[0.3em] font-serif uppercase" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </div>

                    <div className="pt-10 border-t border-white/10 w-full flex flex-col items-center space-y-4">
                        <img 
                            src="/logo.png" 
                            alt="Bakasura Logo" 
                            className="h-24 w-auto object-contain opacity-90"
                        />
                        <Link 
                            href="#contact" 
                            className="w-full px-10 py-5 bg-[#C1A88D] text-white text-[12px] tracking-[0.4em] uppercase text-center font-serif"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Make A Reservation
                        </Link>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .font-cursive {
                    font-family: var(--font-sans);
                    font-style: italic;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
