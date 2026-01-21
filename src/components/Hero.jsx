import React from 'react';

const Hero = () => {
  return (
    <header className="relative bg-black h-[600px] md:h-[650px] overflow-hidden flex items-center">
      <img
        src="./assets/b1.jpg"
        alt="Headphones"
        className="absolute w-full h-full inset-0 object-cover opacity-60"
      />
      
      {/* Gradient overlay to ensure text readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>
      
      <div className="container relative z-10 text-white mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block bg-boatRed text-white px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-widest">
            Best Seller
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            PLUG INTO <br /><span className="text-boatRed">NIRVANA</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 font-light">
            Experience the sound of champions. 50H Playback, ASAP Charge, and Enthralling Bass.
          </p>
          <div className="flex gap-4">
            <button className="bg-boatRed hover:bg-red-700 text-white rounded-full px-8 py-3 font-bold text-lg transition-transform hover:scale-105">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold text-lg transition-all">
              Explore
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;