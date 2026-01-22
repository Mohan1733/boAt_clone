import React from 'react';

const Hero = () => {
  return (
    <header className="relative bg-black text-white overflow-hidden">
      
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 pt-12 pb-20 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-900/50 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              New Launch
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
              PLUG IN. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                ZONE OUT.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experience the <b>Nirvana Ion</b>. 120 Hours of playback, Crystal Bionic Sound, and styling that turns heads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                Shop Now <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full px-8 py-4 font-bold text-lg transition-all backdrop-blur-sm">
                View Collection
              </button>
            </div>  
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative">
             {/* Decorative Circle behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-black rounded-full scale-90 border border-gray-800/50"></div>
            
            <img
              src="./assets/b1.jpg" // Ensure this image is high quality or remove bg in photoshop
              alt="boAt Headphones"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
            
            
          </div>
        </div>
      </div>
      
   
    </header>
  );
};

export default Hero;