import React, { useState, useEffect } from 'react';
import LuxuryHero from './components/LuxuryHero';
import CollectionGrid from './components/CollectionGrid';
import ProductCard from './components/ProductCard';
import CraftsmanshipSection from './components/CraftsmanshipSection';

// Mock Data
const FEATURED_PRODUCTS = [
  {
    id: 'p1',
    name: 'The Ethereal Diamond Ring',
    category: 'Rings',
    price: 4500,
    imageUrl: 'https://picsum.photos/id/111/600/750',
    isNew: true,
  },
  {
    id: 'p2',
    name: 'Golden Horizon Necklace',
    category: 'Necklaces',
    price: 2800,
    imageUrl: 'https://picsum.photos/id/146/600/750',
  },
  {
    id: 'p3',
    name: 'Chronos Elite Watch',
    category: 'Watches',
    price: 12500,
    imageUrl: 'https://picsum.photos/id/175/600/750',
    isNew: true,
  },
  {
    id: 'p4',
    name: 'Sapphire Drop Earrings',
    category: 'Earrings',
    price: 3200,
    imageUrl: 'https://picsum.photos/id/26/600/750',
  },
];

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-luxury-black' : 'bg-transparent py-8 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex-1">
            <a href="#" className={`font-serif text-2xl md:text-3xl tracking-wide font-bold ${scrolled ? 'text-luxury-black' : 'text-white'}`}>
              Lumière
            </a>
          </div>

          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {['Collections', 'Maison', 'Services', 'Journal'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-xs uppercase tracking-widest font-semibold hover:text-luxury-gold transition-colors ${scrolled ? 'text-gray-800' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center space-x-6">
             <button aria-label="Search" className="hover:text-luxury-gold transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
               </svg>
             </button>
             <button aria-label="Cart" className="relative hover:text-luxury-gold transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
               </svg>
               {cartCount > 0 && (
                   <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-luxury-gold text-[8px] text-white">
                       {cartCount}
                   </span>
               )}
             </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <LuxuryHero />
        <CollectionGrid />
        <section className="py-24 px-6 md:px-12 bg-luxury-gray/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <span className="text-luxury-gold tracking-widest text-xs uppercase font-bold mb-2 block">Exclusive Selection</span>
                        <h2 className="font-serif text-4xl text-luxury-black">Latest Arrivals</h2>
                    </div>
                    <a href="#all" className="pb-1 border-b border-black text-xs uppercase tracking-widest hover:text-luxury-gold hover:border-luxury-gold transition-colors">
                        View All Products
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
        <CraftsmanshipSection />
      </main>

      <footer className="bg-white text-luxury-black pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <h3 className="font-serif text-3xl mb-6">Lumière</h3>
                <p className="text-gray-500 font-light max-w-sm mb-8">
                    An ode to beauty, precision, and the art of luxury. <br />
                    Designed for those who seek the exceptional.
                </p>
                <div className="flex space-x-4">
                    {['Instagram', 'Pinterest', 'Facebook'].map(social => (
                        <a key={social} href="#" className="text-xs uppercase tracking-widest text-gray-400 hover:text-luxury-gold transition-colors">{social}</a>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Customer Care</h4>
                <ul className="space-y-4">
                    {['Contact Us', 'Shipping & Returns', 'Size Guide', 'Jewelry Care'].map(link => (
                        <li key={link}>
                            <a href="#" className="text-gray-500 hover:text-luxury-black text-sm transition-colors font-light">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6">The Maison</h4>
                <ul className="space-y-4">
                    {['About Us', 'Sustainability', 'Careers', 'Press'].map(link => (
                        <li key={link}>
                            <a href="#" className="text-gray-500 hover:text-luxury-black text-sm transition-colors font-light">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
            <p>&copy; 2024 Lumière Fine Jewelry. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-luxury-black">Privacy Policy</a>
                <a href="#" className="hover:text-luxury-black">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
