import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">Магазин 3D-печати</Link>
      <Link to="/CartPage" className="relative flex items-center">
        <span className="text-xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
