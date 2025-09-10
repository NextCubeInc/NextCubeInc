import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero />
      <Products />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;