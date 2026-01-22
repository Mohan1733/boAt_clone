
import React from 'react';

const CartSidebar = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  
  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace(/[₹,]/g, ''));
  }, 0);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      
      {/* 1. Backdrop (Click to close) */}
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />

      {/* 2. Sidebar */}
      <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="text-4xl hover:text-red-600">&times;</button>
        </div>

        {/* Cart Items */}
        <div className="p-4 h-[calc(100vh-160px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 mb-4 border-b pb-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-contain bg-gray-100 rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-red-600 font-bold">{item.price}</span>
                    <button 
                      onClick={() => removeFromCart(index)} 
                      className="text-gray-400 hover:text-red-600"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total & Checkout) */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 w-full p-4 border-t bg-white">
            <div className="flex justify-between text-lg font-bold mb-3">
              <span>Total:</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded font-bold hover:bg-red-600 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;