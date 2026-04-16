import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPage = () => {
    const articles = [
        {
            title: "The Golden Crepe: A History of the Perfect Dosa",
            category: "Restaurants",
            desc: "Explore the ancient origins and regional variations of South India's most beloved breakfast staple...",
            img: "https://images.unsplash.com/photo-1542310503-5240294e0984?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "South Indian Spice trail: Unraveling the Soul of Flavors",
            category: "History",
            desc: "Step into a world where food is not just nourishment but an expression of a thousand-year-old spice trade...",
            img: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "A journey into the world of Filter Coffee rituals",
            category: "Gastronomy",
            desc: "Prepare to tantalize your senses as we delve into the authentic hand-pulled coffee brewing tradition of the South...",
            img: "https://images.unsplash.com/photo-1662116765994-1e07f0c97690?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            
            <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24 bg-dark-bg">
                <div className="max-w-7xl mx-auto">
                    <span className="text-gold-500 text-xs tracking-[0.4em] uppercase mb-6 font-serif block">Behind the Scenes</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-12 uppercase tracking-widest italic">
                        CULINARY <span className="text-gold-500">insights</span>
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
                        {articles.map((article, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 border border-white/10">
                                    <div className="absolute top-4 left-4 z-10 glass px-4 py-1 text-[8px] uppercase tracking-widest text-gold-500">
                                        {article.category}
                                    </div>
                                    <img 
                                        src={article.img} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s]"
                                    />
                                </div>
                                <h3 className="text-xl font-serif text-white group-hover:text-gold-500 transition-colors uppercase leading-snug tracking-wider mb-4">
                                    {article.title}
                                </h3>
                                <p className="text-white/40 text-sm font-sans mb-6">
                                    {article.desc}
                                </p>
                                <span className="text-xs text-gold-500 uppercase tracking-widest flex items-center group-hover:translate-x-4 transition-transform duration-500">
                                    Read the article <span className="ml-4 text-white">→</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPage;
