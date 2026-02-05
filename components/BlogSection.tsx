"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  { id: 1, title: "Music maginate headphones", date: "January 01, 2023", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Macbook Air M1 now in stores", date: "January 01, 2023", image: "https://images.unsplash.com/photo-1517336714460-d1508db72af4?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Ipsum available but the majority", date: "January 01, 2023", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" },
];

export default function BlogSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".blog-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">Blog & Events</h2>
          <button className="text-muted hover:text-primary font-semibold transition-colors border-b border-gray-200 hover:border-primary pb-1">
            View all Events &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="blog-card group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted text-sm px-1">
                  <Calendar size={14} className="text-primary" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
