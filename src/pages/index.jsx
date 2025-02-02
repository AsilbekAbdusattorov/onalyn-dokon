import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductList from '../components/ProductList';

const Index = () => {
  const { addToCart, cart } = useOutletContext();

  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Index;
