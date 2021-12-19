import PropTypes from 'prop-types';
import { useMemo, createContext, useContext, useState, useEffect } from 'react';
import { getProducts } from '../../../services/products';

const Product = createContext();

export const ProductProvider = ({ children, value = [] }) => {
  const [products, setProducts] = useState(value);

  const productsToPass = useMemo(() => ({ products, setProducts }));

  useEffect(() => {
    const fetchProducts = async () => {
      const allproducts = await getProducts();
      setProducts(allproducts);
    };
    fetchProducts();
  }, []);

  return <Product.Provider value={productsToPass}>{children}</Product.Provider>;
};

export const useStateProduct = () => {
  const context = useContext(Product);

  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};

ProductProvider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
};

ProductProvider.defaultProps = {
  value: [],
};
