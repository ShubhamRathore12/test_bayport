import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Search,
  ShoppingCart,
  User,
  Truck,
  BadgePercent,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoryMenu } from "./components/CategoryMenu";
import { HeroSection } from "./components/HeroSection";
import { RatingSection } from "./components/RatingSection";
import { ChatButton } from "./components/ChatButton";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { PersonalizedSection } from "./components/PersonalizedSection";
import ExploreDesigns from "./components/ExploreDesigns";
import { PersonalizeDecor } from "./components/PersonalizeDecor";
import TopPersonalizationPicks from "./components/TopPersonalizationPicks";
import ProductDesignPreview from "./components/ProductDesignPreview";
import Header from "./components/Header";
import { ShiftingDropDown } from "./components/ShiftingDropDown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <div className="bg-[#f8f3e3] text-center py-3 px-4 flex justify-center items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Truck />
          <span>Free Shipping Above $60</span>
        </div>
        <div className="flex items-center gap-2">
          <BadgePercent />
          <span>Up to 20% OFF Sitewide. Use Code: REFRESH</span>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* <CategoryMenu /> */}
      <ShiftingDropDown />

      {/* <HeroSection /> */}

      {/* Rating Section */}
      <RatingSection />

      {/* Personalized Section */}
      <PersonalizedSection />
      <ExploreDesigns />
      <PersonalizeDecor />
      <TopPersonalizationPicks />
      <ProductDesignPreview />
      <ChatButton />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
