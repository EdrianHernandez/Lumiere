import React from 'react';

const LuxuryHero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/433/1920/1080"
          alt="Luxury Jewelry Model"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
          New Collection 2024
        </h2>
        <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight fade-in-up" style={{ animationDelay: '0.3s' }}>
          Elegance <span className="italic">Redefined</span>
        </h1>
        <p className="text-white/90 max-w-lg text-lg md:text-xl font-light mb-10 fade-in-up" style={{ animationDelay: '0.5s' }}>
          Discover the essence of timeless beauty with our handcrafted selection of fine jewelry and horology.
        </p>
        <button className="fade-in-up group relative px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300" style={{ animationDelay: '0.7s' }}>
          <span className="relative z-10 tracking-widest text-sm uppercase font-semibold">Explore The Atelier</span>
        </button>
      </div>
    </section>
  );
};

export default LuxuryHero;