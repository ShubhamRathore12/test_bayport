"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WallArtsSubmenu } from "./WallArtsSubmenu";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "All",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/Frame_1_1714460169195.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "all",
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
  },
  {
    name: "Rugs & Mats",
    icon: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/rug_1715926425323_1724912019890.png.webp?v=7463",
    hasSubmenu: true,
    submenuType: "designs",
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
    submenuType: "theme",
  },
];

export const ShiftingDropDown = () => {
  return (
    <div className="flex w-full justify-start text-neutral-200 md:justify-center flex-col">
      <TabsWithIcons />

      {/* Full-width banner image */}
      <Image
        src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/flashgallary/large/1920x550_1742474498397_1743507778468.png.webp?v=7463"
        alt="Room decoration"
        width={1920}
        height={550}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

const TabsWithIcons = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSetSelected = (val: number | null) => {
    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleSetSelected(null)} className="relative">
      {/* Category Icons Below */}
      <div className="flex flex-wrap justify-center items-start gap-4 my-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-24 cursor-pointer relative"
            onMouseEnter={() => handleSetSelected(index + 1)}
            onClick={() => handleSetSelected(index + 1)}
          >
            <Image
              src={cat.icon}
              alt={cat.name}
              width={60}
              height={60}
              className="rounded-lg object-contain"
            />

            <span className="mt-2 text-xs text-black flex items-center justify-center hover:underline-offset-1 hover:text-black">
              {cat.name}
              {cat.name !== "All" && <ChevronDown className="w-3 h-3 ml-1" />}
            </span>

            {/* Show dropdown just below the hovered item */}
            {selected === index + 1 && (
              <div className="absolute top-[100%] mt-2 z-20">
                <Content selected={selected} category={cat} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Content = ({
  selected,
  category,
}: {
  selected: number | null;
  category: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="w-full  text-black p-4 mx-10 shadow-lg"
    >
      {category.submenuType === "all" ? null : category.submenuType ===
        "theme" ? null : (
        <WallArtsSubmenu />
      )}
    </motion.div>
  );
};
