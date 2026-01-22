import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Rahul S.",
    image: "/assets/t1.jpg",
    text: "The bass on the Rockerz 450 is just insane! For this price point, you absolutely cannot beat the build quality and sound.",
    stars: [1, 1, 1, 1, 1] // 1 = full star, 0.5 = half star
  },
  {
    id: 2,
    name: "Priya M.",
    image: "/assets/t2.jpg",
    text: "Airdopes 141 connects instantly. The battery backup is exactly as advertised. I use them for my daily commute.",
    stars: [1, 1, 1, 1, 0.5]
  },
  {
    id: 3,
    name: "Amit K.",
    image: "/assets/t3.jpg",
    text: "Stone 350 is a powerhouse. It fell into the pool once and still works perfectly. Rugged design and great volume.",
    stars: [1, 1, 1, 1, 0.5]
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          {/* Replaced text-boatRed with text-red-600 */}
          What <span className="text-red-600">boAtheads</span> Say
        </h2>
        
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="min-w-[300px] md:min-w-[400px] bg-gray-50 p-6 rounded-2xl snap-center border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <div className="text-yellow-400 text-sm flex gap-1">
                    {/* Logic to render stars dynamically */}
                    {review.stars.map((star, index) => (
                      <i key={index} className={star === 1 ? "fas fa-star" : "fas fa-star-half-alt"}></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;