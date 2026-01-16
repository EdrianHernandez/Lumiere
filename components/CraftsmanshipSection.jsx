import React from 'react';

const CraftsmanshipSection = () => {
  return (
    <section className="bg-luxury-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <span className="text-luxury-gold tracking-[0.2em] text-xs uppercase font-bold">
            The Atelier
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Unparalleled <br/>
            <span className="italic text-gray-400">Craftsmanship</span>
          </h2>
          <p className="text-gray-300 font-light leading-relaxed text-lg">
            Every piece in our collection is a testament to the artistry of our master jewelers. 
            We source only the rarest gemstones and ethically mined metals, ensuring that each 
            creation is not just an accessory, but a legacy piece designed to be cherished for generations.
          </p>
          <div className="pt-4">
             <a href="#about" className="inline-block border-b border-luxury-gold text-luxury-gold pb-1 text-sm tracking-widest uppercase hover:text-white hover:border-white transition-colors duration-300">
                Read Our Story
             </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 border border-luxury-gold/30 rounded-sm translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
                src="https://picsum.photos/id/250/800/1000" 
                alt="Jeweler working on a ring" 
                className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
