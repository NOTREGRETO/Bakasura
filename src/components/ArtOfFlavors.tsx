"use client";

const CARDS = [
    {
        label: "THE JOURNEY",
        title: "Regional Roots",
        description: "Experience the fiery heat of Andhra and the aromatic depth of Telangana, brought to life through recipes passed down through generations.",
        image: "/food/Vada.jpg.webp"
    },
    {
        label: "THE SIGNATURES",
        title: "Southern Soul",
        description: "From the soul-stirring spices of Tamil Nadu to the rich, coconut-laden coasts of Kerala, each dish tells a story of tradition and pride.",
        image: "/food/Kerala-Prawn-Curry.jpg.webp"
    },
    {
        label: "THE COMFORT",
        title: "Karnataka Classics",
        description: "Find tradition in the comforting flavors of Karnataka, featuring our legendary Benne Dosas and deeply satisfying regional curries.",
        image: "/food/Coconut-Rice.jpg.webp"
    }
];

const ArtOfFlavors = () => {
    return (
        <section id="restaurant" className="bg-[#001B06] pt-32 pb-20">
            <div className="w-full px-12 lg:px-24 mx-auto">

                {/* Header */}
                <div className="mb-20 text-center lg:text-left">
                    <span className="text-gold-500 text-[10px] tracking-[0.4em] uppercase mb-4 block font-serif">
                        A Culinary Expedition
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#C1A88D] tracking-wider uppercase mb-8">
                        What is Bakasura
                    </h2>
                    <p className="text-white/80 text-xl lg:text-2xl font-serif max-w-4xl leading-relaxed italic border-l-2 border-gold-500/30 pl-8 mb-12">
                        Bakasura is not just a restaurant. It’s a collection of journeys, flavours, and moments — bringing together the heat of Andhra, the depth of Telangana, the soul of Tamil Nadu, the coast of Kerala, and the comfort of Karnataka.
                    </p>
                    <div className="w-full h-px bg-white/10 mt-12"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
                    {CARDS.map((card, i) => (
                        <div key={i} className="flex flex-col group transition-transform duration-500 hover:-translate-y-2">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            </div>
                            <div className="bg-[#EFEDE7] p-10 flex flex-col flex-grow text-black">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-3 font-serif block">
                                    {card.label}
                                </span>
                                <h3 className="text-3xl font-serif mb-6 leading-tight">
                                    {card.title}
                                </h3>
                                <p className="text-black/60 text-xs font-sans mb-10 leading-relaxed tracking-wide">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Integrated Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-16">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-4xl lg:text-5xl font-serif text-white/90 mb-2">2</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-serif">A Michelin Star Dining Experience</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-4xl lg:text-5xl font-serif text-white/90 mb-2">10,000+</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-serif">Satisfied Customers</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-4xl lg:text-5xl font-serif text-white/90 mb-2">28,000+</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-serif">Dishes Served</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-4xl lg:text-5xl font-serif text-white/90 mb-2">8</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-serif">Talented Chefs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArtOfFlavors;
