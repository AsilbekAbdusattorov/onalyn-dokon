import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8">Savat</h2>
      {cart.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <ul className="mt-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between border p-2">
              {item.name} - ${item.price}
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                O‘chirish
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
