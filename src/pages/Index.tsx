import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Stars from "@/components/Stars";
import Prices from "@/components/Prices";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Stars />
      <Prices />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;