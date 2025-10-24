import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export const Hero1: React.FC = () => {
  return (
    <div className="min-h-screen antialiased bg-[#111216] font-[Poppins]">
      <div className="  text-neutral-50 ">
        <Header />
        <main className="overflow-hidden">
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default Hero1;
