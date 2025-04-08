
import { Truck, PercentIcon } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-neon-cream w-full py-2">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center px-4 gap-4">
        <div className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          <span className="text-sm font-medium">Free Shipping Above $60</span>
        </div>
        <div className="flex items-center gap-2">
          <PercentIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Up to 20% OFF Sitewide. Use Code: REFRESH</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
