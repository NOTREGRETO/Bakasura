import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChefPhilosophy from "@/components/ChefPhilosophy";
import SignatureDishes from "@/components/SignatureDishes";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import CulinaryParallax from "@/components/CulinaryParallax";
import BlogSection from "@/components/BlogSection";
import AdventureFaq from "@/components/AdventureFaq";
import CulinaryDivider from "@/components/CulinaryDivider";
import ArtOfFlavors from "@/components/ArtOfFlavors";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <ChefPhilosophy />
      
      <ArtOfFlavors />

      <CulinaryDivider />

      <SignatureDishes />
      
      <AdventureFaq />

      <BlogSection />

      <CulinaryParallax />
      
      <Reservation />
      <Footer />
    </main>
  );
}
