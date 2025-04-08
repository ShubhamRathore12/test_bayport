
const products = [
  {
    title: "Custom Panoramic Tapestry - Velvet Satin",
    image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png",
    price: "$15.97"
  },
  {
    title: "Custom Sheer Curtain - Linen Weave",
    image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png",
    price: "$45.36"
  },
  {
    title: "Custom Women's Hoodie - White",
    image: "/lovable-uploads/4b0ed76c-9394-495c-971e-21adc738c03c.png",
    price: "$42.95"
  },
  {
    title: "Custom Classic Tote Bag",
    image: "/lovable-uploads/2f0e704f-7334-4d0e-b3ef-73d93b5c5828.png",
    price: "$32.95"
  },
  {
    title: "Custom Coffee Mugs",
    image: "/lovable-uploads/3e3579d5-b545-45b0-9cd3-5dca617ff9b5.png",
    price: "$34.50"
  },
  {
    title: "Custom Waist Apron",
    image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png",
    price: "$19.99"
  },
  {
    title: "Rug - Luxe Grain - Rectangle",
    image: "/lovable-uploads/44514aec-7b16-4949-97e4-7458c67a44b8.png",
    price: "$89.95"
  },
  {
    title: "Custom Wallpaper - Stone Grain",
    image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png",
    price: "$75.50"
  },
  {
    title: "Custom Women's Full Sarong",
    image: "/lovable-uploads/4b0ed76c-9394-495c-971e-21adc738c03c.png",
    price: "$39.95"
  },
  {
    title: "Doormat - Rectangle",
    image: "/lovable-uploads/43c01d3a-3aba-4a6d-99e7-03535da8eb9d.png",
    price: "$29.99"
  }
];

const TrendingProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trending Custom Home Decor
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product, index) => (
            <a key={index} href="#" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10 group-hover:text-neon-pink transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-neon-pink font-semibold">{product.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.slice(5, 10).map((product, index) => (
            <a key={index} href="#" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10 group-hover:text-neon-pink transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-neon-pink font-semibold">{product.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
