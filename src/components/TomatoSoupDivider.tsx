"use client";

const TomatoSoupDivider = () => {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden">
            {/* Parallax Background - Aromatic Sambar/Curry Close-up */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                style={{ 
                    backgroundImage: "url('/food/Sambar.jpg.webp')",
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/5"></div>
            </div>
        </section>
    );
};

export default TomatoSoupDivider;
