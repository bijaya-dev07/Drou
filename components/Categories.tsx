"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Speaker, Tablet, Headset, Laptop, Watch } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "iPhone", icon: <Smartphone size={32} />, color: "bg-blue-50" },
  { name: "Mini Speakers", icon: <Speaker size={32} />, color: "bg-orange-50" },
  { name: "Tablets", icon: <Tablet size={32} />, color: "bg-green-50" },
  { name: "Headphones", icon: <Headset size={32} />, color: "bg-gray-50" },
  { name: "Laptop", icon: <Laptop size={32} />, color: "bg-purple-50" },
  { name: "Accessories", icon: <Watch size={32} />, color: "bg-red-50" },
];

export default function Categories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".category-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white border-b border-gray-100">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12">Trending Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="category-card group cursor-pointer flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-20 h-20 ${cat.color} rounded-full flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4`}>
                {cat.icon}
              </div>
              <span className="font-semibold text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
