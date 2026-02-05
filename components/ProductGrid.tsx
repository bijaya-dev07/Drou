"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Drou watch ultra", price: "$75.00", oldPrice: "$85.00", image: "https://images.unsplash.com/photo-1544117518-30ed0f7cd9a3?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Book space grey", price: "$85.00", oldPrice: "", image: "https://images.unsplash.com/photo-1517336714460-d1508db72af4?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Homepod mini 2022", price: "$29.00", oldPrice: "$35.00", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Onside Charges", price: "$55.00", oldPrice: "$75.00", image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Music entertainment", price: "$79.00", oldPrice: "", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop" },
];

export default function ProductGrid({ title }: { title: string }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <button className="text-muted hover:text-primary font-semibold transition-colors border-b border-gray-200 hover:border-primary pb-1">
            View all products &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group bg-white p-4 rounded-xl border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg bg-[#f8f8f8]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#ffb800" color="#ffb800" />
                  ))}
                </div>
                <h4 className="font-semibold text-gray-800 line-clamp-1">{product.name}</h4>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-primary font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-muted text-sm line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
