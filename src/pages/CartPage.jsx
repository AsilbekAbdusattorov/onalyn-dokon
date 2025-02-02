import React from "react";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useOutletContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Корзина</h1>
      {cart.length === 0 ? (
        <p className="text-xl text-center text-gray-500">Корзина пуста.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
                  onClick={() => removeFromCart(item.id)}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Завершить покупку
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
