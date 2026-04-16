const Stats = () => {
    const stats = [
        { value: "50+", label: "Authentic Coastal Recipes" },
        { value: "10,000+", label: "satisfied customers" },
        { value: "100+", label: "Tranditional Spices Used" },
        { value: "12", label: "Expert Culinary Artisans" }
    ];

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-dark-bg border-y border-white/5 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-4">
                        <div className="h-0.5 w-12 bg-gold-500/30 mb-2"></div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-500 tracking-wider">
                            {stat.value}
                        </h2>
                        <span className="text-xs uppercase tracking-[0.3em] font-serif text-white/50 px-6">
                            {stat.label}
                        </span>
                        <div className="h-0.5 w-12 bg-gold-500/30 mt-2"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
