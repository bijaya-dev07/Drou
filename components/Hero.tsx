"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

import appleWatch from "@/public/apple-watch.png";

export default function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".hero-text-child",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, x: 100 },
        { scale: 1, opacity: 1, x: 0, duration: 1.5, ease: "power4.out" },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-32 pb-20 overflow-hidden bg-[#f9f9f9]">
      <div className="container-custom grid md:grid-cols-2 items-center gap-12">
        <div ref={textRef} className="space-y-6">
          <span className="hero-text-child inline-block text-primary font-bold uppercase tracking-widest text-sm">
            Sale Up To 20% Off
          </span>
          <h1 className="hero-text-child text-5xl md:text-7xl font-bold leading-tight">
            Apple Watch <br />
            <span className="text-gray-400">Series</span>
          </h1>
          <p className="hero-text-child text-muted max-w-md text-lg">
            Feature packed at a better value than ever Powerful sensors to monitor your fitness.
          </p>
          <div className="hero-text-child pt-4">
            <button className="btn-primary">
              Shop Now &rarr;
            </button>
          </div>
        </div>

        <div ref={imageRef} className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full opacity-50 blur-3xl -z-10" />
          
          <Image
            src={appleWatch} 
            alt="Apple Watch"
            priority
            className="w-full h-full object-contain drop-shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
