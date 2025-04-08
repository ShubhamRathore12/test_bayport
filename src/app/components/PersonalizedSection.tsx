"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const personalizedItems = [
  {
    id: 1,
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Custom_Wall_Tapestry_Satin.jpg.webp?v=7463",
    alt: "Custom Wall Tapestry Satin",
    title: "Custom Wall Tapestry",
    price: "$17.96",
  },
  {
    id: 2,
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/photo_print_framing.jpg.webp?v=7463",
    alt: "Custom Canvas Print",
    title: "Photo Print - Framing",
    price: "$11.59",
  },
  {
    id: 3,
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Hanigng_Canvas-_Natural.png.webp?v=7463",
    alt: "Personalized Rug",
    title: "Hanging Canvas - Natural",
    price: "$36.00",
  },
  {
    id: 4,
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Square_Pillow-_Gold_Jacquard.png.webp?v=7463",
    alt: "Custom Pillows",
    title: "Custom Square Throw Pillow",
    price: "$16.95",
  },
  {
    id: 5,
    image:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Custom-Monogram-Arm-Tote-Bag-View-02.png.webp?v=7463",
    alt: "Printed Curtains",
    title: "Custom Monogram Arm Tote",
    price: "$27.50",
  },
];

export function PersonalizedSection() {
  return (
    <section className="text-center py-10 px-30">
      <h2 className="text-2xl font-semibold mb-8">
        Personalized Living Starts Here
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 container mx-auto px-4">
        {personalizedItems.map((item) => (
          <div key={item.id}>
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition">
              <Image
                src={item.image}
                alt={item.alt}
                width={240}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full px-4 py-3 text-center">
              <h3 className="text-sm font-medium text-gray-800 mb-1">
                {item.title}
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <p className="bg-gray-100 text-sm text-gray-700  inline-block rounded-md ">
                Starting at{" "}
                <span className="text-black font-semibold">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full">
          Start Creating
        </Button>
      </div>
    </section>
  );
}
