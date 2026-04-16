"use client";

const ARTICLES = [
    {
        image: "/food/Dosa-1.jpg.webp",
        category: "TRADITION",
        title: "The Golden Crepe: A History of the Perfect Dosa",
        description: "Explore the ancient origins and regional variations of South India's most beloved breakfast staple...",
    },
    {
        image: "/food/Beans-carrot-Poriyal-Thoran.jpg.webp",
        category: "INGREDIENTS",
        title: "Beyond Heat: Unraveling the Spices of the South",
        description: "From Tellicherry peppercorns to fresh curry leaves, discover the soul of Chettinad and Malabar flavors...",
    },
    {
        image: "/food/Appam.jpg.webp",
        category: "CULTURE",
        title: "The Master of the Appam: A Fermentation Story",
        description: "Step into the aromatic world of traditional coffee brewing and the dedicated craftsmanship of South Indian baristas...",
    }
];

const BlogSection = () => {
    return (
        <section className="section-padding bg-[#001B06] relative overflow-hidden">
            <div className="w-full px-12 lg:px-24 mx-auto">

                {/* Header */}
                <div className="mb-20 text-center lg:text-left">
                    <span className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-4 block font-serif">
                        THE ESSENCE OF HOSPITALITY
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#C1A88D] tracking-wider uppercase">
                        BEHIND THE SCENES
                    </h2>
                    <div className="w-full h-px bg-white/10 mt-12"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {ARTICLES.map((article, i) => (
                        <div key={i} className="flex flex-col group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
                            {/* Image Part */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="bg-[#EFEDE7] p-10 flex flex-col flex-grow text-black">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-4 font-serif block">
                                    {article.category}
                                </span>
                                <h3 className="text-2xl font-serif mb-6 leading-tight tracking-wide min-h-[64px]">
                                    {article.title}
                                </h3>
                                <p className="text-black/60 text-[14px] font-sans mb-10 leading-[22px] font-normal line-clamp-2">
                                    {article.description}
                                </p>
                                <div className="mt-auto border-t border-black/10 pt-6">
                                    <span className="text-[11px] tracking-[0.3em] uppercase font-bold hover:text-gold-600 transition-colors">
                                        READ THE ARTICLE
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
