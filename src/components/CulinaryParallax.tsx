"use client";

const CulinaryParallax = () => {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden">
            {/* Parallax Background - Roasted Culinary Masterpiece */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                style={{ 
                    backgroundImage: "url('/food/Pongal.jpg.webp')",
                    backgroundAttachment: 'fixed'
                }}
            >
            </div>
        </section>
    );
};

export default CulinaryParallax;
