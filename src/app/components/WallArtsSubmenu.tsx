"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type SubmenuDataType = {
  [key: string]: {
    types: string[];
    image: string;
  };
};

const wallArtCategories = [
  { name: "Custom Wallpapers", hasSubmenu: true },
  { name: "Custom Wall Murals", hasSubmenu: true },
  { name: "Photo And Art Prints", hasSubmenu: true },
  { name: "Poster Prints", hasSubmenu: true },
  { name: "Canvas Prints", hasSubmenu: true },
  { name: "Acrylic Prints", hasSubmenu: true },
  { name: "Hanging Canvas", hasSubmenu: true },
];

const submenuData: SubmenuDataType = {
  "Custom Wallpapers": {
    types: ["Wallpaper - Stone", "Wallpaper - Canvas", "Wallpaper - Timber"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e6EFDOARnNoTu7wBBISaBWFFMOKndx.png",
  },
  "Custom Wall Murals": {
    types: ["Nature Murals", "Cityscape Murals", "Abstract Murals"],
    image: "https://via.placeholder.com/600x300?text=Murals",
  },
  "Photo And Art Prints": {
    types: ["Fine Art Prints", "Photography Prints"],
    image: "https://via.placeholder.com/600x300?text=Photo+Prints",
  },
  "Poster Prints": {
    types: ["Movie Posters", "Inspirational Quotes"],
    image: "https://via.placeholder.com/600x300?text=Posters",
  },
  "Canvas Prints": {
    types: ["Framed Canvas", "Unframed Canvas"],
    image: "https://via.placeholder.com/600x300?text=Canvas+Prints",
  },
  "Acrylic Prints": {
    types: ["Glossy Finish", "Matte Finish"],
    image: "https://via.placeholder.com/600x300?text=Acrylic+Prints",
  },
  "Hanging Canvas": {
    types: ["Minimalist Style", "Rustic Style"],
    image: "https://via.placeholder.com/600x300?text=Hanging+Canvas",
  },
};

export function WallArtsSubmenu() {
  const [selectedCategory, setSelectedCategory] = useState("Custom Wallpapers");

  return (
    <div className="flex z-10 gap-4 bg-white shadow-md  p-4">
      {/* Left Sidebar */}
      <div className="w-[15rem] bg-pink-50 rounded-lg p-2">
        <div className="py-2">
          {wallArtCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center justify-between w-full px-4 py-2 text-left text-gray-800 hover:bg-pink-100 rounded ${
                selectedCategory === category.name
                  ? "bg-pink-100 font-semibold"
                  : ""
              }`}
            >
              <span>{category.name}</span>
              {category.hasSubmenu && (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Submenu */}
      <div className="w-[200px] ">
        <div className="space-y-2 text-sm mt-5">
          {(submenuData[selectedCategory]?.types || []).map((type: any) => (
            <Link
              key={type}
              href="#"
              className="block py-1 text-gray-700 hover:text-pink-500 hover:underline"
            >
              {type}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Promotional Section */}
      <div className="w-[150px] py-2">
        <div className="text-gray-700">
          <p className="text-sm">Let your walls</p>
          <p className="text-2xl text-pink-500 font-medium">do the talking</p>
        </div>
        <div className="mt-4">
          <Image
            src={submenuData[selectedCategory]?.image || ""}
            alt={`${selectedCategory} example`}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
