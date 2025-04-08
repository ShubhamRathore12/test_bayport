import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="w-full relative">
      <div className="flex">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/flashgallary/large/1920x550_1742474498397_1743507778468.png.webp?v=7463"
            alt="Room decoration"
            width={1000}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
