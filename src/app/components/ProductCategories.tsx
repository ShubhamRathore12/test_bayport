import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Curtain Creations",
    subtitle: "Personalized Drapes to Set the Ambience",
    image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png",
    subcategories: [
      {
        name: "Custom Drapes",
        image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png",
      },
      {
        name: "Blackout Curtains",
        image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png",
      },
      {
        name: "Shower Curtains",
        image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png",
      },
      {
        name: "Sheer Curtains",
        image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png",
      },
    ],
  },
  {
    title: "Walls of Wonder",
    subtitle: "Discover Your Wall's Perfect Vibe",
    image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png",
    subcategories: [
      {
        name: "Wallpapers",
        image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png",
      },
      {
        name: "Wall Murals",
        image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png",
      },
      {
        name: "Photo Prints",
        image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png",
      },
      {
        name: "Canvas Prints",
        image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png",
      },
    ],
  },
  {
    title: "Pillow Palette",
    subtitle: "Create Your Corner of Plushy Comfort",
    image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png",
    subcategories: [
      {
        name: "Throw Pillows",
        image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png",
      },
      {
        name: "Cushions",
        image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png",
      },
      {
        name: "Bow Pillows",
        image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png",
      },
      {
        name: "Bed Pillows",
        image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png",
      },
    ],
  },
  {
    title: "Timeless Tapestries",
    subtitle: "Personalized Tapestries to Reflect Your Essence",
    image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png",
    subcategories: [
      {
        name: "Custom Wall Tapestries",
        image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png",
      },
      {
        name: "Custom Panoramic Tapestries",
        image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png",
      },
      {
        name: "Custom Triangular Tapestries",
        image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png",
      },
      {
        name: "Custom Hanging Tapestries",
        image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png",
      },
    ],
  },
];

const ProductCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="aspect-square md:aspect-auto overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.subcategories.map((subcat, index) => (
                    <a key={index} href="#" className="group">
                      <div className="aspect-square overflow-hidden rounded-lg mb-2 bg-gray-100">
                        <img
                          src={subcat.image}
                          alt={subcat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-center group-hover:text-neon-pink transition-colors">
                        {subcat.name}
                      </h3>
                    </a>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white"
                  >
                    Show Me More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
