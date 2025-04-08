
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Neon Designs", image: "/lovable-uploads/c46c9254-18d6-4613-8565-30750fd65c3c.png" },
  { name: "Spring Summer", image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png" },
  { name: "Vintage", image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png" },
  { name: "Abstract", image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png" },
  { name: "Space and Astronomy", image: "/lovable-uploads/44514aec-7b16-4949-97e4-7458c67a44b8.png" },
  { name: "Nature", image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png" },
  { name: "Kids", image: "/lovable-uploads/2f0e704f-7334-4d0e-b3ef-73d93b5c5828.png" },
  { name: "Geometric", image: "/lovable-uploads/4b0ed76c-9394-495c-971e-21adc738c03c.png" },
  { name: "Minimalist", image: "/lovable-uploads/3e3579d5-b545-45b0-9cd3-5dca617ff9b5.png" },
  { name: "Botanical", image: "/lovable-uploads/43c01d3a-3aba-4a6d-99e7-03535da8eb9d.png" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          We Curate, You Create - Explore 60K+ Designs
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="border overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <a href="#" className="block">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm md:text-base font-medium">{category.name}</h3>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="bg-neon-pink hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Explore More Designs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
