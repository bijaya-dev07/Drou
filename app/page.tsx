import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PromoCards from "@/components/PromoCards";
import ProductGrid from "@/components/ProductGrid";
import DiscountBanner from "@/components/DiscountBanner";
import BlogSection from "@/components/BlogSection";
import FeaturesBar from "@/components/FeaturesBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Categories />
        <PromoCards />
        <ProductGrid title="Latest Products" />
        <DiscountBanner />
        <ProductGrid title="Popular Products" />
        <BlogSection />
        <FeaturesBar />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
