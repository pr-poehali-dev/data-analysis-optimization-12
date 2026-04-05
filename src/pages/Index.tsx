import { useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Stars from "@/components/Stars";
import Prices from "@/components/Prices";
import HowTo from "@/components/HowTo";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  const pricesRef = useRef<HTMLDivElement>(null);
  const [activeGame, setActiveGame] = useState("pubg");

  const handleGameClick = (gameId: string) => {
    setActiveGame(gameId);
    pricesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured onGameClick={handleGameClick} />
      <Stars />
      <div ref={pricesRef}>
        <Prices activeGame={activeGame} onGameChange={setActiveGame} />
      </div>
      <HowTo />
      <FAQ />
      <Reviews />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;