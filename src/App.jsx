import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Review from "./components/Review";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar"; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowToast(true);
    setIsCartOpen(true); // Automatically open cart to show the added item
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-red-500 selection:text-white">
      <div className="bg-black text-white text-center py-2 font-medium text-[10px] md:text-xs tracking-widest uppercase border-b border-gray-800">
        Legacy of Sound <span className="text-red-600 mx-2">|</span> Shop Your Favourite Audio Gear Now
      </div>
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      {/* Main Content */}
      <main>
        <Hero />
        <Categories />
        <Products addToCart={addToCart} />
        <Review />
        <Testimonials />
      </main>
      <Footer />

      {/* --- Overlays --- */}

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      
      {/* Success Toast Notification - Glassmorphism Style */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 bg-gray-900/90 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-2xl transition-all duration-500 z-[100] flex items-center gap-3 border border-gray-800 ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
            <i className="fas fa-check"></i>
        </div>
        <div>
            <h4 className="font-bold text-sm">Added to Cart</h4>
            <p className="text-xs text-gray-400">Your gear is ready to roll.</p>
        </div>
      </div>

    </div>
  );
};

export default App;