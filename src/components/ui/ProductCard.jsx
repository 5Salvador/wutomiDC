import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ image, name, price, alt, discount, rating }) => {
  const formattedPrice = price?.toLocaleString("pt-MZ") || "0";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
          -{discount}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={alt || name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Product Name */}
        <h3 className="text-lg md:text-xl font-semibold font-lora text-gray-900 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary font-quincy">
            {formattedPrice}
          </span>
          <span className="text-lg font-medium text-gray-600">MZN</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            Ver Detalhes
          </button>
          <button
            className="p-3 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
            title="Adicionar ao carrinho"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
