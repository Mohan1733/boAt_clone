import React, { useState, useEffect } from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-black py-5'
      } text-white`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* 1. Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-2xl focus:outline-none text-gray-300 hover:text-white"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* 2. Logo - Centered on Mobile, Left on Desktop */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-3xl font-extrabold tracking-tighter relative">
            boAt
            <span className="absolute -top-1 -right-3 text-red-600 text-4xl leading-3 transform -rotate-12 group-hover:rotate-0 transition-transform">/</span>
          </span>
        </a>

        {/* 3. Desktop Menu - Centered */}
        <div className="hidden lg:flex items-center space-x-10 text-sm font-semibold uppercase tracking-wide text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Categories</a>
          <a href="#" className="hover:text-white transition-colors">Daily Deals</a>
          <a href="#" className="hover:text-white transition-colors">Gift with boAt</a>
          <div className="relative group cursor-pointer h-full py-2">
            <span className="hover:text-white flex items-center gap-1">
              More <i className="fas fa-chevron-down text-[10px]"></i>
            </span>
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-black rounded-lg shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-sm">About Us</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-sm">Blogs</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-sm">Support</a>
            </div>
          </div>
        </div>

        {/* 4. Icons & Actions */}
        <div className="flex items-center gap-5">
          {/* Search (Expandable) */}
          <div className="relative hidden md:block group">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 border border-gray-800 text-sm rounded-full pl-10 px-4 py-2 w-32 focus:w-64 transition-all duration-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 placeholder-gray-500"
            />
            <i className="fas fa-search absolute left-3 top-2.5 text-gray-500"></i>
          </div>

          <button className="text-gray-300 hover:text-white transition-colors">
            <i className="far fa-user text-xl"></i>
          </button>
          
          <button 
            onClick={onCartClick} 
            className="relative text-gray-300 hover:text-white transition-colors group"
          >
            <i className="fas fa-shopping-bag text-xl group-hover:scale-110 transition-transform"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] font-bold h-5 w-5 flex items-center justify-center bg-red-600 rounded-full text-white border-2 border-black animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gray-900 border-t border-gray-800 p-4 space-y-4">
           <input
              type="text"
              placeholder="Search..."
              className="w-full bg-black border border-gray-700 p-3 rounded-lg text-white focus:outline-none focus:border-red-600"
            />
            <a href="#" className="block text-gray-300 hover:text-white font-semibold">Categories</a>
            <a href="#" className="block text-gray-300 hover:text-white font-semibold">Daily Deals</a>
            <a href="#" className="block text-gray-300 hover:text-white font-semibold">Login / Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;