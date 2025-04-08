"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const picks = [
  {
    label: "Area Rugs",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/rug_1715926436621_1717146767290.png.webp?v=7463",
  },
  {
    label: "Photo And Art Prints",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/2_Art_Prints_1718091670217.png.webp?v=7463",
  },
  {
    label: "Poster Prints",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/3_Economy_Poster_1718091699811.png.webp?v=7463",
  },
  {
    label: "Acrylic Prints",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/4_Acrylic_Prints_1718088840203.png.webp?v=7463",
  },
  {
    label: "Canvas Prints",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/5_Canvas_Prints_1718091743322.png.webp?v=7463",
  },
  {
    label: "Tapestries",
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_2_1713330204086_1715604849960.png.webp?v=7463",
  },
];

export default function TopPersonalizationPicks() {
  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-2xl font-semibold mb-8">Top Personalization Picks</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {picks.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-50 h-50 relative">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
