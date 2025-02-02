import React from "react";
import { products } from "/data"; // импорт из файла data.js
import { useOutletContext } from "react-router-dom";

const ProductList = () => {
  const { addToCart } = useOutletContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-lg text-gray-500">${product.price}</p>
            <button
              className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
              onClick={() => addToCart(product)}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
