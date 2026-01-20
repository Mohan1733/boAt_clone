import React, { useState, useEffect } from 'react';

const Navbar = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-shadow duration-300 bg-black text-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-3xl font-extrabold tracking-tighter relative">
            boAt
            <span className="absolute -top-1 -right-3 text-boatRed text-4xl leading-3 transform -rotate-12">/</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 font-medium">
          <a href="#" className="hover:text-boatRed transition-colors">Categories</a>
          <a href="#" className="hover:text-boatRed transition-colors">Daily Deals</a>
          <a href="#" className="hover:text-boatRed transition-colors">Gift with boAt</a>
          <a href="#" className="hover:text-boatRed transition-colors">Corporate Orders</a>
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-boatRed transition-colors">
              More <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <div className="absolute top-full bg-white text-black left-0 w-48 rounded-b-lg overflow-hidden shadow-lg h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blogs</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Services</a>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-boatDarkGray text-sm rounded-full pl-10 px-4 py-2 w-32 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-boatRed placeholder-gray-400"
            />
            <i className="fas fa-search absolute left-3 top-2 text-gray-400 text-sm"></i>
          </div>
          <button className="hover:text-boatRed transition-colors">
            <i className="fas fa-user"></i>
          </button>
          <button className="relative hover:text-boatRed transition-colors">
            <i className="fas fa-shopping-cart"></i>
            <span className={`absolute -top-2 -right-2 text-xs font-bold h-4 w-4 flex items-center justify-center bg-boatRed rounded-full text-white ${cartCount > 0 ? 'scale-100' : ''}`}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-4">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full bg-boatDarkGray text-white p-3 rounded-lg mb-2 focus:outline-none"
            />
            <a href="#" className="block text-white hover:text-boatRed font-semibold">Categories</a>
            <a href="#" className="block text-white hover:text-boatRed font-semibold">Daily Deals</a>
            <a href="#" className="block text-white hover:text-boatRed font-semibold">Track Order</a>
            <a href="#" className="block text-white hover:text-boatRed font-semibold">Login / Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;