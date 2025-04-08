import Image from "next/image";
import { Star } from "lucide-react";

const features = [
  { name: "Tailored Creations", icon: "/tailor.PNG" },
  { name: "Best-in-Class Printing", icon: "/printing.PNG" },
  { name: "Diverse Design Library", icon: "/image.PNG" },
  { name: "Prompt Delivery", icon: "/delivery.PNG" },
];

export function RatingSection() {
  return (
    <div className="border-t border-b py-4 px-30">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Rating section */}
        <div className="flex items-center gap-2">
          <Image
            src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/images/sitejabber.png.webp?v=7463"
            alt="Sitejabber"
            width={40}
            height={40}
          />
          <div>
            <div className="flex items-center">
              <span className="font-bold mr-2">4.5</span>
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-pink-500 text-pink-500"
                  />
                ))}
                <Star className="h-4 w-4 fill-gray-200 text-gray-300" />
              </div>
            </div>
            <div className="text-xs">Overall Satisfaction Rating</div>
          </div>
        </div>

        {/* Features section */}
        {features.map((feature) => (
          <div key={feature.name} className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.name}
                width={40}
                height={40}
              />
            </div>
            <span className="text-sm">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
