"use client";

const DISHES = [
    {
        name: "BENNE DOSA",
        desc: "BENGALURU'S LEGENDARY BUTTER DOSA - CRISP ON THE OUTSIDE, FLUFFY INSIDE, SERVED WITH SPICY POTATO PALYA",
        img: "/food/Dosa-1.jpg.webp"
    },
    {
        name: "HUNTER’S LAMB ROAST",
        desc: "A FIERY AND TENDER SLOW-COOKED LAMB ROAST, INFUSED WITH RUSTIC SPICES FROM THE HEARTLANDS",
        img: "/food/Parotta.jpg.webp"
    },
    {
        name: "GHEE PODI IDLI",
        desc: "IYENGAR STYLE SOFT STEAMED IDLIS GENEROUSLY COATED WITH AROMATIC GHEE AND TRADITIONAL GUNPOWDER SPICE",
        img: "/food/Appam.jpg.webp"
    },
    {
        name: "BANANA LEAF FISH",
        desc: "FRESH COASTAL FISH MARINATED IN VERMILION SPICES, WRAPPED IN BANANA LEAF AND PAN-SEARED TO PERFECTION",
        img: "/food/Kerala-Prawn-Curry.jpg.webp"
    },
    {
        name: "MADURAI MEENAKSHI BHOJANAM",
        desc: "A GRAND WEEKEND FEAST CELEBRATING THE TEMPLE CITY'S CULINARY HERITAGE WITH AUTHENTIC SIDES AND CURRIES",
        img: "/food/Pongal.jpg.webp"
    },
    {
        name: "THALAIVA VIRUNDHU",
        desc: "THE ULTIMATE DINDIGUL BIRYANI EXPERIENCE, FEATURING SEASONAL SEERAGA SAMBA RICE AND SUCCULENT MEAT",
        img: "/food/Patrode.jpg.webp"
    },
    {
        name: "ANNA’S VILLAGE DAWAT",
        desc: "A DEEPLY COMFORTING VILLAGE-STYLE FEAST FEATURING RUSTIC CURRIES, HAND-POUNDED SPICES, AND TRADITIONAL GRAINS",
        img: "/food/Vada.jpg.webp"
    },
    {
        name: "KERALA APPAM BAR",
        desc: "LACY, FERMENTED RICE CREPES WITH VEGETABLE STEW OR COCONUT MILK - A COASTAL CLASSIC INSPIRED BY KERALA HOMES",
        img: "/food/Appam.jpg.webp"
    },
    {
        name: "REGIONAL BIRYANI",
        desc: "OUR WEEKLY CHANGING SPECIAL — FROM THE FIERY KITCHENS OF ANDHRA TO THE SPICE-LADEN HOMES OF TAMIL NADU",
        img: "/food/Kerala-Prawn-Curry.jpg.webp"
    }
];

const SignatureDishes = () => {
    return (
        <section id="signature-dishes" className="bg-[#EFEDE7] py-16 sm:py-20">
            <div className="w-full px-4 lg:px-10 mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
                    <span className="text-black/40 text-[10px] tracking-[0.4em] uppercase mb-4 font-serif">
                        Crafted with Honesty & Memory
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black tracking-[0.1em] uppercase mb-8">
                        The Food Story
                    </h2>
                    <p className="text-black/60 text-lg lg:text-xl font-sans leading-relaxed">
                        From Benne Dosas of Bengaluru to Iyengar Ghee Podi Idlis, from Appam bars inspired by Kerala to
                        weekly regional biryanis — every dish is crafted to tell a story. 
                        Our signature highlights include <span className="text-black font-semibold italic">Hunter’s Lamb Roast</span>, <span className="text-black font-semibold italic">Banana Leaf Fried Fish</span>, and deeply comforting 
                        South Indian curries.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-4 mb-24">
                    {DISHES.slice(0, 4).map((dish, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden group shadow-lg">
                            <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent opacity-80"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
                            <div className="absolute top-8 left-8 right-8 z-10">
                                <h3 className="text-white text-xl font-serif tracking-[0.1em] uppercase">{dish.name}</h3>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <p className="text-white/90 text-[14px] leading-[22px] font-normal uppercase font-sans">{dish.desc}</p>
                            </div>
                        </div>
                    ))}
                    {/* Filling the row if needed, or just letting it wrap */}
                </div>

                {/* Weekend Feasts Subsection */}
                <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto border-t border-black/5 pt-20">
                    <span className="text-gold-600 text-[10px] tracking-[0.4em] uppercase mb-4 font-serif font-bold">
                        The Ultimate Celebration
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-black tracking-[0.1em] uppercase mb-8">
                        Weekend Feasts
                    </h2>
                    <p className="text-black/60 text-lg lg:text-xl font-sans leading-relaxed italic">
                        Madurai Meenakshi Bhojanam, Thalaiva Virundhu with Dindigul Biryani, and Anna’s Village Style Dawat — 
                        each feast is designed to bring people together.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-4">
                    {DISHES.slice(4).map((dish, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden group shadow-lg border-2 border-gold-500/10 hover:border-gold-500/30 transition-colors">
                            <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-8 left-8 right-8 z-10 text-center">
                                <span className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">Weekend Special</span>
                                <h3 className="text-white text-2xl font-serif tracking-[0.1em] uppercase">{dish.name}</h3>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 z-10 text-center">
                                <p className="text-white/90 text-[14px] leading-[22px] font-normal uppercase font-sans">{dish.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
