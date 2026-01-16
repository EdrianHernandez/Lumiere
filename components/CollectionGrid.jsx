import React from 'react';

const collections = [
  {
    id: 'c1',
    title: 'Rings',
    imageUrl: 'https://picsum.photos/id/353/800/1000',
    link: '#rings'
  },
  {
    id: 'c2',
    title: 'Necklaces',
    imageUrl: 'https://picsum.photos/id/366/800/1000',
    link: '#necklaces'
  },
  {
    id: 'c3',
    title: 'Watches',
    imageUrl: 'https://picsum.photos/id/175/800/1000',
    link: '#watches'
  }
];

const CollectionGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-luxury-gold tracking-widest text-xs uppercase font-bold mb-2 block">Curated For You</span>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-black">Our Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <a href={collection.link} key={collection.id} className="group collection-wrapper relative block overflow-hidden cursor-pointer h-[500px]">
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={collection.imageUrl}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 items-center text-center">
                 <h3 className="text-white font-serif text-3xl md:text-4xl italic group-hover:-translate-y-2 transition-transform duration-500">
                   {collection.title}
                 </h3>
                 <span className="text-white/0 group-hover:text-white/100 text-xs tracking-widest uppercase mt-4 border-b border-white pb-1 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                   View Collection
                 </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
