"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PromoCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".promo-card",
      { x: (i) => i === 0 ? -100 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-[#fefefe]">
      <div className="container-custom grid md:grid-cols-2 gap-8">
        <div className="promo-card group relative h-[300px] overflow-hidden rounded-3xl bg-[#f5f5f5] flex items-center p-12">
          <div className="z-10 space-y-4 max-w-[200px]">
            <span className="text-muted text-xs uppercase font-bold tracking-widest">Security Smart Camera</span>
            <h3 className="text-2xl font-bold">Just Starting At $1500</h3>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mt-4 hover:bg-black transition-colors">By Now</button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop" 
            alt="Camera" 
            className="absolute right-0 top-0 w-1/2 h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="promo-card group relative h-[300px] overflow-hidden rounded-3xl bg-[#f5f5f5] flex items-center p-12">
          <div className="z-10 space-y-4 max-w-[200px]">
            <span className="text-muted text-xs uppercase font-bold tracking-widest">Entertainment & Games</span>
            <h3 className="text-2xl font-bold">Just Starting At $850 Hurry up!</h3>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mt-4 hover:bg-black transition-colors">By Now</button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=600&auto=format&fit=crop" 
            alt="Controller" 
            className="absolute right-0 top-0 w-1/2 h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
