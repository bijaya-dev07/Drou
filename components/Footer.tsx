"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
             <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">DROU</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Drou is a premium electronics store specialized in high-end gadgets and modern technology solutions.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Information</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">Product Support</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Checkout</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">License Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Affiliate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Customer Service</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Redeem Voucher</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Policy & Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-muted mb-6">Subscribe to get the latest updates and special offers.</p>
            <div className="flex bg-gray-50 rounded-full p-1 border border-gray-100 focus-within:border-primary transition-colors">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none outline-none flex-1 px-4 text-sm"
              />
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted">
            Copyright © 2023 <span className="text-secondary font-bold">DROU</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
