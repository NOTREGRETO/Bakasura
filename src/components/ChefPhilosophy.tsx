"use client";

const ChefPhilosophy = () => {
    return (
        <section id="about" className="bg-[#001B06] py-24 flex items-center overflow-hidden" style={{ minHeight: "706.516px" }}>
            <div className="max-w-[1905px] mx-auto px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center rounded-none w-full">
                
                {/* Left Side: Content */}
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col space-y-2">
                        <span className="text-gold-500/50 text-[10px] tracking-[0.5em] uppercase font-bold">Feed The Beast</span>
                        <h2 className="text-3xl lg:text-4xl font-serif text-gold-500 leading-[1.2] tracking-wide uppercase max-w-lg">
                            From Memories to a Mission
                        </h2>
                    </div>
                    
                    <div className="flex flex-col space-y-6">
                        <p className="text-white/80 text-[16px] leading-[1.8] font-light font-sans max-w-xl italic">
                            "There’s a certain kind of hunger we all remember. Not the kind you fix with a quick bite — but the kind that builds slowly through the week, waiting for something special. For me, it was always Sunday. My father would walk in with a small parcel — just a quarter kilo of mutton curry. And somehow, it was enough for four of us. Enough to turn an ordinary afternoon into a celebration."
                        </p>
                        
                        <div className="flex items-start space-x-6 pt-4 border-t border-white/10">
                            <div className="flex-shrink-0 pt-1">
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-gold-500/30">
                                    <img 
                                        src="https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=200&q=80&sig=chef" 
                                        alt="Founder Story" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                                <p className="text-gold-500/90 text-[14px] leading-relaxed font-normal font-sans uppercase tracking-[0.1em] max-w-md">
                                    Years later, that same hunger took me across South India — from the fiery kitchens of Andhra and Telangana to the spice-laden homes of Tamil Nadu, the coastal flavours of Kerala, and the comforting traditions of Karnataka.
                                </p>
                                <div className="flex flex-col">
                                    <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase">The Journey</span>
                                    <p className="text-white italic text-lg mt-1 font-serif leading-relaxed">
                                        "I didn’t travel as a chef. I travelled as someone chasing a feeling — the kind of food made with honesty, memory, and pride."
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Singular Focused Visual (Zero-Clipping) */}
                <div className="relative group flex items-center justify-center h-full w-full">
                    <div className="w-[95%] lg:w-[90%] h-[600px] lg:h-[650px] overflow-hidden flex items-center justify-center">
                        <img 
                            src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=80&sig=mehfil_biryani" 
                            alt="Mehfil Hyderabadi Biryani" 
                            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        />
                    </div>
                </div>

            </div>
            
            <style jsx>{`
                .font-cursive {
                    font-family: var(--font-sans);
                    font-style: italic;
                }
            `}</style>
        </section>
    );
};

export default ChefPhilosophy;
