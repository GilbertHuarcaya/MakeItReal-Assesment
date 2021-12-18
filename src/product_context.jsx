import { createContext, useContext, useState } from 'react';

const Product = createContext();

export const ProductProvider = ({ children, value }) => {
  const [fontsize, setFontsize] = useState(value);

  const productToPass = {
    fontsize,
    setFontsize,
  };

  return <Product.Provider value={productToPass}>{children}</Product.Provider>;
};

export const useStateProduct = () => {
  const context = useContext(Product);

  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};
