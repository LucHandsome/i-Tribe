"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square relative rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square relative rounded-lg overflow-hidden ${
              selectedImage === index
                ? "ring-2 ring-primary"
                : "hover:opacity-75 transition"
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 