import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Subscribe */}
          <div>
            <div className="flex items-center gap-1 mb-6">
                 <span className="text-3xl font-extrabold tracking-tighter">boAt</span>
                 <span className="text-red-600 text-4xl font-bold">.</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-800 rounded-full px-5 py-3 w-full focus:ring-1 focus:ring-red-600 focus:border-red-600 focus:outline-none text-sm transition-all"
              />
              <button className="absolute right-1 top-1 bg-white text-black w-10 h-10 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-200">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">True Wireless Earbuds</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Wireless Headphones</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Wired Headphones</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Wireless Speakers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Mobile Accessories</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-200">Help</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Warranty & Support</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Service Centers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-200">Connect</h3>
            <div className="flex gap-4 mb-8">
              {['facebook-f', 'twitter', 'instagram', 'youtube', 'linkedin-in'].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
                &copy; 2026 Imagine Marketing Limited. All Rights Reserved.
            </p>
          </div>
        </div> 
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <div className="flex gap-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>
            <p>Designed with ❤️ for the boAtheads.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;