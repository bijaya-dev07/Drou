"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DiscountBanner() {
  const containerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: "210", hours: "02", mins: "09", secs: "02"
  });

  useEffect(() => {
    gsap.fromTo(
      ".banner-content > *",
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
    <section ref={containerRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-[#ebebeb] rounded-[40px] px-8 py-20 md:p-20 flex flex-col md:flex-row items-center justify-between">
          <div className="banner-content space-y-8 z-10 max-w-xl">
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Hurry up!</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Up To 25% Discount <br /> Check it Out</h2>
            
            <div className="flex gap-4 md:gap-8">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hrs", val: timeLeft.hours },
                { label: "Mins", val: timeLeft.mins },
                { label: "Secs", val: timeLeft.secs }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-white w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-xl md:text-3xl font-bold shadow-sm mb-2">
                    {item.val}
                  </div>
                  <span className="text-[10px] md:text-xs uppercase font-bold text-muted">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="text-secondary font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              Shop Now
            </button>
          </div>

          <div className="mt-12 md:mt-0 flex gap-4 md:absolute md:-right-20 md:top-1/2 md:-translate-y-1/2">
            <img 
              src="https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=800&auto=format&fit=crop" 
              alt="iPhone" 
              className="w-48 md:w-80 object-contain drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.1)] rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop" 
              alt="iPhone" 
              className="w-48 md:w-80 object-contain drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.1)] mt-12 rotate-[5deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
