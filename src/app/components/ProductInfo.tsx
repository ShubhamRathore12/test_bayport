
const ProductInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <h2 className="text-2xl font-bold mb-6">
          Customizable Products offered by Neon Earth
        </h2>
        <p className="mb-4 text-gray-700">
          Explore our wide selection of customizable home decor and lifestyle products, catering to your preferred theme – be it kids, vintage, abstract, minimalist, traditional, space, nature, food and drink, trending, or more.
        </p>
        
        <div className="space-y-3">
          <div>
            <strong className="text-gray-900">Wall Murals:</strong>{" "}
            <span className="text-gray-700">Choose </span>
            <a href="#" className="text-neon-pink hover:underline">custom wall murals</a>
            <span className="text-gray-700"> that evoke positive emotions or reflect the ambiance you want to create in a particular space.</span>
          </div>
          
          <div>
            <strong className="text-gray-900">Wallpapers:</strong>{" "}
            <span className="text-gray-700">Tailor each </span>
            <a href="#" className="text-neon-pink hover:underline">custom wallpapers</a>
            <span className="text-gray-700"> to complement the specific decor of individual rooms, ensuring a cohesive and well-coordinated overall aesthetic.</span>
          </div>
          
          <div>
            <strong className="text-gray-900">Tapestries:</strong>{" "}
            <a href="#" className="text-neon-pink hover:underline">Custom tapestries</a>
            <span className="text-gray-700"> elevate your home, serving as personalized wall hangings or beach blankets.</span>
          </div>
          
          <div>
            <strong className="text-gray-900">Pillows:</strong>{" "}
            <span className="text-gray-700">Elevate your comfort and décor with our throw pillows, perfect for adding a cozy touch to any space.</span>
          </div>
          
          <div>
            <strong className="text-gray-900">Cushion Pillows & Covers:</strong>{" "}
            <span className="text-gray-700">Refresh and protect your cushion pillows effortlessly with our stylish covers, ensuring both comfort and durability.</span>
          </div>
          
          <div>
            <strong className="text-gray-900">Curtains:</strong>{" "}
            <span className="text-gray-700">Design curtains that complement your interior decor. </span>
            <a href="#" className="text-neon-pink hover:underline">Custom curtains</a>
            <span className="text-gray-700"> allow you to control light, showcase unique patterns, and create a cohesive design theme in your space.</span>
          </div>
          
          <div>
            <strong className="text-gray-900">Custom Door Mats:</strong>{" "}
            <a href="#" className="text-neon-pink hover:underline">Personalized door mats</a>
            <span className="text-gray-700"> welcome guests with a touch of your personality. They can be customized with names, quotes, or images, adding a warm and inviting touch to your entrance.</span>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="#" className="text-neon-pink font-medium hover:underline">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
