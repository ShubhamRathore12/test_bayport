"use client";

import { useEffect, useRef, useState } from "react";

const baseItems = [
  {
    id: 1,
    name: "T-Shirt",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_2037194457.png.webp?v=7463",
    overlay: {
      top: "27%",
      left: "34%",
      width: "38%",
      height: "34%",
    },
  },
  {
    id: 2,
    name: "Rug",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_1042813567.png.webp?v=7463",
    overlay: {
      top: "35%",
      left: "33%",
      width: "35%",
      height: "30%",
    },
  },
  {
    id: 3,
    name: "Handkerchief",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_772613375.png.webp?v=7463",
    overlay: {
      top: "32%",
      left: "25%",
      width: "50%",
      height: "50%",
    },
  },
  {
    id: 4,
    name: "Purse",
    baseImage:
      "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_877711895.png.webp?v=7463",
    overlay: {
      top: "41%",
      left: "35%",
      width: "30%",
      height: "30%",
    },
  },
];

export default function PlainCanvasDesigner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [designImage, setDesignImage] = useState<HTMLImageElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(baseItems[0]);

  const [imgPos, setImgPos] = useState({
    x: 130,
    y: 160,
    width: 140,
    height: 140,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const base = new Image();
    base.src = selectedItem.baseImage;

    base.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(base, 0, 0, canvas.width, canvas.height);

      if (designImage) {
        ctx.drawImage(
          designImage,
          imgPos.x,
          imgPos.y,
          imgPos.width,
          imgPos.height
        );
      }
    };

    if (designImage) {
      designImage.onload = () => {
        ctx.drawImage(
          designImage,
          imgPos.x,
          imgPos.y,
          imgPos.width,
          imgPos.height
        );
      };
    }
  }, [designImage, imgPos, selectedItem]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      setDesignImage(img);
    };
    reader.readAsDataURL(file);
  };

  const downloadDesign = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${selectedItem.name.toLowerCase()}-design.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!designImage) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (
      x >= imgPos.x &&
      x <= imgPos.x + imgPos.width &&
      y >= imgPos.y &&
      y <= imgPos.y + imgPos.height
    ) {
      setDragging(true);
      setOffset({ x: x - imgPos.x, y: y - imgPos.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging || !designImage) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - offset.x;
    const y = e.clientY - rect.top - offset.y;

    setImgPos({ ...imgPos, x, y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <h2 className="text-2xl font-semibold">Design Your Product</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {baseItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`border rounded p-2 w-40 transition hover:scale-105 shadow-sm ${
              selectedItem.id === item.id ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={item.baseImage}
              alt={item.name}
              className="w-full h-auto"
            />
            <p className="text-sm mt-2 font-medium">{item.name}</p>
          </button>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={500}
        className="border border-gray-400 bg-white shadow"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

      <div className="flex flex-col gap-3">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {designImage && (
          <button
            onClick={downloadDesign}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download Design
          </button>
        )}
      </div>
    </div>
  );
}
