"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Variant } from "@/services/products/types";

interface InfoProps {
  name: string;
  variants: Variant[];
  selectedVariant: Variant | null;
  onVariantSelect: (variant: Variant) => void;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
  isWishlisted: boolean;
}

const Info: React.FC<InfoProps> = ({
  name,
  variants,
  selectedVariant,
  onVariantSelect,
  onAddToCart,
  onAddToWishlist,
  isWishlisted,
}) => {
  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.color.colorName))
  );

  const uniqueStorages = Array.from(
    new Set(variants.map((variant) => variant.storage))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        {selectedVariant && (
          <p className="mt-2 text-2xl text-primary">
            {formatPrice(selectedVariant.price)}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Màu sắc</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(variants.map(v => v.color.colorName))).map((colorName) => {
              const variant = variants.find(v => v.color.colorName === colorName);
              if (!variant) return null;
              return (
                <button
                  key={variant.color.colorName}
                  onClick={() => onVariantSelect(variant)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedVariant?.color.colorName === colorName
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-primary"
                  }`}
                >
                  {variant.color.colorName}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Dung lượng</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(variants.map(v => v.storage))).map((storage) => {
              const variant = variants.find(v => v.storage === storage);
              if (!variant) return null;
              return (
                <button
                  key={storage}
                  onClick={() => onVariantSelect(variant)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedVariant?.storage === storage
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-primary"
                  }`}
                >
                  {storage}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onAddToCart}
          className="flex-1"
          disabled={!selectedVariant}
        >
          Thêm vào giỏ hàng
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onAddToWishlist}
          disabled={!selectedVariant}
          className={isWishlisted ? "text-red-500" : ""}
        >
          <Heart className="h-5 w-5" fill={isWishlisted ? "currentColor" : "none"} />
        </Button>
      </div>

      {selectedVariant && (
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Tình trạng</h3>
            <p className={selectedVariant.stock_quantity > 0 ? "text-green-500" : "text-red-500"}>
              {selectedVariant.stock_quantity > 0 ? "Còn hàng" : "Hết hàng"}
            </p>
          </div>
          <div>
            <h3 className="font-medium">Mô tả</h3>
            <p className="text-gray-600">{selectedVariant.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info; 