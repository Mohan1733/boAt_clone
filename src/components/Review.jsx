import React from 'react';

const features = [
  { icon: "fas fa-bolt", title: "ASAP™ Charge", desc: "10 Mins Charge = 100 Mins Playtime" },
  { icon: "fas fa-water", title: "IPX Ratings", desc: "Sweat & Water Resistance" },
  { icon: "fas fa-music", title: "Signature Sound", desc: "Thumping Bass & Clear Vocals" },
  { icon: "fas fa-gamepad", title: "Beast™ Mode", desc: "Super Low Latency for Gaming" },
];

const Review = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      
      {/* Decorative Blur - Added for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Typography / Heading */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Why <span className="text-red-600 block mt-2">boAt?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Engineered for the bold. Built for the hustle. Experience audio that keeps up with your lifestyle.
            </p>
            {/* Optional Decorative Line */}
            <div className="h-1 w-20 bg-red-600 rounded mx-auto lg:mx-0"></div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-5 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon Box */}
                  <div className="shrink-0 w-14 h-14 rounded-lg bg-black flex items-center justify-center text-red-500 text-2xl group-hover:scale-110 group-hover:text-white group-hover:bg-red-600 transition-all duration-300 shadow-lg shadow-black/50">
                    <i className={item.icon}></i>
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-red-500 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Review;