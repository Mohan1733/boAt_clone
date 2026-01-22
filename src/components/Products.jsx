import React from 'react';

const productsData = [
  { 
    id: 1, 
    name: "Nirvana Ion", 
    price: "₹1,999", 
    oldPrice: "₹4,990", 
    img: "/assets/c1.jpg", 
    rating: "4.9", 
    reviews: "2.5k", 
    tag: "Bestseller", 
    tagColor: "bg-yellow-400 text-black", 
    desc: "120H Playback, Crystal Bionic Sound" 
  },
  { 
    id: 2, 
    name: "Nirvana Ion ANC", 
    price: "₹2,499", 
    oldPrice: "₹5,990", 
    img: "/assets/c3.jpg", 
    rating: "4.8", 
    reviews: "856", 
    tag: "New Arrival", 
    tagColor: "bg-blue-600 text-white", 
    desc: "Active Noise Cancellation, 100H Playback" 
  },
  { 
    id: 3, 
    name: "Rockerz 450", 
    price: "₹1,499", 
    oldPrice: "₹3,990", 
    img: "/assets/c5.jpg", 
    rating: "4.7", 
    reviews: "2.1k", 
    tag: "60% OFF", 
    tagColor: "bg-red-500 text-white", 
    desc: "15H Playback, 40mm Drivers" 
  },
  { 
    id: 4, 
    name: "Nirvana Ion (Blue)", 
    price: "₹1,999", 
    oldPrice: "₹4,990", 
    img: "/assets/c2.jpg", 
    rating: "4.9", 
    reviews: "1.2k", 
    tag: "Trending", 
    tagColor: "bg-purple-600 text-white", 
    desc: "120H Playback, Dual EQ Modes" 
  },
  { 
    id: 5, 
    name: "Rockerz 255 Pro+", 
    price: "₹1,299", 
    oldPrice: "₹2,990", 
    img: "/assets/c6.jpg", 
    rating: "4.6", 
    reviews: "5k+", 
    tag: "Deal of Day", 
    tagColor: "bg-yellow-400 text-black", 
    desc: "40H Playback, ASAP Charge" 
  },
  { 
    id: 6, 
    name: "Rockerz 550", 
    price: "₹1,999", 
    oldPrice: "₹4,990", 
    img: "/assets/c9.jpg", 
    rating: "4.8", 
    reviews: "1.1k", 
    tag: null, 
    tagColor: "", 
    desc: "20H Playback, 50mm Dynamic Drivers" 
  },
  { 
    id: 7, 
    name: "Cosmos Kids Watch", 
    price: "₹1,499", 
    oldPrice: "₹3,490", 
    img: "/assets/c4.jpg", 
    rating: "4.5", 
    reviews: "3.2k", 
    tag: "Must Have", 
    tagColor: "bg-green-600 text-white", 
    desc: "Built-in Camera, Activity Tracker" 
  },
  { 
    id: 8, 
    name: "Stone 352", 
    price: "₹1,699", 
    oldPrice: "₹3,490", 
    img: "/assets/c7.jpg", 
    rating: "4.8", 
    reviews: "1.8k", 
    tag: "Bestseller", 
    tagColor: "bg-yellow-400 text-black", 
    desc: "10W RMS Stereo Sound, IPX7" 
  },
];

const Products = ({ addToCart }) => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6">
        
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Trending <span className="text-red-500">Audio</span>
            </h2>
            <div className="h-1 w-20 bg-red-500 mt-2 mx-auto md:mx-0 rounded-full"></div>
          </div>
          
          <a href="#" className="text-boatRed font-bold hover:underline hidden sm:block">View All</a>
        </div>

        {/* Product Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gray-200 transition-all duration-300">
              
              {/* Image Area */}
              <div className="relative w-full h-64 bg-[#F8F9FB] flex items-center justify-center p-6 overflow-hidden">
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    {product.tag && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm ${product.tagColor}`}>
                        {product.tag}
                    </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm border border-gray-100">
                  <i className="fas fa-heart text-xs"></i>
                </button>

                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Add to Cart - Slide Up Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-black text-white font-medium py-3 rounded-xl shadow-lg hover:bg-gray-800 flex items-center justify-center gap-2 transform active:scale-95 transition-all"
                    >
                        <i className="fas fa-shopping-bag text-sm"></i> Add to Cart
                    </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Rating & Spec */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-xs font-semibold text-yellow-500 bg-yellow-50 px-2 py-1 rounded-md">
                        {product.rating} <i className="fas fa-star text-[10px]"></i>
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        {product.desc}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-1">
                    {product.name}
                </h3>

                {/* Price Section */}
                <div className="flex items-end gap-2 mt-3">
                    <span className="text-lg font-extrabold text-gray-900 leading-none">{product.price}</span>
                    <span className="text-xs text-gray-400 line-through mb-0.5">{product.oldPrice}</span>
                    {/* Calculate discount percentage logic could go here visually */}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;