"use client";

const CulinaryDivider = () => {
    return (
        <section className="relative h-[70vh] w-full overflow-hidden">
            {/* Parallax Background - Idli & Sambar Masterpiece */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                style={{ 
                    backgroundImage: "url('/food/Kerala-Prawn-Curry.jpg.webp')",
                    backgroundAttachment: 'fixed'
                }}
            >
            </div>
            {/* Minimalist Overlay to keep the focus on the dish */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="max-w-4xl px-6 text-center">
                    <span className="text-gold-500 text-[10px] tracking-[0.5em] uppercase mb-8 block font-serif font-bold animate-fade-in">
                        The Passion
                    </span>
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight tracking-wide drop-shadow-2xl mb-8">
                        "Bakasura is built on one simple belief: Food should mean something. It should remind you of home, family, and moments that become memories."
                    </h2>
                    <span className="text-gold-500 text-2xl md:text-3xl font-serif uppercase tracking-[0.3em] font-bold animate-pulse">
                        Come hungry. Leave legendary.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CulinaryDivider;
