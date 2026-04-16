import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#001B06] py-24 px-6 md:px-12 lg:px-24 text-white font-serif">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-[11px] uppercase tracking-[0.2em] px-10">
                
                {/* Contact Info */}
                <div className="flex flex-col space-y-8">
                    <h4 className="text-white font-extrabold mb-4">CONTACT INFO</h4>
                    <div className="flex flex-col space-y-6">
                        <a href="tel:+123456789" className="flex items-center space-x-3 text-white font-semibold hover:text-white transition-colors group">
                            <svg className="w-3.5 h-3.5 text-gold-500/80 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                            </svg>
                            <span>CALL +123 456 789</span>
                        </a>
                        <a href="mailto:info@bakasura.com" className="flex items-center space-x-3 text-white font-semibold hover:text-white transition-colors group">
                            <svg className="w-3.5 h-3.5 text-gold-500/80 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17V17M17,13H7V11H17V13M17,9H7V7H17V9Z" />
                            </svg>
                            <span>INFO@BAKASURA.COM</span>
                        </a>
                    </div>
                </div>

                {/* Menu */}
                <div className="flex flex-col space-y-8">
                    <h4 className="text-white font-extrabold mb-4">MENU</h4>
                    <nav className="flex flex-col space-y-4 text-white font-semibold">
                        <Link href="/" className="hover:text-gold-500 transition-colors">HOME</Link>
                        <Link href="#about" className="hover:text-gold-500 transition-colors">ABOUT US</Link>
                        <Link href="#restaurant" className="hover:text-gold-500 transition-colors">RESTAURANT</Link>
                        <Link href="#signature-dishes" className="hover:text-gold-500 transition-colors">SIGNATURE DISHES</Link>
                        <Link href="/blog" className="hover:text-gold-500 transition-colors">BLOG</Link>
                        <Link href="#contact" className="hover:text-gold-500 transition-colors">CONTACT US</Link>
                    </nav>
                </div>

                {/* Locations */}
                <div className="flex flex-col space-y-8">
                    <div>
                        <h4 className="text-white font-extrabold mb-4">MILANO</h4>
                        <div className="flex flex-col space-y-2 text-white/80 font-sans font-bold tracking-wide normal-case text-[12px]">
                            <span>Monday - Saturday 12AM - 12PM</span>
                            <span>Sunday 15AM - 11PM</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-extrabold mb-4">AMSTERDAM</h4>
                        <div className="flex flex-col space-y-2 text-white/80 font-sans font-bold tracking-wide normal-case text-[12px]">
                            <span>Monday - Saturday 12AM - 12PM</span>
                            <span>Sunday 15AM - 11PM</span>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col space-y-8">
                    <h4 className="text-white font-extrabold mb-4 uppercase">Subscribe to Newsletter</h4>
                    <form className="flex group">
                        <input 
                            type="email" 
                            placeholder="Your email" 
                            className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none w-full text-[12px] font-sans tracking-tight placeholder:text-white/20"
                        />
                        <button type="submit" className="bg-[#C1A88D] px-6 py-3 flex items-center justify-center transition-colors hover:bg-gold-600">
                             <svg className="w-4 h-4 text-[#050B05]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                             </svg>
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-20 animate-fade-in" style={{ animationDelay: "1s" }}></div>

            <div className="flex flex-col items-center justify-center text-center space-y-12">
                <div className="flex flex-col space-y-4">
                    <span className="text-gold-500 font-serif italic text-2xl lg:text-3xl tracking-wide opacity-80">Come hungry.</span>
                    <span className="text-white font-serif uppercase text-3xl lg:text-4xl tracking-[0.2em] font-bold">Leave legendary.</span>
                </div>

                <div className="relative pt-12">
                    <img 
                        src="/logo.png" 
                        alt="Bakasura Logo" 
                        className="h-20 lg:h-32 w-auto object-contain opacity-90 mx-auto"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-500/30"></div>
                </div>

                <div className="flex flex-col space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                    <span>©2026 Bakasura. All rights reserved.</span>
                    <span>Powered by <span className="text-white font-extrabold">BAKASURA CULINARY GROUP</span></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
