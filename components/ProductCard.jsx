import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-luxury-gray mb-6">
        {product.isNew && (
            <span className="absolute top-4 left-4 z-10 bg-white/90 px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-luxury-black backdrop-blur-sm">
                New Arrival
            </span>
        )}
        
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Quick View Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <button className="product-gold-btn bg-white text-luxury-black px-8 py-3 uppercase text-xs tracking-widest font-semibold hover:bg-luxury-gold hover:text-white transition-colors duration-300 shadow-xl translate-y-4 group-hover:translate-y-0 transform transition-transform">
            Quick View
          </button>
        </div>
      </div>

      <div className="text-center space-y-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        <h3 className="font-serif text-lg text-luxury-black group-hover:text-luxury-gold transition-colors duration-300">
            {product.name}
        </h3>
        <p className="text-sm font-medium text-gray-900">
            ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
