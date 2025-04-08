
const categories = [
  { name: "Area Rugs", image: "/lovable-uploads/44514aec-7b16-4949-97e4-7458c67a44b8.png" },
  { name: "Photo And Art Prints", image: "/lovable-uploads/fd988a17-00b9-414f-a8d2-90646c52d0d4.png" },
  { name: "Poster Prints", image: "/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png" },
  { name: "Acrylic Prints", image: "/lovable-uploads/921ef54a-fbaf-40db-b814-a38fa33c2236.png" },
  { name: "Canvas Prints", image: "/lovable-uploads/c46c9254-18d6-4613-8565-30750fd65c3c.png" },
  { name: "Tapestries", image: "/lovable-uploads/57dffebf-b4c6-4290-ad20-0cbe374039b0.png" },
];

const PersonalizationPicks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top Personalization Picks
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#"
              className="flex flex-col items-center group"
            >
              <div className="rounded-full overflow-hidden w-28 h-28 mb-3 border-2 border-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium text-center group-hover:text-neon-pink transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizationPicks;
