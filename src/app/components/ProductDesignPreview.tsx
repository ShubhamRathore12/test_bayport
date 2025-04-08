"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import useCartStore from "../store/useCartStore";

interface BaseItem {
  id: number;
  name: string;
  baseImage: string;
}

const baseItems: BaseItem[] = [
  {
    id: 1,
    name: "T-Shirt",
    baseImage:
      "https://elevennewyork.com/wp-content/uploads/2020/09/01_white-tee_front-scaled.jpg",
  },
  {
    id: 2,
    name: "Rug",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_1042813567.png.webp?v=7463",
  },
  {
    id: 3,
    name: "Handkerchief",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_772613375.png.webp?v=7463",
  },
  {
    id: 4,
    name: "Purse",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_877711895.png.webp?v=7463",
  },
];

export default function ProductDesignPreview() {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const [uploadedDesign, setUploadedDesign] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Record<number, boolean>>(
    {}
  );
  const addToCart = useCartStore((state) => state.addToCart);

  // Define overlay dimensions for each card (custom per base item)
  const [overlayDimensions, setOverlayDimensions] = useState<
    Record<number, { width: number; height: number; left: number; top: number }>
  >({
    1: { width: 100, height: 100, left: 100, top: 120 },
    2: { width: 100, height: 100, left: 100, top: 100 },
    3: { width: 100, height: 100, left: 100, top: 130 },
    4: { width: 100, height: 100, left: 95, top: 130 },
  });

  // Draw base images on canvases
  useEffect(() => {
    baseItems.forEach((item, index) => {
      const canvas = canvasRefs.current[index];
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const image = new Image();
          image.src = item.baseImage;
          image.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          };
        }
      }
    });
  }, []);

  // When design is uploaded, redraw each canvas with the base image and overlay.
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      const designSrc = event.target.result as string;
      setUploadedDesign(designSrc);

      const uploadedImage = new Image();
      uploadedImage.src = designSrc;
      uploadedImage.onload = () => {
        canvasRefs.current.forEach((canvas, index) => {
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
              const baseImage = new Image();
              baseImage.src = baseItems[index].baseImage;
              baseImage.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

                const { width, height, left, top } = overlayDimensions[
                  baseItems[index].id
                ] || {
                  width: canvas.width / 2,
                  height: canvas.height / 2,
                  left: 0,
                  top: 0,
                };

                // Draw the uploaded image at custom offset
                ctx.drawImage(uploadedImage, left, top, width, height);
              };
            }
          }
        });
      };
    };
    reader.readAsDataURL(file);
  };

  // Automatically select all items once the design is uploaded.
  useEffect(() => {
    if (uploadedDesign) {
      const newSelected = baseItems.reduce((acc, item) => {
        acc[item.id] = true;
        return acc;
      }, {} as Record<number, boolean>);
      setSelectedItems(newSelected);
    }
  }, [uploadedDesign]);

  const triggerUpload = () => document.getElementById("fileUploader")?.click();

  const handleSwitchChange = (itemId: number) => {
    setSelectedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleAddToCart = () => {
    const itemsToAdd = baseItems.filter((item) => selectedItems[item.id]);

    if (itemsToAdd.length === 0 || !uploadedDesign) {
      alert(
        "Please upload a design and make sure at least one item is selected."
      );
      return;
    }

    addToCart({ items: itemsToAdd, design: uploadedDesign });
    alert("Items added to cart successfully!");
  };

  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-2xl font-semibold mb-8">Preview Your Design</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {baseItems.map((item, index) => (
          <div key={item.id} className="p-4 relative">
            <div className="relative">
              <canvas
                ref={(el: any) => (canvasRefs.current[index] = el)}
                width={300}
                height={300}
                className="border rounded-md mx-auto"
              ></canvas>
              {/* Display overlay dimensions at the top left */}

              {/* Switch and status label at the top right */}
              <div className="absolute top-2 right-2 flex flex-col items-end">
                {uploadedDesign && selectedItems[item.id] && (
                  <div className="text-xs font-semibold text-pink-500">
                    ON - Add to Cart
                  </div>
                )}
                {uploadedDesign && (
                  <Switch
                    checked={selectedItems[item.id] || false}
                    onCheckedChange={() => handleSwitchChange(item.id)}
                    className="mt-2 bg-pink-500"
                  />
                )}
              </div>
            </div>
            <p className="mt-4 font-medium text-sm">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button
          onClick={uploadedDesign ? handleAddToCart : triggerUpload}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
        >
          {uploadedDesign ? "Add to Cart" : "Upload Your Design"}
        </Button>
        <input
          id="fileUploader"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
    </section>
  );
}
