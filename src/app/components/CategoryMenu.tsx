"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { DesignCategories } from "./DesignCategories";
import { WallArtsSubmenu } from "./WallArtsSubmenu";

const categories = [
  {
    name: "All",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/Frame_1_1714460169195.png.webp?v=7463",
  },
  {
    name: "Wall Arts",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_9_1714459571675.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "wallArts",
  },
  {
    name: "Tapestries",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_2_1714459625926.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
    isNew: false,
  },
  {
    name: "Rugs & Mats",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/rug_1715926425323_1724912019890.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
    isNew: true,
  },
  {
    name: "Pillows",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_3_1714459951804.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
  {
    name: "Curtains",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_4_1714460007048.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
  {
    name: "Custom Fabric",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Custom-fabric_Icon_1730199405715.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
  {
    name: "Pet Zone",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_11_1714460067233.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
  {
    name: "Clothing",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Clothing_1715942618433.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
  {
    name: "More",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_8_1714460140703.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
  {
    name: "Theme",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/09-Theme_1__1__1714460180483.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
  },
];

export function CategoryMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="relative py-7 px-30">
      <nav className="border-b">
        <div className="container mx-auto flex items-center justify-between overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative"
              onMouseEnter={() =>
                category.hasSubmenu && setHoveredCategory(category.name)
              }
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                href="#"
                className={cn(
                  "flex flex-col items-center py-3 px-4 min-w-[80px] relative group",
                  (activeCategory === category.name ||
                    hoveredCategory === category.name) &&
                    "border-b-2 border-pink-500"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(
                    category.name === activeCategory ? null : category.name
                  );
                }}
              >
                <div className="relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  {category.isNew && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] px-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm">{category.name}</span>
                  {category.hasSubmenu && <ChevronDown className="h-3 w-3" />}
                </div>
              </Link>

              {hoveredCategory === category.name && category.hasSubmenu && (
                <div className="absolute left-0 top-full w-screen z-50 bg-white shadow-lg border-t">

                  {category.submenuType === "wallArts" && <WallArtsSubmenu />}
                  {category.submenuType === "designs" && (
                    <DesignCategories categoryName={category.name} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Show active category submenu when clicked (not hovered) */}
      {activeCategory && !hoveredCategory && (
        <div className="absolute left-0 top-full w-full z-40">
          {categories.find((c) => c.name === activeCategory)?.submenuType ===
            "wallArts" && <WallArtsSubmenu />}
          {categories.find((c) => c.name === activeCategory)?.submenuType ===
            "designs" && <DesignCategories categoryName={activeCategory} />}
        </div>
      )}
    </div>
  );
}
