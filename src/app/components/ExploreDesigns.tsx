"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const designCategories = [
  {
    title: "Neon Designs",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Design.png.webp?v=7463",
  },
  {
    title: "Spring Summer",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Wilderness_Dreams_1743768078962.png.webp?v=7463",
  },
  {
    title: "Vintage",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Vintage.png.webp?v=7463",
  },
  {
    title: "Abstract",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Abstract.png.webp?v=7463",
  },
  {
    title: "Space and Astronomy",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Space_and_Astronomy.png.webp?v=7463",
  },
  {
    title: "Nature",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Nature_07021106202401.png.webp?v=7463",
  },
  {
    title: "Kids",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Kids.png.webp?v=7463",
  },
  {
    title: "Geometric",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Geometric.png.webp?v=7463",
  },
  {
    title: "Minimalist",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Minimalist.png.webp?v=7463",
  },
  {
    title: "Botanical",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Botanical.png.webp?v=7463",
  },
];

export default function ExploreDesigns() {
  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">
        We Curate, You Create - Explore 60K+ Designs
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {designCategories.map((category, index) => (
          <div key={index}>
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition">
              <Image
                src={category.image}
                alt=""
                width={240}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full px-4 py-3 text-center">
              <h3 className="text-sm font-medium text-gray-800 mb-1">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm">
          Explore More Designs
        </Button>
      </div>
    </section>
  );
}
