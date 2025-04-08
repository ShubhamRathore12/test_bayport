
import { Button } from "@/components/ui/button";

const PromoVideo = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/80 to-neon-pink/60 flex items-center justify-center">
              <div className="text-white px-4 py-2 rounded-lg text-lg font-medium">
                Simple Steps to Create Your New
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Create a Picture-Perfect Home <br />
                With Exclusive Savings
              </h2>
              <p className="text-4xl font-extrabold mb-2">15% OFF Sitewide</p>
              <p className="text-gray-600">+ $15 Worth Wallet Points For Next Purchase</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="border px-4 py-2 rounded">
                Code: <span className="text-neon-pink font-bold">NEON15</span>
              </div>
              <Button className="bg-neon-pink hover:bg-pink-600 text-white">
                Claim Offer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
