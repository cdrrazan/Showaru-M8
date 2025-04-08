
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen font-outfit">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Reviews />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
