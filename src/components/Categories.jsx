import React from 'react'

const Categories = () => {
  return (
    <>
   <section className="py-12 bg-white text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by <span className="text-boatRed">Categories</span></h2>
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
      {/* Example category item */}
      {['Headphones', 'Earbuds', 'Watches', 'Neckbands', 'Speakers'].map((cat, idx) => (
        <div key={idx} className="group cursor-pointer">
           <div className="w-28 h-28 mx-auto rounded-full bg-gray-100 mb-3 group-hover:border-boatRed border-2 border-transparent transition-all overflow-hidden">
             {/* Use your actual images here */}
             <img src={`/assets/c${idx+1}.jpg`} alt={cat} className="w-full h-full object-contain" /> 
           </div>
           <p className="font-bold">{cat}</p>
        </div>
      ))}
    </div>
  </section>
    </>
  )
}

export default Categories