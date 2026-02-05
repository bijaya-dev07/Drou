"use client";

import { Box, CreditCard, RotateCcw, Headphones } from "lucide-react";

export default function FeaturesBar() {
  return (
    <section className="py-12 border-y border-gray-100 bg-[#fafafa]">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Box className="text-primary" />, title: "Free delivery", desc: "And free returns. See checkout for delivery dates." },
          { icon: <RotateCcw className="text-primary" />, title: "30-Day Returns", desc: "Not happy? Return it within 30 days for a full refund." },
          { icon: <CreditCard className="text-primary" />, title: "Secure Payment", desc: "Your data is protected. Pay with confidence." },
          { icon: <Headphones className="text-primary" />, title: "Expert Support", desc: "24/7 technical support for all your electronics." },
        ].map((feat, idx) => (
          <div key={idx} className="flex items-center gap-5 p-4">
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
              {feat.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">{feat.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
