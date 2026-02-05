"use client";

import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 glass-morphism border-b border-gray-100"
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">DROU</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-wider">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/electronics" className="hover:text-primary transition-colors">Electronics</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/pages" className="hover:text-primary transition-colors">Pages</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="hover:text-primary transition-colors cursor-pointer">
            <Search size={22} />
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer relative">
            <Heart size={22} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="md:hidden hover:text-primary transition-colors cursor-pointer">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}
