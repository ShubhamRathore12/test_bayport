"use client";

import { useState } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="border-b py-5 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Top: Logo + Icons (on small screens) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/websitelogos/retailer_site_logo848.png.webp?v=7463"
              alt="Neon Earth"
              width={160}
              height={40}
            />
          </Link>

          {/* Mobile icons */}
          <div className="flex md:hidden items-center gap-3">
            <Heart className="h-5 w-5 text-pink-500" />
            <ShoppingCart className="h-5 w-5 text-pink-500" />
            <User className="h-5 w-5 text-pink-500" />
          </div>
        </div>

        {/* Search */}
        <div className="w-full md:max-w-xl md:px-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Find What Brings You Joy"
              className="w-full border-gray-300 focus:border-pink-500 pr-10"
            />
            <Button
              size="icon"
              variant="default"
              className="absolute right-0 top-0 bg-pink-500 hover:bg-pink-600 rounded-l-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* User Actions for md+ screens */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cart?.length}
            </span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span>Join/Login</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
