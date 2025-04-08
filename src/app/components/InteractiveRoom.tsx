
import { Plus } from "lucide-react";

const InteractiveRoom = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <div className="relative">
          <img
            src="/lovable-uploads/c8232377-98c6-44f4-87a4-dc90f5c26578.png"
            alt="Interactive Room"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          
          {/* Hotspots */}
          <button className="pink-circle absolute top-[20%] left-[20%] w-10 h-10">
            <Plus className="h-6 w-6" />
          </button>
          
          <button className="pink-circle absolute top-[15%] right-[20%] w-10 h-10">
            <Plus className="h-6 w-6" />
          </button>
          
          <button className="pink-circle absolute top-[50%] right-[30%] w-10 h-10">
            <Plus className="h-6 w-6" />
          </button>
          
          <button className="pink-circle absolute bottom-[30%] left-[50%] w-10 h-10">
            <Plus className="h-6 w-6" />
          </button>
          
          <button className="pink-circle absolute bottom-[20%] right-[20%] w-10 h-10">
            <Plus className="h-6 w-6" />
          </button>
          
          <div className="bg-black/40 text-white absolute bottom-8 left-8 p-4 rounded-lg">
            <p className="flex items-center">
              <span className="pink-circle w-8 h-8 mr-3">
                <Plus className="h-5 w-5" />
              </span>
              to Personalize Decor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveRoom;
