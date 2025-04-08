import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const designCategories = [
  { name: "Neon Designs", image: "/placeholder.svg?height=200&width=200" },
  { name: "Spring Summer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Vintage", image: "/placeholder.svg?height=200&width=200" },
  { name: "Abstract", image: "/placeholder.svg?height=200&width=200" },
  {
    name: "Space and Astronomy",
    image: "/placeholder.svg?height=200&width=200",
  },
  { name: "Nature", image: "/placeholder.svg?height=200&width=200" },
  { name: "Kids", image: "/placeholder.svg?height=200&width=200" },
  { name: "Geometric", image: "/placeholder.svg?height=200&width=200" },
  { name: "Minimalist", image: "/placeholder.svg?height=200&width=200" },
  { name: "Botanical", image: "/placeholder.svg?height=200&width=200" },
];

interface DesignCategoriesProps {
  categoryName?: string;
}

export function DesignCategories({ categoryName = "" }: DesignCategoriesProps) {
  return (
    <div className="bg-white shadow-md py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            We Curate, You Create - Explore 60K+ Designs
          </h2>
          <Button className="bg-pink-500 hover:bg-pink-600">
            Start Creating
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {designCategories.map((category) => (
            <Link href="#" key={category.name} className="group">
              <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md bg-white">
                <div className="p-2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="w-full h-auto aspect-square object-cover rounded-md"
                  />
                </div>
                <div className="text-center py-3 font-medium">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
