import React from "react";

const categoryData = [
  { title: "True Wireless", img: "./assets/c2.jpg", color: "bg-blue-50" },
  { title: "Headphones", img: "./assets/c5.jpg", color: "bg-red-50" },
  { title: "Smart Watches", img: "./assets/c4.jpg", color: "bg-green-50" },
  { title: "Speakers", img: "./assets/c7.jpg", color: "bg-yellow-50" },
  { title: "Neckbands", img: "./assets/c6.jpg", color: "bg-purple-50" },
  { title: "Party Speakers", img: "./assets/c9.jpg", color: "bg-orange-50" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Explore by <span className="text-red-600">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoryData.map((cat, idx) => (
            <div 
                key={idx} 
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${cat.color}`}
            >
              {/* Category Name */}
              <div className="absolute top-4 left-0 w-full text-center z-10">
                <h3 className="font-bold text-gray-900 text-sm md:text-base uppercase tracking-wide group-hover:text-red-600 transition-colors">
                    {cat.title}
                </h3>
              </div>

              {/* Image */}
              <div className="mt-8 p-4 h-40 flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;