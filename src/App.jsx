import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

const App = () => {
  const [cartCount, SetCartCount] = useState([]);
  return (
    <>
      <div className="font-sans antialiased text-gray-900">
        <div className="bg-gray-100 text-center py-2 font-semibold text-xs tracking-wide hidden md:block animate-pulse">
          Legacy of Sound | Shop Your Favourite Audio Gear Now!
        </div>
        <Navbar cartCount={cartCount} />
        <Hero />
        <Categories />
      </div>
    </>
  );
};

export default App;
